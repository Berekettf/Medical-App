"use client";
import { type RegisterInputProps } from "@/types/types";
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

export default function BiodataForm() {
  const [dob, setDob] = useState<Date>();
  const [expiry, setExpiry] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  console.log(dob);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const genderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];

  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
    //setIsLoading(true);
  }

  return (
    <div className="w-full">
      <div className="grid gap-2 text-center border-b border-gray-200 pb-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          Bio Data
        </h1>
        <p className="text-balance text-muted-foreground">
          Enter your credentials to create an account
        </p>
      </div>
      <form className="py-4 px-4 mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 grid-cols-2">
          <TextInput
            label="First Name"
            register={register}
            name="firstName"
            errors={errors}
            placeholder="eg. Beka"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Last Name"
            register={register}
            name="lastName"
            errors={errors}
            placeholder="eg. Wube"
            className="col-span-full sm:col-span-1"
          />

          <TextInput
            label="Email address"
            register={register}
            name="email"
            errors={errors}
            type="email"
            placeholder="ex beka@gmail.com"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Middle Name(Optional)"
            register={register}
            name="middleName"
            errors={errors}
            placeholder="ex Mekicha"
            className="col-span-full sm:col-span-1"
          />
          <DatePickerInput
            title="Date of Birth"
            date={dob}
            setDate={setDob}
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Medical License"
            register={register}
            name="medicalLicense"
            errors={errors}
            placeholder="enter medical license"
            className="col-span-full sm:col-span-1"
          />
          <DatePickerInput
            title="Medical License Expiry"
            date={expiry}
            setDate={setExpiry}
            className="col-span-full sm:col-span-1"
          />
          <RadioInput
            radioOptions={genderOptions}
            errors={errors}
            title="Gender"
            name="gender"
            register={register}
            className="col-span-full sm:col-span-1"
          />
          <TextAreaInput
            label="Enter Your Biography"
            register={register}
            name="medicalLicense"
            errors={errors}
            placeholder="enter medical license"
            className="col-span-full sm:col-span-1"
          />
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
