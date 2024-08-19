"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export default function FixedBookButton() {
  return (
    <div>
      <div className="fixed bottom-0 w-full py-8 px-6 border border-gray-200 shadow-2xl rounded-md bg-white z-50">
        <div className="max-w-4xl mx-auto items-center flex justify-between gap-4">
          <div className="w-full">
            <p className="text-xl font-bold">$52</p>
            <p className="font-semibold text-sm">Tue, Mar 12-8:00 AM GMT+3</p>
          </div>
          <Button
            variant="outline"
            className="inline-flex items-center justify-center px-6 py-6
            text-sm font-semibold leading-5 text-white transition-all duration-200
            bg-slate-900 border border-transparent rounded-full focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 hover:bg-blue-900
             hover:text-slate-50 uppercase tracking-widest"
          >
            <Plus className="w-5 h-5 mr-1" />
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}
