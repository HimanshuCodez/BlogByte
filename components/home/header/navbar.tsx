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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
            Blog
          </span>
          <span className="text-foreground">Byte</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          {["Articles", "Tutorials", "About", "Dashboard"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <SearchInput />
          <ToggleMode />

          {/* Auth Buttons */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="hidden md:flex gap-2">
              <SignInButton>
                <Button variant="outline">Login</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Signup</Button>
              </SignUpButton>
            </div>
          </SignedOut>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="space-y-4 px-4 py-6">
            {["Articles", "Tutorials", "About", "Dashboard"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-base font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-lg"
              >
                {item}
              </Link>
            ))}

            <SignedOut>
              <div className="space-y-2 pt-4">
                <SignInButton>
                  <Button className="w-full">Login</Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="w-full">Signup</Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
