import BlogFooter from "@/components/home/blog-footer";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover our most popular and trending content
            </p>
          </div>

          <Suspense
            fallback={
             
                <div className="text-center flex flex-col items-center">
                  {/* Spinner */}
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 dark:border-purple-400 mb-4"></div>

                  {/* Loading Text */}
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Loading...
                  </h1>
                </div>
              
            }
          >
            <TopArticles />
          </Suspense>
          {/* Articles Section */}

          {/* View All Articles Button */}
          <div className="mt-12 flex justify-center">
            <Link href="/articles/">
              <Button className="rounded-full px-6 py-3 text-lg font-medium transition hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  );
}
