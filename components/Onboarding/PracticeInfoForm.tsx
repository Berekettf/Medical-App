"use client";
import { PracticeFormProps, type BiodataFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StringInputForm from "../formInput/StringInputForm";
import SelectInput from "../formInput/SelectInput";
import { StepInputProps } from "./BiodataForm";
import { prismaClient } from "@/lib/db";
import { updateProfile } from "@/actions/onboarding";

export default function BiodataForm({
  page,
  title,
  description,
  formId,
  nextPage,
  userId
}: StepInputProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PracticeFormProps>();
  const crearOptions = [
    {
      label: "Yes",
      value: "yes",
    },
    {
      label: "No",
      value: "no",
    },
  ];

  async function onSubmit(data: PracticeFormProps) {
    setIsLoading(true)
    data.page = page;
    data.serviceOfferd= services;
    data.insuranceAccepted = selectedOption;
    data.hospitalHoursOfOpration= Number(data.hospitalHoursOfOpration)
    console.log(data);
    //setIsLoading(true);

    try {
      const res = await updateProfile(formId, data)
      if(res?.status===201){
        setIsLoading(false)
        router.push(`/onboarding/${userId}?page=${nextPage}`)
        
      }else{
        throw new Error("Profile update failed!");
      }
    } catch (error) {
      setIsLoading(false)
      console.error("Profile update error:", error);
      
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
            label="Hospital Name"
            register={register}
            name="hospitalName"
            errors={errors}
            placeholder="Hospital Name You work"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Hospital Address"
            register={register}
            name="hospitalAddress"
            errors={errors}
            placeholder="Hospital Address"
            className="col-span-full sm:col-span-1"
          />

          <TextInput
            label="Hospital Contact Number"
            register={register}
            name="hospitalContactNumber"
            errors={errors}
            placeholder="Hospital Contact Number"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Hospital Email Address"
            register={register}
            name="hospitalEmailAddress"
            errors={errors}
            type="email"
            placeholder="Hospital Email"
            className="col-span-full sm:col-span-1"
          />
          
          <TextInput
            label="Hospital Hours Of Opration"
            register={register}
            name="hospitalHoursOfOpration"
            errors={errors}
            placeholder="Hospital Hours Of Opration"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Hospital Website (Optional)"
            register={register}
            name="hospitalWebsite"
            errors={errors}
            placeholder="Hospital Website"
            className="col-span-full sm:col-span-1"
            isRequired={false}
          />
          <StringInputForm
            label="Add Services Offered"
            items={services}
            setItems={setServices}
            itemTitle="Service Offered"
            className="col-span-full sm:col-span-1"
          />
          {/*<StringInputForm
            label="Language Spoken"
            items={languages}
            setItems={setLanguages}
            itemTitle="Languages Spoken"
            className="col-span-full sm:col-span-1"
          />*/}
          <SelectInput
            title="Do You Accept Insurance"
            optionTitle="Choose your profession"
            options={crearOptions}
            className="my-custom-class"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
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
