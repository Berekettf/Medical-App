import React from "react";
import RegisterWithBg from "@/components/auth/Register";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { role } = searchParams;
  return (
    <div className="">
      <RegisterWithBg role={role} />
    </div>
  );
}
