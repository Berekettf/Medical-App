import { Calendar } from "lucide-react";
import React from "react";
import NewButton from "./NewButton";

export default function HomeDisplayCard() {
  return (
    <div className="flex items-center justify-center h-1/2">
      <div className="text-center px-4 py-4 border border-gray-200 shadow-md rounded-md flex flex-col items-center gap-2">
        <Calendar className="w-8 h-8" />
        <div className="py-3 text-sm">
        <p>You have 11 appointments Today</p>
        <p>11 new patients, 3 follow ups, and 4 annual physicals</p>
        </div>
        <NewButton title="New Appointment" href="#" />
      </div>
    </div>
  );
}
