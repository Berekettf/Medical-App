"use client";
import { EducationalFormProps} from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { StepInputProps } from "./BiodataForm";
import SelectInput from "../formInput/SelectInput";
import StringInputForm from "../formInput/StringInputForm";
import { updateProfile } from "@/actions/onboarding";
import { useRouter } from "next/navigation";

export default function EducationInfo({
  userId,
  formId,
  nextPage,
  page,
  title,
  description,
}: StepInputProps) {
  const [specialities, setSpecialities] = useState<string[]>([]);
  const [option, setOption] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  //const [educationalFiles, setEducationalFiles] = useState<File[]>([]);
  const sepecialityOption = [
    {
      label: "Medicne",
      value: "medicne",
    },
    {
      label: "Pharmacy",
      value: "Pharmacy",
    },
    {
      label: "Nurse",
      value: "nerse",
    },
  ];
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EducationalFormProps>();

  async function onSubmit(data: EducationalFormProps) {
    setIsLoading(true); 
    data.page = page; 
    data.otherSpecialities = specialities; 
    data.primerySpecialization= option;
    data.graduationYear= Number(data.graduationYear);
    
    try {
      const res = await updateProfile(formId, data);
      if (res?.status === 201) {
        router.push(`/onboarding/${userId}?page=${nextPage}`);
      } else {
        throw new Error("Profile update failed!");
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("An error occurred while updating your profile.");
    } finally {
      setIsLoading(false);  // Ensure this is always called
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
            label="Medical School"
            register={register}
            name="medicalSchool"
            errors={errors}
            placeholder="Enter Your Grad School Name"
          />
          <TextInput
            label="Graduation Year"
            register={register}
            name="graduationYear"
            errors={errors}
            type="number"
            placeholder="Enter Your Grad Year"
            className="col-span-full sm:col-span-1"
          />
          <SelectInput
            title="Select your Profession"
            optionTitle="Choose your profession"
            options={sepecialityOption}
            className="my-custom-class"
            selectedOption={option}
            setSelectedOption={setOption}
          />

          <StringInputForm
            label="Add other Sepecialities"
            items={specialities}
            setItems={setSpecialities}
            itemTitle="Other Speciality"
            className="col-span-full sm:col-span-1"
          />
         { /*<MultipleFileUploads
            label="Attach Documents"
            files={educationalFiles}
            setFiles={setEducationalFiles}
            endPoint="doctorProfessionDocs"
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
