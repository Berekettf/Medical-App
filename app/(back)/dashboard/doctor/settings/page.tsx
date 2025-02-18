import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Availability from "@/components/dashboard/doctor/Availability";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDoctorProfileById } from "@/actions/onboarding";

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const profile = await getDoctorProfileById(user?.id);
  return (
    <div className="max-w-5xl mx-auto w-full px-6 py-4">
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl py-3">
        Settings
      </h2>
      <Tabs defaultValue="availability" className="w-[800px]">
        <TabsList>
          <TabsTrigger value="availability">Availability settings</TabsTrigger>
          <TabsTrigger value="account">Account Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="availability">
          <Availability profile={profile?.data} />
        </TabsContent>
        <TabsContent value="account">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
