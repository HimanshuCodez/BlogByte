import React from "react";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-[550px] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-950 to-indigo-950">
      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/2 h-56 w-56 animate-pulse rounded-full bg-gradient-to-r from-purple-600/20 to-violet-600/20 blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="container relative mx-auto flex h-full flex-col items-center justify-between gap-10 px-4 py-20 md:flex-row">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <Badge variant="secondary" className="animate-pulse">
            <Sparkles className="mr-2 h-4 w-4" />
            Welcome to Blog Byte
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Explore The World
            <br />
            Through{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Words
            </span>
          </h1>

          <p className="text-lg text-gray-300 md:max-w-[80%]">
            Join me on a journey through thoughts, ideas, and stories that inspire.
            Discover unique perspectives and engaging content.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" className="group">
              Start Reading
              <BookOpen className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              Latest Posts
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-gray-300 md:justify-start">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100+</p>
              <p className="text-sm">Articles</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">10k+</p>
              <p className="text-sm">Readers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-sm">Topics</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-purple-500/20"></div>
            
            {/* Image container with gradient border */}
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 p-1">
              <div className="h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 via-indigo-950 to-indigo-950">
                <img
                  src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                  alt="Blog Hero"
                  className="h-full w-full object-cover opacity-90 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-xl bg-purple-500/10 backdrop-blur-sm"></div>
            <div className="absolute -bottom-7 -left-7 h-14 w-14 rounded-lg bg-indigo-500/10 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;