import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-md rounded-md">
        <div className="py-6 px-8">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <h2>Dr. Agegnehu Belay, PA-C</h2>
                <span>adult health</span>
              </div>
              <p>in person doctor visit</p>
              <p>3465 King George VI, Anbessa Gibi</p>
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
      </div>
    </div>
  );
}
