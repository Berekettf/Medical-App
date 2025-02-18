"use client";
import ListPannel from "@/components/dashboard/doctor/ListPannel";
import NewButton from "@/components/dashboard/doctor/NewButton";
import PanelHeader from "@/components/dashboard/doctor/PanelHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 py-3 border-r border-gray-100">
          <PanelHeader />
          <div className="px-3">
          <ListPannel />
          </div>
        </div>
        <div className="col-span-8">
          <div className="py-2  border-b border-gray-200 flex items-center justify-end px-4">
            <div className="flex items-center gap-1 text-sm">
             <NewButton title="New Appointment" href="#"/>
            </div>
          </div>
          <div className="">
            <h2>Datailed Page</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
