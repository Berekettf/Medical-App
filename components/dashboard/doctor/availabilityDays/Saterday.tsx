import { Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Saterday() {
  const [selectedTimes, setSelectedTimes] = useState([
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
  ]);
  const [loading, setLoading] = useState(false);
  const timeArray = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];
function addAll(){
    setSelectedTimes(timeArray);
}
  function clearAll(){
    setSelectedTimes([]);
  }
  function addtime(time:string){
    if (!selectedTimes.includes(time)){
      setSelectedTimes([...selectedTimes, time]);
    }else{
        toast.error("already submitted")
    }
  }
  function removeTime(time: string){
    setSelectedTimes(selectedTimes.filter((t) => t!== time));
  }
  return (
    <div className="grid grid-cols-2 border border-gray-200">
        <div className="p-4">
        <h1 className="text-center ">   Here are the selected Available times</h1>
      <div className="grid grid-cols-3 p-4 gap-2 border-r border-gray-200">
        <button onClick={addAll} className="flex items-center justify-center gap-1 p-2 border border-gray-200 rounded-md text-sm">
          Add All
          <Plus className="w-4 h-4" />
        </button>
        {timeArray.map((time, t) => {
          return (
            <button
              key={t}
              onClick={()=>addtime(time)}
              className="flex items-center gap-1 justify-center p-2 border border-gray-200 rounded-md text-sm"
            >
              {time}
              <Plus className="w-4 h-4" />
            </button>
          );
        })}
      </div>
        </div>

      <div className="p-4">
        <h1 className="text-center ">   Here are the selected Available times</h1>
        <div className="grid grid-cols-3 p-4 gap-2 border-r border-gray-200">
        {selectedTimes.map((time, t) => {
            return (
              <button
                key={t}
                onClick={()=>removeTime(time)}
                className="flex items-center gap-1 justify-center p-2 border border-gray-200 rounded-md text-sm"
              >
                {time}
                <X className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      {selectedTimes.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-100 py-6 px-4">
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
              <X className="w-4 h-4" />
            </button>
          
        </div>
      )}
      </div>
     
    </div>
  );
}
