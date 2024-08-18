"use client"
import { Tabs } from "flowbite-react";
import { X } from "lucide-react"
import ServiceList from "./services/ServiceList";
import LinkCards from "./doctor/LinkCards";
//import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
//import { MdDashboard } from "react-icons/md";

export default function TabbedItems() {

  const tabs = [
    {
      title: "Popular Services",
      icon: X,
      component: <ServiceList/>,
      content: []
    },
    {
      title: "Doctors",
      icon: X,
      component: <LinkCards/>,
      content: []
    },
    {
      title: "Specialist",
      icon: X,
      component: <LinkCards className="bg-green-900"/>,
      content: []
    },
    {
      title: "Symptoms",
      icon: X,
      component: <LinkCards className="bg-purple-950"/>,
      content: []
    },
  ]
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {
        tabs.map((tab, i) => {
          return (
            <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
              {tab.component }
            </Tabs.Item>
          );
        })
      }

    </Tabs>
  );
}
