"use client";
import { type BiodataFormProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DatePickerInput } from "../formInput/DatePickerInput";
import { TextAreaInput } from "../formInput/TextAreaInput";
import RadioInput from "../formInput/RadioInput";
import ImageInput from "../formInput/ImageInput";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Minus, Plus } from "lucide-react";
import { StepInputProps } from "./BiodataForm";



export default function AvailabilityForm({
  page,
  title,
  description,
}: StepInputProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BiodataFormProps>();
  const AvailabilityOptions = [
    {
      label:
        "Weekly (You are available one or more during the week, every week)",
      value: "weekly",
    },
    {
      label: "Specific Date (you are only available for specific data)",
      value: "spacificDate",
    },
  ];

  const WeekDays = [];

  async function onSubmit(data: BiodataFormProps) {
    data.page = page;
    console.log(data);
    //setIsLoading(true);
  }
  return (
    <div className="w-full">
      <div className="grid gap-2 text-center border-b border-gray-200 pb-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          {title}
        </h1>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
      <form className="py-4 px-4 mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 grid-cols-2">
          <TextInput
            label="What is the Duration of Your Meeting"
            register={register}
            name="durationMeeting"
            errors={errors}
          />

          <RadioInput
            radioOptions={AvailabilityOptions}
            errors={errors}
            title="When are you Available ?"
            name="availabilty"
            register={register}
          />

          <div className="col-span-full">
            <h2>Define your weekly availbility below:</h2>
            <div className="py-6 px-4 border border-gray-200 flex items-center justify-between gap-4">
              <div className="">
                <div className="flex items-center space-x-2">
                  <Checkbox id="day" />
                  <label
                    htmlFor="day"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Monday
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <div className="grid grid-cols-3 gap-2">
                  <Select>
                    <SelectTrigger id="hr">
                      <SelectValue placeholder="08" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(12)].map((_, index) => {
                        const hour = (index + 1).toString().padStart(2, "0"); // Formats hours as 01, 02, ... 12
                        return (
                          <SelectItem key={hour} value={hour}>
                            {hour}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="mn">
                      <SelectValue placeholder="00" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(60)].map((_, index) => {
                        const minute = index.toString().padStart(2, "0"); // Formats minutes as 00, 01, 02, ... 59
                        return (
                          <SelectItem key={minute} value={minute}>
                            {minute}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="meredian">
                      <SelectValue placeholder="am" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="1">am</SelectItem>
                    <SelectItem value="2">pm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Minus className="w-4 flex-shirnk-0"/>
                <div className="grid grid-cols-3 gap-2">
                  <Select>
                    <SelectTrigger id="hr">
                      <SelectValue placeholder="12" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(12)].map((_, index) => {
                        const hour = (index + 1).toString().padStart(2, "0"); // Formats hours as 01, 02, ... 12
                        return (
                          <SelectItem key={hour} value={hour}>
                            {hour}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="mn">
                      <SelectValue placeholder="00" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(60)].map((_, index) => {
                        const minute = index.toString().padStart(2, "0"); // Formats minutes as 00, 01, 02, ... 59
                        return (
                          <SelectItem key={minute} value={minute}>
                            {minute}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="meredian">
                      <SelectValue placeholder="am" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="1">am</SelectItem>
                    <SelectItem value="2">pm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="">
                <Button variant="ghost">
                  <Plus className="h-4 w-4 flex-shrink-0"/>
                  Add Window
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <SubmitButton
            title="Save and Continue"
            isLoading={isLoading}
            LoadingTitle="Saving, please wait..."
          />
        </div>
      </form>
    </div>
  );
}
