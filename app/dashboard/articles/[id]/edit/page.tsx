import EditArticlesPage from '@/components/articles/EditArticlePage'
import { prisma } from '@/lib/prisma'
import React from 'react'
type  EditArticleParams = {
params:Promise<{id:string}>
}
const page:React.FC<EditArticleParams> = async({params}) => {
    const id = (await params).id
    const article = await prisma.articles.findUnique({
        where: {id},
    })

    if(!article){
        return <h1>Article not found</h1>
    }
  return (
    <div>
        <EditArticlesPage article={article}/>
    </div>
  )
}

export default page