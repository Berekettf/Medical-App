import Footer from "@/components/Frontend/Footer";
//import Megamenu from "@/components/Frontend/Megamenu";
import Navbar from "@/components/Frontend/Navbar";
import { SiteHeader } from "@/components/Site-header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <SiteHeader />
      {children}
      <Footer />
    </div>
  );
}
