import React from "react";
import SectionHeading from "./SectionHeading";
import ToggleItem from "./ToggleItem";
import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { ArrowUpRight, Map } from "lucide-react";
import DoctorsListCarousel from "./DoctorsListcarousel";
import { Button } from "./ui/button";

export default function DoctorsList({
  title = "Telehealth Visit",
  isinPerson,
  className = "bg-pink-100 dark:bg-blue-900 py-8 lg:py-24",
}: {
  title?: string;
  isinPerson?: boolean;
  className?: string;
}) {
  const doctors = [
    {
      name: "john",
    },
    {
      name: "john",
    },
    {
      name: "john",
    },
    {
      name: "john",
    },
    {
      name: "john",
    },
    {
      name: "john",
    },
    {
      name: "john",
    },
    {
      name: "john",
    },
    {
      name: "john",
    },
  ];
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={title} />
        <div className="py-4 flex items-center justify-between">
          {isinPerson ? (
            <Link
              href=""
              className="text-blue-500 font-semibold text-sm flex items-center"
            >
              <Map className="mr-2 flex-shrink-0 w-4 h-4" />
              <span>Map View</span>
            </Link>
          ) : (
            <ToggleItem />
          )}
          <Button asChild>
            <Link className="" href="#">
              see all
              <ArrowUpRight className="w-4 h-4 ms-2" />
            </Link>
          </Button>
        </div>
        <div className="py-6">
          <DoctorsListCarousel doctors={doctors} isinPerson={isinPerson} />
        </div>
      </div>
    </div>
  );
}
