import DoctorDetails from "@/components/DoctorDetails";
import FixedBookButton from "@/components/FixedBookButton";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-50 min-h-screen dark:bg-slate-800 py-12">
      <div className="bg-white max-w-4xl border dark:bg-slate-900 dark:border-slate-600 border-gray-200 mx-auto shadow-md rounded-md">
        <div className="py-8 px-6">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <h2 className="font-bold uppercase text-2xl tracking-widest">
                  Dr. Agegnehu Belay, PA-C
                </h2>
                <span className="text-gray-500 uppercase text-xs">
                  adult health
                </span>
              </div>
              <div className="py-3">
                <p>in person doctor visit</p>
                <p>3465 King George VI, Anbessa Gibi</p>
              </div>
            </div>
            <Image
              src="/5.png"
              width={107} // Use square dimensions
              height={107} // Same as width to maintain 1:1 aspect ratio
              alt="doctorimg"
              className="w-36 h-36 rounded-full object-cover" // Ensure width and height match
            />
          </div>
        </div>
        <div className="">
          <DoctorDetails />
        </div>
      </div>
      <FixedBookButton />
    </div>
  );
}
