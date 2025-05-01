import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="mb-2">HomePage</h1>
      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default HomePage;
