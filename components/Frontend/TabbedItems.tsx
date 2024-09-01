"use client";
import { Tabs } from "flowbite-react";
import { Activity, Microscope, Stethoscope, Syringe, X } from "lucide-react";
import ServiceList from "./services/ServiceList";
import LinkCards from "./doctor/LinkCards";
//import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
//import { MdDashboard } from "react-icons/md";

export default function TabbedItems() {
  const services = [
    {
      title: "telehealth",
      image: "/doctor.png",
      slug: "telehealth",
    },

    {
      title: "Video Prescription",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "Video Prescription",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "Video Prescription",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "Video Prescription",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "Video Prescription",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "Mentalhealth",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "ED Consult",
      image: "/doctor.png",
      slug: "telehealth",
    },
    {
      title: "Uregent Care",
      image: "/doctor.png",
      slug: "telehealth",
    },
  ];

  const tabs = [
    {
      title: "Popular Services",
      icon: Stethoscope,
      component: <ServiceList data={services} />,
      content: [],
    },
    {
      title: "Doctors",
      icon: Microscope,
      component: <LinkCards />,
      content: [],
    },
    {
      title: "Specialist",
      icon: Activity,
      component: <LinkCards className="bg-green-900" />,
      content: [],
    },
    {
      title: "Symptoms",
      icon: Syringe,
      component: <LinkCards className="bg-purple-950" />,
      content: [],
    },
  ];
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {tabs.map((tab, i) => {
        return (
          <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
            {tab.component}
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}
