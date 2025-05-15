import { Button } from "@/components/ui/button";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignOutButton,
// } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import TerminalOverlay from "@/components/TerminalOverlay";
import UserPrograms from "@/components/UserPrograms";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden text-[var(--primary-foreground)]">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-col-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="mobileHeroDec absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2 border-[var(--border-g)]"></div>

            {/* LEFT SIDE */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="mobile-mainTitle text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div>
                  <span className="text-[var(--primary-foreground)]">
                    Transform
                  </span>
                </div>
                <div>
                  <span className="text-[var(--primary)]">Your Body</span>
                </div>
                <div className="pt-2">
                  <span className="text-[var(--primary-foreground)]">
                    With Advanced
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-[var(--primary-foreground)]">AI</span>
                  <span className="text-[var(--primary)]">Technology</span>
                </div>
              </h1>

              {/* seperator line */}
              <div className="h-px w-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-50"></div>

              <p className="text-xl text-[var(--muted-foreground)]">
                Unlock your full potential with FitPilot – your personal AI
                coach! Get customized diet plans and workout routines tailored
                to your unique goals and preferences.
              </p>
              {/* STATS */}
              <div className="gap18 flex items-center gap-10 py-6 font-mono g1">
                <div className="flex flex-col alc">
                  <div className="text-2xl text-[var(--primary)]">850+</div>
                  <div className="text-xs uppercase tracking-wider">
                    ACTIVE USERS
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent"></div>
                <div className="flex flex-col alc">
                  <div className="text-2xl text-[var(--primary)]">3min</div>
                  <div className="text-xs uppercase tracking-wider">
                    GENERATION
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent"></div>
                <div className="flex flex-col alc">
                  <div className="text-2xl text-[var(--primary)]">100%</div>
                  <div className="text-xs uppercase tracking-wider">
                    PERSONALIZED
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 mb18">
                <Button
                  // size="lg"
                  asChild
                  className="overflow-hidden bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-6 text-lg font-medium hover:font-bold transition-all duration-200"
                >
                  <Link
                    href={"/generate-program"}
                    className="flex items-center font-mono "
                  >
                    Launch My Plan
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT side content */}
            <div className="lg:col-span-5 relative mw90">
              {/* Corners */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[var(--border-g)]" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[var(--border-g)]" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[var(--border-g)]" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[var(--border-g)]" />
              </div>

              {/* Image */}
              <div className="realtive aspect-square max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/fitpilot-logo-wbg.png"
                    alt="dog logo of the firpilot bot"
                    className="size-full object-cover object-center h-full"
                  />
                  {/* SCAN LINE */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />
                </div>
              </div>
              <TerminalOverlay />
            </div>
          </div>
        </div>
      </section>
      <UserPrograms />
    </div>
  );
};

export default HomePage;
