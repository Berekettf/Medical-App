"use client"
import { Tabs } from "flowbite-react";
import {X} from "lucide-react"
import ServiceList from "./services/ServiceList";
//import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
//import { MdDashboard } from "react-icons/md";

export default function TabbedItems() {

  const tabs=[
    {
      title:"Popular Services",
      icon: X,
      content: []
    },
    {
      title:"Doctors",
      icon: X,
      content: []
    },
    {
      title:"Specialist",
      icon: X,
      content: []
    },
    {
      title:"Symptoms",
      icon: X,
      content: []
    },
  ]
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {
        tabs.map((tab,i)=>{
      return(
        <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
          <ServiceList/>
         </Tabs.Item>
      );
      })
      }
      
    </Tabs>
  );
}
