"use server"
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import {v2 as cloudinary, UploadApiResponse} from 'cloudinary'

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
    const imageFile = formData.get('featuredImage') as File | null
    if (!imageFile || imageFile.name === 'undefined'){
        return {
            errors: {
                featuredImage: ['You must select an image for the featured article']
            }
        }
    }
    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadResponse : UploadApiResponse | undefined = await new Promise((resolve,reject)=>{
        
    })
    redirect("/dashboard")
}