"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export default function FixedBookButton() {
  return (
    <div>
      <div className="fixed bottom-0 w-full py-8 px-6 border dark:bg-slate-700  border-gray-200 dark:border-slate-600 shadow-2xl rounded-md bg-white z-50">
        <div className="max-w-4xl mx-auto items-center flex justify-between gap-4">
          <div className="w-full">
            <p className="text-xl font-bold">$52</p>
            <p className="font-semibold text-sm">Tue, Mar 12-8:00 AM GMT+3</p>
          </div>
          <Button
            variant="outline"
            className="px-6 py-4 bg-blue-800 rounded-md hover:bg-red-800"
          >
            <Plus className="w-5 h-5 mr-1" />
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}
