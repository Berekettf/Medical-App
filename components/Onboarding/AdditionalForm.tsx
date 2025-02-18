"use client";
import { AdditionalFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import SubmitButton from "../formInput/SubmitButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TextAreaInput } from "../formInput/TextAreaInput";
import { StepInputProps } from "./BiodataForm";
import { updateProfile } from "@/actions/onboarding";



export default function AdditionalForm({
  page,
  title,
  description,
  formId,
}: StepInputProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdditionalFormProps>();

  async function onSubmit(data: AdditionalFormProps) {
    data.page = page;
    console.log(data);
    setIsLoading(true);
    try {
      const res = await  updateProfile(formId, data)
      if (res?.status === 201) {
        setIsLoading(false);
        router.push("/dashboard")
      } else {
        setIsLoading(false);
        throw new Error("Profile update failed!");
      }
    } catch (error) {
      console.error(error);
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
          <TextAreaInput
            label="Enter Your Educaational History"
            register={register}
            name="educationHistory"
            errors={errors}
            placeholder="Enter Educational History Here "
          />
          <TextAreaInput
            label="Published Works or Research"
            register={register}
            name="research"
            errors={errors}
            placeholder="Enter your any Published Works or Research "
          />

          <TextAreaInput
            label="Enter Your accomplishment"
            register={register}
            name="accomplishment"
            errors={errors}
            placeholder="Enter your accomplishment or awards "
          />
          
          {/*<MultipleFileUploads
            label="Attach Additional Documents"
            files={additionalDocs}
            setFiles={setAdditionalDocs}
            endPoint="additionalDocs"
          />*/}
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
