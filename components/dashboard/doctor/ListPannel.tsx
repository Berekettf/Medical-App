"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Briefcase, Dot } from "lucide-react";

const tags = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `name-${i + 1}`,
}));

export default function ListPannel() {
  return (
    <ScrollArea className="h-screen w-full">
      {tags.map((tag) => (
        <Link
          key={tag.id} // Adding a key to each Link component
          href="dashboard/doctor/appointments/view/1"
          className="border mb-2 border-gray-200 shadow-sm text-xs bg-white py-3 px-2 inline-block w-full rounded-md"
        >
          <div className="flex justify-between items-center pb-2">
            <h2>Bereket Wube</h2>
            <span>4:00pm</span>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="flex items-center">
              <Dot />
              <span>Follow Up</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4" />
              <span>Exam</span>
            </div>
          </div>
        </Link>
      ))}
    </ScrollArea>
  );
}
