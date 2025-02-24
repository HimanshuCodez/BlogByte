"use server"
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

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

export const createArticle = async (prevState: createArticlesFormstate,formData: FormData): Promise<createArticlesFormstate> => {
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
    redirect("/dashboard")
}