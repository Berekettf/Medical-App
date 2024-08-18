import DoctorsList from "@/components/DoctorsList";
import Brands from "@/components/Frontend/Brand";
import Hero from "@/components/Frontend/hero";
import TabbedServices from "@/components/Frontend/TabbedServices";
import React from "react";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <TabbedServices />
      <DoctorsList />
      <DoctorsList
        title="In-person doctor visit"
        isinPerson={true}
        className="bg-white py-8 lg:py-24"
      />
    </section>
  );
}
