"use client";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50  backdrop-blur-md border-b  py-3 paddingR-5">
      <div className="container mx-auto flex items-center justify-between gap1">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="fsz1 text-xl font-bold font-mono">
            Fit<span className="text-[#22C55E]">Pilot</span>.ai
          </span>
        </Link>
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="mobile-hidden flex items-center gap-1.5 text-sm hover:text-[#22C55E] transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-[#22C55E] transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate Program</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-[#22C55E] transition-colors"
              >
                <UserIcon size={16} />
                <span className="mobile-hidden">My Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="mobile-hidden ml-2 text-[#22C55E] font-bold border-[hsl(145_70%_72%)] hover:text-white hover:bg-[hsl(145,61%,28%)]"
              >
                <Link href="/generate-program" className="font-bold">
                  Get Started
                </Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-[hsl(145_70%_72%)] text-[#22C55E] hover:text-white hover:bg-[hsl(145,61%,28%)]"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button
                  variant={"outline"}
                  className="hover:border-[hsl(145_70%_72%)] hover:text-[#1a2c13] text-white bg-[hsl(145,61%,28%)] hover:bg-[hsl(145,40%,58%)]"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
