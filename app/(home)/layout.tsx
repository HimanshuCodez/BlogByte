import { prisma } from "@/lib/prisma";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (!user) {
    // Redirect to sign-in page instead of returning null
    return <SignIn/>
  }

  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: user.fullName as string,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }

  return <div>{children}</div>;
};

export default Layout;
