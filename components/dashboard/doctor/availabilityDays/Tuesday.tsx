import { createAvailability } from "@/actions/onboarding";
import SubmitButton from "@/components/formInput/SubmitButton";
import { Button } from "@/components/ui/button";
import { DoctorProfile } from "@prisma/client";
import { Loader, Plus, X } from "lucide-react";
import { availableMemory } from "process";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Tuesday({profile}:{profile:DoctorProfile| undefined | null}) {
  const [loading, setLoading] = useState(false);
  console.log(profile)

  const timeArray = [
    "7:00 Am",
    "8:00 Am",
    "9:00 Am",
    "10:00 Am",
    "11:00 Am",
    "12:00 Am",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 Am",
    "5:00 pm",
    "6:00 pm",
  ];
  const [selectedTimes, setSelectedTimes] = useState([
    "7:00 Am",
    "8:00 Am",
    "9:00 Am",
    "10:00 Am",
  ]);

  //console.log(selectedTimes);
  function handleAddTime(time: string) {
    if (!selectedTimes.includes(time)) {
      setSelectedTimes((prevTimes) => [...prevTimes, time]);
    } else {
      toast.error(`${time} already added `);
    }
  }
  function handleAddAll() {
    setSelectedTimes([...timeArray]);
  }
function clearAll(){
  setSelectedTimes([])
}
async function handleSubmit(){
  setLoading(true)
  try {
    if(profile?.id){
      const data = {
        monday: selectedTimes,
        doctorProfileId: profile?.id
      }
      await createAvailability(data)
      setLoading(false)
      console.log(data)
      // onsubmitDate(selectedTimes)
    }else{
      console.log("id not found")
    }
    
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
  
}
  {
    /*async function onsubmitDate(date: string[]){
      setLoading(true)
      console.log(date)
      try {
        const res = await availableMemory(date)
        if (res.status===200){
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        toast.success("saved successfully")
      }
      // await updateProfile(id, {availability: date})
     
    }*/
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 border border-gray-100 shadow rounded-md dark:border-gray-600">
      <div className="p-4">
        <h2 className="font-semibold">
          Select the time you are available this day
        </h2>
        <div className="py-6 gap-3 grid grid-cols-3 ">
          <button
            onClick={handleAddAll}
            className=" gap-1 flex items-center p-2 border border-blue-100 text-sm rounded-sm justify-center"
          >
            <span>Add All</span>
            <Plus className="h-3 w-3" />
          </button>
          {timeArray.map((time, index) => (
            <button
              key={index}
              onClick={() => handleAddTime(time)}
              className=" gap-1 flex items-center p-2 border border-blue-100 text-sm rounded-sm justify-center"
            >
              <span>{time}</span>
              <Plus className="h-3 w-3" />
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold">here is your selected time</h2>
        <div className="grid grid-cols-3 gap-1 py-6">
          {selectedTimes.map((time, index) => (
            <button
              key={index}
              className=" flex items-center p-2 bg-blue-50 border border-gray-100 text-sm rounded-sm justify-center gap-1 "
            >
              <span>{time}</span>
              <Plus className="h-3 w-3" />
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
              onClick={clearAll}
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
