import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Heart, MessageCircle, Bookmark } from "lucide-react";

const TopArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Test Article",
      description: "Exploring the latest trends and technologies shaping web development",
      image: "https://i.pinimg.com/736x/dd/7c/cd/dd7ccd56ba969a9a4cc42153dcae7fed.jpg",
      category: "K-Drama",
      readTime: "5 min read",
      likes: 234,
      comments: 56,
      author: {
        name: "Sarah Johnson",
        avatar: "https://i.pinimg.com/236x/bd/af/bf/bdafbf81a88e8872b457dd2779840931.jpg",
        role: "Senior Developer"
      },
      date: "Feb 18, 2025"
    },
    {
      id: 2,
      title: "Love Next Door",
      description: "A comprehensive guide to creating maintainable design systems",
      image: "https://i.pinimg.com/736x/0f/77/34/0f7734971a0fc25e106c6a4ce5658422.jpg",
      category: "Design",
      readTime: "8 min read",
      likes: 189,
      comments: 42,
      author: {
        name: "Mike Chen",
        avatar: "https://i.pinimg.com/236x/8d/92/ba/8d92bab923a14783979fd22cf60955e7.jpg",
        role: "UX Designer"
      },
      date: "Feb 19, 2025"
    },
    {
      id: 3,
      title: "Mastering React Performance",
      description: "Advanced techniques for optimizing React applications",
      image: "https://i.pinimg.com/736x/70/16/1e/70161ec5744e2b8c2aa3e8cf9e9f568d.jpg",
      category: "Development",
      readTime: "6 min read",
      likes: 156,
      comments: 38,
      author: {
        name: "Alex Kumar",
        avatar: "https://i.pinimg.com/236x/bd/af/bf/bdafbf81a88e8872b457dd2779840931.jpgs",
        role: "Tech Lead"
      },
      date: "Feb 20, 2025"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Top Articles</h2>
          <p className="mt-2 text-gray-600">Discover our most popular and engaging content</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className="absolute left-4 top-4">{article.category}</Badge>
              </div>

              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                  <span className="mx-2">•</span>
                  {article.date}
                </div>
                <CardTitle className="line-clamp-2 text-xl">{article.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {article.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={article.author.avatar} />
                      <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{article.author.name}</p>
                      <p className="text-sm text-gray-600">{article.author.role}</p>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-red-500">
                      <Heart className="h-5 w-5" />
                      <span>{article.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
                      <MessageCircle className="h-5 w-5" />
                      <span>{article.comments}</span>
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-purple-500">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArticles;