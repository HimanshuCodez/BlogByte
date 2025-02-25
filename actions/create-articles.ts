"use server"
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const createArticleSchema = z.object({
    title: z.string().min(3).max(100),
    content: z.string().min(100),
    category: z.string().min(3).max(100)

})

type createArticlesFormstate = {
    errors: {
        title?: string[],
        content?: string[],
        category?: string[],
        featuredImage?: string[],
        formErrors?: string[]
    }
}

export const createArticle = async (prevState: createArticlesFormstate, formData: FormData): Promise<createArticlesFormstate> => {
    const result = createArticleSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
        category: formData.get('category')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    const { userId } = await auth()
    if (!userId) {
        return {
            errors: {
                formErrors: ['You must be logged in to create a new article']
            }
        }

    }
    const existingUser = await prisma.user.findUnique({
        where: { clerkUserId: userId },
    })
    if (!existingUser) {
        return {
            errors: {
                formErrors: ['User not Found.Please Register before creating Article']
            }
        }
    }
    const imageFile = formData.get('featuredImage') as File | null
    if (!imageFile || imageFile.name === 'undefined') {
        return {
            errors: {
                featuredImage: ['You must select an image for the featured article']
            }
        }
    }
    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadResponse: UploadApiResponse | undefined = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            resource_type: 'auto'
        }, (error, result) => {
            if (error) reject(error)
            else resolve(result)
        }
        )
        uploadStream.end(buffer)
    })
    const imageUrl = uploadResponse?.secure_url

    if(!imageUrl){
        return {
            errors: {
                featuredImage: ['Failed to upload image. Please try again.']
            }
        }
    }

    try {
        await prisma.articles.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                category: result.data.category,
                featuredImage:imageUrl,
                authorId:existingUser.id
            }
        })
    } catch (error:unknown) {
        if(error instanceof Error){
            return {
                errors: {
                    formErrors: [error.message]
                }
            }
        }else{
            return {
                errors:{
                     formErrors:['Some Internal Error Occurred']
                }
            }
        }
    }
    revalidatePath('/dashboard');
    redirect("/dashboard")
}