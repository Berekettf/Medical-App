import { Button } from "@/components/ui/button";
import { DoctorProfile } from "@prisma/client";
import { Loader, Plus, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Wensday({
  profile,
}: {
  profile: DoctorProfile | undefined | null;
}) {
  const [loading, setLoading] = useState(false);
  const [selectedTimes, setSelectedTimes] = useState([
    "7:00 Am",
    "8:00 Am",
    "9:00 Am",
  ]);


  const timeArray = [
    "7:00 Am",
    "8:00 Am",
    "9:00 Am",
    "10:00 Am",
    "11:00 Am",
    "12:00 Pm",
    "1:00 Pm",
    "2:00 Pm",
   
  ];
  
function addTime (time:string){
    if (!selectedTimes.includes(time)){
        setSelectedTimes((prevTimes) => [...prevTimes, time]);
    }else{
        toast.error(`${time} already added`);
    }
}
  function addAllTime() {
    setSelectedTimes([...timeArray]);
  }
  function removeAllTime(){
    setSelectedTimes([])
  }
  function removeTime(time: string) {
    setSelectedTimes((prevTimes) => prevTimes.filter((t) => t !== time));
  }
  function handleSubmit(){
    setLoading(true)
    try {
      if(profile?.id){
        const data = {
          wednesday: selectedTimes,
          doctorProfileId: profile?.id
        }
        // submit the data to the API
        // after submitting, clear the selectedTimes and set loading to false
        // toast.success('Availability updated successfully')
      }
    } catch (error) {
      toast.error('Failed to update availability')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 ">
      <div className="p-4">
        <h2 className="font-semibold">
          Select the time you are available this day
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 border-r border-gray-200 ">
          <button
            onClick={addAllTime}
            className="border flex border-gray-200 items-center gap-1 justify-center px-2 py-2 text-sm"
          >
            <span>Add All</span>
            <Plus className="w-4 h-4" />
          </button>
          {timeArray.map((time, i) => {
            return (
              <button
                key={i}
                onClick={()=>addTime(time)}
                className="border flex border-gray-200 items-center gap-1 justify-center px-2 py-2 text-sm rounded-sm"
              >
                <span>{time}</span>
                <Plus className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold">here is your selected time</h2>
        <div className="grid grid-cols-3 gap-1 py-6">
          {selectedTimes.map((time, index) => (
            <button
            onClick={()=>removeTime(time)}
              key={index}
              
              className=" flex items-center p-2 bg-blue-50 border border-gray-100 text-sm rounded-sm justify-center gap-1 "
            >
              <span>{time}</span>
              <X className="h-3 w-3" />
            </button>
          ))}
        </div>
        {selectedTimes.length > 0 && (
          <div className="border-t border-gray-200 pt-4 flex justify-between">
            {loading ? (<Button disabled>
              <Loader className="animate-spin w-4 h-4"/>
              Saving Please Wait...
            </Button>
          ) : (
            <Button onClick={handleSubmit}>Save Settings</Button>)}
            <button
              onClick={removeAllTime}
              className=" gap-1 flex items-center p-2 border border-red-500 text-sm rounded-sm justify-center"
            >
              <span>Clear All</span>
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
