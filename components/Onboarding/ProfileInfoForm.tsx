"use client";
import { ProfileFormProps, type BiodataFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DatePickerInput } from "../formInput/DatePickerInput";
import { TextAreaInput } from "../formInput/TextAreaInput";
import ImageInput from "../formInput/ImageInput";
import { StepInputProps } from "./BiodataForm";
import { useOnBoardingContext } from "@/context/context";
import { updateProfile } from "@/actions/onboarding";

export default function ProfileInfoForm({
  nextPage,
  formId,
  userId,
  page,
  title,
  description,
}: StepInputProps) {
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [expiry, setExpiry] = useState<Date | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );
  const router = useRouter();
  const {
    truckingNumber,
    setTruckingNumber,
    doctorProfileId,
    setDoctorProfileId,
  } = useOnBoardingContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormProps>();

  async function onSubmit(data: ProfileFormProps) {
    setIsLoading(true);

    if (!expiry) {
      toast.error("Please select your License Expiry");
      setIsLoading(false);
      return;
    }

    data.medicalLicenseExpiry = expiry;
    data.page = page;
    data.yearsOfExperiance = Number(data.yearsOfExperiance);
    data.profilePicture = profileImage;

    try {
      const res = await updateProfile(formId, data);
      if (res.status === 201) {
        reset();
        router.push(`/onboarding/${userId}?page=${nextPage}`);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Profile update error:", error);
    } finally {
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
      <form className="py-4 px-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 grid-cols-2">
          <TextInput
            label="Medical License"
            register={register}
            name="medicalLicense"
            errors={errors}
            placeholder="Enter medical license"
          />
          <TextInput
            label="Years of Experience"
            register={register}
            name="yearsOfExperiance"
            errors={errors}
            placeholder="Enter years of experience"
          />
          <DatePickerInput
            title="Medical License Expiry"
            date={expiry}
            setDate={setExpiry}
            className="col-span-full sm:col-span-1"
          />
          <TextAreaInput
            label="Enter Your Biography"
            register={register}
            name="bio"
            errors={errors}
            placeholder="Enter your biography"
            className="col-span-full sm:col-span-1"
          />
          <ImageInput
            label="Professional Profile Image"
            imageUrl={profileImage}
            setImageUrl={setProfileImage}
            endpoint="doctorProfileImage"
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
