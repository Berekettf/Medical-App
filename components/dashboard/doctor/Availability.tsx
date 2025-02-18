'use client'
import React from "react";
import { Tabs } from "flowbite-react";
import Monday from "./availabilityDays/Monday";
import { DoctorProfile } from "@prisma/client";
import Tuesday from "./availabilityDays/Tuesday";
import Wensday from "./availabilityDays/Wensday";
import Thersday from "./availabilityDays/Thersday";
import Friday from "./availabilityDays/Friday";
import Saterday from "./availabilityDays/Saterday";

export default function Availability({profile}: {profile: DoctorProfile| undefined | null}) {

 const tabs = [
    {
        title: "Monday",
        component:( <Monday profile={profile}/>)
    },
    {
        title: "Tuesday",
        component: (<Tuesday profile={profile}/>)
    },
    {
        title: "Wensday",
        component: (<Wensday profile={profile}/>)
    },
    {
        title: "Thersday",
        component: (<Thersday profile={profile}/>)
    },
    {
        title: "Friday",
        component: (<Friday/>)
    },
    {
        title: "Saterday",
        component: (<Saterday/>)
    },
    {
        title: "Monday(If Uregent)",
        component: <></>
    },
 ]
  return (
    <div>
      <p className="py-3 "> Please add the availability for the week</p>
      <Tabs aria-label="Default tabs" variant="default">
        {tabs.map((tab, i)=>{
        return (
          <Tabs.Item key={i} title={tab.title}>
            {tab.component}
          </Tabs.Item>
        )
        })}
      </Tabs>
    </div>
  );
}
