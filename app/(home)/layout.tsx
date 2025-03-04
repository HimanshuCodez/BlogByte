import { prisma } from "@/lib/prisma";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
const layout = async ({ children }: { children: React.ReactNode }) => {
 
  const user = await currentUser();
  if (!user) {
    return <div>
   
    {children}
  </div>
  }
  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });
  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: `${user.fullName} ${user.lastName}`,
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }
  return (
    <div>
      
      {!user && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <SignIn />
        </div>
      )}
      {children}
    </div>
  );
};

export default layout;