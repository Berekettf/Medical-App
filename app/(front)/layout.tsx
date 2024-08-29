import Footer from "@/components/Frontend/Footer";
//import Megamenu from "@/components/Frontend/Megamenu";
import Navbar from "@/components/Frontend/Navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
