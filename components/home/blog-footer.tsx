import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
 
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  ArrowRight,
  FacebookIcon
} from "lucide-react";

const BlogFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
          <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Blog
                </span>
                <span className="text-foreground">Byte</span>
              </span>
            <p className="text-gray-600">
              Exploring the latest in technology, development, and digital innovation.
              Join our community of tech enthusiasts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 transition-colors hover:text-blue-600">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-pink-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-blue-800">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Articles', 'Categories', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center text-gray-600 transition-colors hover:text-gray-900">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Mail className="mr-2 h-4 w-4" />
                himanshugaur055@gmail.com
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="mr-2 h-4 w-4" />
                8368248797
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="mr-2 h-4 w-4" />
                123 Tech Street, Digital City
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest updates and articles.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white"
              />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pb-8 text-center md:flex-row">
          <p className="text-sm text-gray-600">
            © {currentYear} Blog Byte. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Himanshu Gaur
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;