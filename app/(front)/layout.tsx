import Megamenu from "@/components/Frontend/Megamenu";
import Navbar from "@/components/Frontend/Navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Navbar />
      {/*<div className="bg-white mx-auto py-4 fixed top-20 container w-full left-0 right-0 mt-5 z-50">
        <Megamenu />
      </div>*/}
      <div className="mt-[40px]">{children}</div>
    </div>
  );
}
