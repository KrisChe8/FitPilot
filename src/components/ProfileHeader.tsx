import React from "react";
import { UserResource } from "@clerk/types";
import CornerElements from "./CornerElements";

const ProfileHeader = ({ user }: { user: UserResource | null | undefined }) => {
  if (!user) return null;
  return (
    <div className="mb-10 relative backdrop-blur-sm border border-[var(--border)] p-6">
      <CornerElements />

      <div className="flex flex-col items-center md:flex-row  md:items-center gap-6">
        <div className="relative">
          {user.imageUrl ? (
            <div className="relative w-24 h-24 overflow-hidden  rounded-2xl">
              <img
                src={user.imageUrl}
                alt={user.fullName || "Profile"}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <span className="text-3xl font-bold text-[var(--primary)]">
                {user.fullName?.charAt(0) || "U"}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-[var(--background)]"></div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h1 className="text-3xl tac-T font-bold tracking-tight">
              <span className="text-[var(--foreground)]">{user.fullName}</span>
            </h1>
            <div className="flex items-center bg-[var(--cyber-terminal-bg)] backdrop-blur-sm border border-[var(--border)] rounded px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse mr-2"></div>
              <p className="text-xs font-mono text-[var(--primary)]">
                USER ACTIVE
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-50 my-2"></div>
          <p className="text-[var(--muted-foreground)] font-mono">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
