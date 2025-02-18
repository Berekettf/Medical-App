import Dashboard from "@/components/dashboard/Dashboard";
import DoctorDashboard from "@/components/dashboard/DoctorDashboard";
import PatientDashboard from "@/components/dashboard/PatientDashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions)
  const user = session?.user
  const role = user?.role

  if(role === "DOCTOR"){
    return(
      <>
      <p>the user role is {user?.role}</p>
      <DoctorDashboard/>
      </>
    )
  }
  if(role === "USER"){
    return(
      <>
      <p>the user role is {user?.role}</p>
      <PatientDashboard/>
      </>
    )}

  return (
    <div>
      <p>the user role is {user?.role}</p>
      <Dashboard />
    </div>
  );
}
