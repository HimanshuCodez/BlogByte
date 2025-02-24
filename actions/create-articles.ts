"use server"
import {z} from 'zod'


const createArticleSchema = z.object({
    title: z.string().min(3).max(100),
    content: z.string().min(100),
    category: z.string().min(3).max(100)
    
})
export const createArticle = async(fromData:FormData) =>{

}