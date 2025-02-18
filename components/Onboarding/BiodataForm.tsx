"use client";
import { type BiodataFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DatePickerInput } from "../formInput/DatePickerInput";
import RadioInput from "../formInput/RadioInput";
import NumberTrackingGenereter from "@/lib/NumberTracking";
import { createDoctorProfile } from "@/actions/onboarding";
import { useOnBoardingContext } from "@/context/context";

export type StepInputProps = {
  page: string;
  userId?: string;
  title: string;
  description: string;
  nextPage?: string;
  formId?: string;
};

export default function BiodataForm({
  nextPage,
  userId,
  page,
  title,
  description,
  formId=""
}: StepInputProps) {
  const [dob, setDob] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BiodataFormProps>();

  const {
    truckingNumber,
    setTruckingNumber,
    doctorProfileId,
    setDoctorProfileId,
  } = useOnBoardingContext();

  console.log(truckingNumber, setTruckingNumber,doctorProfileId, setDoctorProfileId);
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

  async function onSubmit(data: BiodataFormProps) {
    setIsLoading(true);
    if (!dob) {
      toast.error("please select your DOB");
      return;
    }
    data.trackingNumber = NumberTrackingGenereter();
    data.userId = userId;
    data.dob = dob;
    data.page = page;
    console.log(data);
    //setIsLoading(true);

    try {
      const res = await createDoctorProfile(data);
  
      if (res.status==201){
      setIsLoading(false);
      setTruckingNumber(res.data?.trackingNumber??"");
      setDoctorProfileId(res.data?.id??"");
      router.push(`/onboarding/${userId}?page=${nextPage}`);
      setIsLoading(false);
      }else{
           setIsLoading(false)
      }
      
    } catch (error) {
      console.log("An unexpected error occurred:", error);
    }
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
            label="Middle Name(Optional)"
            register={register}
            name="middleName"
            errors={errors}
            isRequired={false}
            placeholder="ex Mekicha"
            className="col-span-full sm:col-span-1"
          />
          <DatePickerInput
            title="Date of Birth"
            date={dob}
            setDate={setDob}
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
