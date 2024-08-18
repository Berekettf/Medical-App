import { Button } from "flowbite-react";
import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DoctorCard({
  isinPerson = false,
}: {
  isinPerson?: boolean;
}) {
  const timeStamps = [
    {
      time: "8:40",
      period: "am",
    },
    {
      time: "9:30",
      period: "am",
    },
    {
      time: "10:00",
      period: "am",
    },
    {
      time: "1:30",
      period: "pm",
    },
    {
      time: "3:40",
      period: "pm",
    },
    {
      time: "4:30",
      period: "pm",
    },
    {
      time: "5:40",
      period: "pm",
    },
  ];
  return (
    <div className="border border-gray-200 bg-white inline-flex flex-col py-6 px-4 rounded-md hover:border-gray-400 duration-300 transition-all">
      <Link href="/doctors/slug">
        <h2 className="font-bold uppercase text-2xl tracking-widest">
          Dr. Agegnehu Belay, PA-C
        </h2>
        {isinPerson && (
          <p className="py-3">7485 Kink George VI, Anbessa gebi</p>
        )}
        <div className="flex items-center gap-4 py-4">
          <div className="relative">
            <Image
              src="/5.png"
              width={107} // Use square dimensions
              height={107} // Same as width to maintain 1:1 aspect ratio
              alt="doctorimg"
              className="w-24 h-24 rounded-full object-cover" // Ensure width and height match
            />
            {!isinPerson && (
              <p className="bg-blue-200 absolute bottom-0 right-1 text-blue-900 w-10 h-10 flex rounded-full items-center justify-center ">
                <Video className="w-6 h-6" />
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Family Medicine</span>
            </p>
            <p className="bg-green-200 py-3 px-6 uppercase">Available Today</p>
          </div>
        </div>
      </Link>
      <div className="pt-6 border-t border-gray-200">
        <h3 className="flex items-center justify-between">
          <span className="text-gray-600">Sun, Aug 18</span>{" "}
          <span className="font-bold">$120</span>
        </h3>
        <div className="py-3 grid grid-cols-3 gap-2">
          {timeStamps.splice(0, 5).map((item, i) => {
            return (
              <Link
                className="bg-blue-600 text-[0.7rem] text-white p-2 text-center"
                href="#"
                key={i}
              >
                {item.time}
                {item.period}
              </Link>
            );
          })}
          <Link
            className="bg-blue-900 text-white text-sm px-3 py-2 text-center truncate"
            href="/doctors/slug"
          >
            More times
          </Link>
        </div>
      </div>
    </div>
  );
}
