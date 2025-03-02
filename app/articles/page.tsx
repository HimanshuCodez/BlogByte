import {AllArticles} from "@/components/articles/AllArticles";
import SearchBarInput from "@/components/articles/SearchBarInput";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpLeftFromSquare } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container  mx-auto px-4 py-12 sm:px-6 lg:text-5xl">
        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All Articles
          </h1>
          {/* Search Bar */}
          <SearchBarInput/>
        </div>
        <AllArticles/>
        <div className="mt-12 flex justify-center gap-2">
         <Button variant={'ghost'}><ArrowLeft/>Prev</Button>
          <Button variant={'ghost'} size={'sm'}>1</Button>
          <Button variant={'ghost'} size={'sm'}>2</Button>
          <Button variant={'ghost'} size={'sm'}>3</Button>
          <Button variant={'ghost'} size={'sm'}>Next<ArrowRight/></Button>
        </div>
      </main>
    </div>
  )
};

export default page;
