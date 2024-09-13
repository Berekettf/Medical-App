"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BiodataForm from "./BiodataForm";
import ContactInfo from "./ContactInfo";
import ProfessionInfo from "./ProfessionInfo";

export default function OnboardingSteps({id}:{id:string}) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");


const steps=[
  {
    title: "Bio Data",
    page: "bio-data",
    component: <BiodataForm/>
  },
  {
    title: "Contact Information",
    page: "contact",
    component: <ContactInfo/>
  },
  {
    title: "Proffession Information",
    page: "proffession",
    component: <ProfessionInfo/>
  },
  {
    title: "Education",
    page: "education",
    component: <></>
  },
  {
    title: "Practice Information",
    page: "practice",
    component: <></>
  },
  {
    title: "Additional Information",
    page: "additional",
    component: <></>
  },
  {
    title: "Availability",
    page: "availability",
    component: <></>
  },
]
const currentStep = steps.find((step)=>step.page===page)
console.log(currentStep)
  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-inner bg-slate-100 overflow-hidden border border-slate-200 min-h-screen">
      <div className="col-span-full sm:col-span-2 devide-y-2 devide-gray-200">
        {steps.map((item, i)=>{
          return(
         <Link key={i} href={`/onboarding/${id}?page=${item.page}`} className={cn("block text-xs whitespace-nowrap py-3 px-4 bg-slate-300 text-slate-800 shadow-inner text-sm whitespace-nowrap", item.page===page?"bg-teal-800 text-slate-100":"")}>{item.title}</Link>
          )
        })}  
      </div>
      <div className="col-span-full sm:col-span-10 bg-slate-100 p-4 dark:text-slate-800">
      {currentStep?.component}
      </div>
    </div>
  );
}
