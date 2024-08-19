"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Availability() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());

  // Extract the full GMT offset after "GMT"
  const GMT = bookDate?.toString().split("GMT")[1]?.trim().split(" ")[0];

  // Format the date and include the full GMT offset
  const formattedDate = `${bookDate
    ?.toString()
    .split(" ")
    .splice(0, 4)
    .join(" ")} - GMT${GMT}`;

  console.log(formattedDate);
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
    <div className="mb-[200px]">
      <h2 className="font-bold py-4 uppercase text-xl text-slate-500 tracking-widest">
        Select the date and time
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            <h2 className="pb-4 text-blue-700 text-center py-3 px-4 border border-blue-500">
              {formattedDate}
            </h2>
            <div className="py-3 grid grid-cols-3 gap-2">
              {timeStamps.splice(0, 5).map((item, i) => {
                return (
                  <button
                    className="bg-blue-600 text-[0.7rem] text-white p-2 text-center"
                    key={i}
                  >
                    {item.time}
                    {item.period}
                  </button>
                );
              })}
              <button className="bg-blue-900 text-white text-sm px-3 py-2 text-center truncate">
                More times
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
