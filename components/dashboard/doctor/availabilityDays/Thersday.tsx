import { Button } from "@/components/ui/button";
import { DoctorProfile } from "@prisma/client";
import { Loader, Plus, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Thersday({
  profile,
}: {
  profile: DoctorProfile | undefined | null;
}) {
  const [selectedTime, setSelectedTime] = useState(["2:00 am",
    "3:00 am"]);
  const [loading, setLoading] = useState(false);

  console.log(profile);

  function addAllTimes() {
    setSelectedTime([...timeArray]);
  }
  function addTime(time: string) {
    if (!selectedTime.includes(time)) {
      setSelectedTime((prevTimes) => [time, ...prevTimes]);
    } else {
      toast.error(`${time}` + "is already selected");
    }
  }
  function removeTime(time: string) {
    setSelectedTime((prevTime) => prevTime.filter((t) => t !== time));
  }

  function clearAllTimes() {
    setSelectedTime([]);
  }

  function handleSubmit() {
    setLoading(true);
    try {
      if (profile?.id) {
        const data = {
          thursday: selectedTime,
          doctorProfileId: profile?.id,
        };
        // submit the data to the API
        //...
      }
    } catch (error) {
      toast.error("Failed to submit availability");
    } finally {
      setLoading(false);
    }
  }

  const timeArray = [
    "2:00 am",
    "3:00 am",
    "4:00 am",
    "5:00 am",
    "6:00 am",
    "7:00 am",
    "8:00 am",
    "3:00 pm",
    "4:00 pm",
  ];
  
  
  return (
    <div className="grid grid-cols-2 text-sm border border-gray-200 ">
      <div className="p-6 border-r border-gray-200 pr-4">
        <h1 className="px-2">
          Select the time you are availability at Thersday
        </h1>
        <div className="grid grid-cols-3  text-sm py-4 gap-3">
          <button
            onClick={addAllTimes}
            className="rounded-md p-2 text-sm flex items-center justify-center gap-2 bg-slate-100"
          >
            <span>Add All</span> <Plus className="w-4 h-4" />
          </button>
          {timeArray.map((time, i) => {
            return (
              <button
                onClick={() => addTime(time)}
                key={i}
                className="rounded-md p-2 text-sm flex items-centerjustify-center gap-2 bg-slate-100"
              >
                <span>{time}</span>
                <Plus className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      </div>
      <div className="p-6">
        <h1>Times you are selected</h1>

        {selectedTime.length > 0 && (
          <div className="py-3">
            <div className="grid grid-cols-3 gap-3 border border-gray-200 pb-3 ">
              {selectedTime.map((time, i) => {
                return (
                  <button
                    onClick={() => removeTime(time)}
                    key={i}
                    className="rounded-md p-2 text-sm flex items-center justify-center gap-2 bg-slate-100"
                  >
                    <span>{time}</span>
                    <X className="w-4 h-4 text-sm" />
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between items-center mt-3">
              {loading ? (
                <Button>
                  <Loader className="animate-spin w-4 h-4" />
                  Saving Please Wait...
                </Button>
              ) : (
                <Button>
                  <span>Save Settings</span>
                </Button>
              )}
              <button
                onClick={clearAllTimes}
                className="rounded-sm border border-red-500 p-2 items-center flex gap-1"
              >
                <span> Clear All</span>
                <X className="w-4 h-4 text-red-400" />
              </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
