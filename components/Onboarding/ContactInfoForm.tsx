"use client";
import { ContactFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StepInputProps } from "./BiodataForm";
import { updateProfile } from "@/actions/onboarding";

export default function ContactInfoForm({
  userId,
  page,
  nextPage,
  formId,
  title,
  description,
}: StepInputProps) {
  const [dob, setDob] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  console.log(dob);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormProps>();

  async function onSubmit(data: ContactFormProps) {
    setIsLoading(true);
    data.page = page;
    console.log(data);
    //setIsLoading(true);
    try {
      const res = await updateProfile(formId, data);
      if (res?.status === 201) {
        setIsLoading(false);
        router.push(`/onboarding/${userId}?page=${nextPage}`);
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      throw new  Error("Error updating profile")
      setIsLoading(false);
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
            label="Email"
            register={register}
            name="email"
            type="email"
            errors={errors}
            placeholder="email"
          />
          <TextInput
            label="Phone"
            register={register}
            name="phone"
            type="tel"
            errors={errors}
            placeholder="phone"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Country"
            register={register}
            name="country"
            errors={errors}
            placeholder="country"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="City"
            register={register}
            name="city"
            errors={errors}
            placeholder="City"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="State"
            register={register}
            name="state"
            errors={errors}
            placeholder="state"
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
