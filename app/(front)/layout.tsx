import Footer from "@/components/Frontend/Footer";
//import Megamenu from "@/components/Frontend/Megamenu";
import Navbar from "@/components/Frontend/Navbar";
import { SiteHeader } from "@/components/Site-header";
import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="">
      <SiteHeader session={session} />
      {children}
      <Footer />
    </div>
  );
}
