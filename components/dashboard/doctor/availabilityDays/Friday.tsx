import { Plus, X } from "lucide-react";
import React, { useState } from "react";

export default function Friday() {
  const [selectedTimes, setSelectedTimes] = useState([
    "08:00 AM",
    "09:00 AM",
    "08:00 AM",
  ]);

  const [loading, setLoading] = useState(false);

  const timeArary = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];
function removeTime(time: string){
    setSelectedTimes(selectedTimes.filter((t) => t!== time));
  
}
function addTime(time: string){
    if (!selectedTimes.includes(time)){
        setSelectedTimes([...selectedTimes, time]);
    }
}
  function addAll(){
    setSelectedTimes(timeArary);
  }
  function clearAll(){
    setSelectedTimes([]);
  }


  return (
    <div className="p-6 gap-3 flex border border-gray-200">
      <div className=" px-6 border-r border-gray-200">
        <h2 className="mb-3 px-6">Select your friday Availability</h2>
        <div className="grid grid-cols-3 gap-2 ">
          <button onClick={addAll} className="flex border border-gray-200 bg-slate-50 items-center p-2 gap-1 rounded-sm text-sm ">
            add All
            <Plus className="w-4 h-4" />
          </button>
          {timeArary.map((time, t) => {
            return (
              <button onClick={()=>addTime(time)}
                className="flex border border-gray-200 bg-slate-50 gap-1 items-center p-2 rounded-sm text-sm"
                key={t}
              >
                {time}
                <Plus className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="mb-4 px-4">Select your friday Availability</h2>
        <div className="grid grid-cols-3 gap-2 ">
          {selectedTimes.map((time, t) => {
            return (
              <button
                className="flex border border-gray-200 bg-slate-50 gap-1 items-center p-2 rounded-sm text-sm"
                key={t}
                onClick={()=>removeTime(time)}
              >
                {time}
                <X className="w-4 h-4" />
              </button>
            );
          })}
        </div>
        {selectedTimes.length > 0 && (
          <div className="flex justify-between items-center px-8 mt-6 pt-6 border-t border-gray-200">
            {loading ? (
              <button className="flex border border-gray-200 bg-slate-400 items-center p-2 gap-1 rounded-sm text-sm">
                please wait saving..
              </button>
            ) : (
              <button className="flex border border-gray-200 bg-slate-400 items-center p-2 gap-1 rounded-sm text-sm">
                Save Settinng
              </button>
            )}
            <button onClick={clearAll} className="border gap-1 border-red-200 items-center flex p-2 rounded-sm text-sm">
                clearAll
                <X className="w-4 h-4"/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
