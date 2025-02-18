"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BiodataForm from "./BiodataForm";
import ProfileInfoForm from "./ProfileInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import PracticeInfoForm from "./PracticeInfoForm";
import EducationInfo from "./EducationInfo";
import AdditionalForm from "./AdditionalForm";
import { useOnBoardingContext } from "@/context/context";

export default function OnboardingSteps({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "bio-data"; // Default to "bio-data"

  const { truckingNumber, doctorProfileId } = useOnBoardingContext();

  const steps = [
    {
      title: "Bio Data",
      page: "bio-data",
      component: (
        <BiodataForm
          userId={id}
          title="Bio Data"
          description="Please fill in your bio data info"
          page={page}
          nextPage="profile"
          formId={doctorProfileId}
        />
      ),
    },
    {
      title: "Profile Information",
      page: "profile",
      component: (
        <ProfileInfoForm
          title="Profile Information"
          description="Please fill in your Profile information"
          page={page}
          nextPage="contact"
          formId={doctorProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Contact Information",
      page: "contact",
      component: (
        <ContactInfoForm
          title="Contact Information"
          description="Please fill in your contact information"
          page={page}
          nextPage="education"
          formId={doctorProfileId}
          userId={id}
        />
      ),
    },

    {
      title: "Education Information",
      page: "education",
      component: (
        <EducationInfo
          title="Educational Information"
          description="please fill your educational Info"
          page={page}
          nextPage="practice"
          formId={doctorProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Practice Information",
      page: "practice",
      component: (
        <PracticeInfoForm
          title="Practice Information"
          description="please fill your practice information"
          page={page}
          nextPage="additional"
          formId={doctorProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Additional Information",
      page: "additional",
      component: (
        <AdditionalForm
          title="Additional Information"
          description="please fill additional Information"
          page={page}
          formId={doctorProfileId}
          userId={id}
        />
      ),
    },
    {/*{
      title: "Availability",
      page: "availability",
      component: (
        <AvailabilityForm
          title="Availability Information"
          description="please enter Your Availability Info"
          page={page}
          formId={doctorProfileId}
          userId={id}
        />
      ),
    },*/}
  ];

  const currentStep = steps.find((step) => step.page === page);

  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-inner bg-slate-100 overflow-hidden border border-slate-200 min-h-screen">
      <div className="col-span-full sm:col-span-2 divide-y-2 divide-gray-200">
        {steps.map((item, i) => (
          <Link
            key={i}
            href={`/onboarding/${id}?page=${item.page}`}
            className={cn(
              "block whitespace-nowrap py-3 px-4 bg-slate-300 text-slate-800 shadow-inner text-sm",
              item.page === page ? "bg-teal-800 text-slate-100" : ""
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="col-span-full sm:col-span-10 bg-slate-100 p-4 dark:text-slate-800">
        {truckingNumber&& <p className="border-b border-gray-200 pb-2 text-teal-600">
          Your trucking number is:{" "}
          <span className="font-semibold">{truckingNumber}</span>{" "}
          <span className="text-xs">
            (use this to check the status or resume application).
          </span>
        </p>}
        {currentStep?.component}
      </div>
    </div>
  );
}
