"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import SearchInput from "./search";
import ToggleMode from "./toggleMode";
import { Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* left section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
                  Blog
                </span>
                <span className="text-foreground">Byte</span>
              </span>
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="/Articles"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href="/tutorials"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Tutorials
            </Link>
            <Link
              href="/About"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          </div>
          {/* right section */}
          <div className="flex items-center gap-4">
            <SearchInput />
            <ToggleMode />
            {/* if signed in show user profile */}
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* if signout show login signup div */}
            <SignedOut>
              <div className="hidden items-center gap-2 md:flex">
                <SignInButton>
                  <Button variant={"outline"}>Login</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Signup</Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
          {/* mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 pb-6 pt-2">
              <Link
                href="/Articles"
                className="block px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Articles
              </Link>
              <Link
                href="/tutorials"
                className="block px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Tutorials
              </Link>
              <Link
                href="/About"
                className="block px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Dashboard
              </Link>
              <div className="space-y-2 px-3 pt-4">
                <Button className="w-full">Login</Button>
                <Button className="w-full">Signup</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
