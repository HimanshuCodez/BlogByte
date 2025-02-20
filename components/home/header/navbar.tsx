"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import SearchInput from "./search";
import ToggleMode from "./toggleMode";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* left section */}
          <div className="flex items-center gap-8 ">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Blog
                </span>
                <span className="text-foreground">Byte</span>
              </span>
            </Link>
          </div>
          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href={"/Articles"}
              className="text-sm font-medium text-foreground  transition-colors hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href={"/tutorials"}
              className="text-sm font-medium text-foreground  transition-colors hover:text-foreground"
            >
              Tutorials
            </Link>
            <Link
              href={"/About"}
              className="text-sm font-medium text-foreground  transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href={"/dashboard"}
              className="text-sm font-medium text-foreground  transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          </div>
          {/* right section */}
          <div className="flex items-center gap-4">
            <SearchInput />
            <ToggleMode />
            <div className=" hidden md:flex items-center gap-2">
              <Button>Login</Button>
              <Button>Signup</Button>
            </div>
          </div>
          {/* mobile menu */}
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden text-muted-foreground hover:text-foreground "
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 " />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
