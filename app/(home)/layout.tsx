import { prisma } from "@/lib/prisma";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (!user) {
    return <div>{children}</div>;
  }

  try {
    let loggedInUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!loggedInUser) {
      loggedInUser = await prisma.user.create({
        data: {
          clerkUserId: user.id,
          name: user.fullName, // Clerk provides full name, no need for lastName
          email: user.emailAddresses[0].emailAddress,
          imageUrl: user.imageUrl,
        },
      });
    }
  } catch (error) {
    console.error("Error fetching or creating user in Prisma:", error);
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <SignIn />
      </div>
      {children}
    </div>
  );
};

export default Layout;
