"use client";

import {
  AlarmClock,
  Bell,
  Home,
  Mail,
  Package2,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

export default function Sidebar({ session }: { session: Session }) {
  const { user } = session;
  const role = user?.role;
  const pathname = usePathname();
  const roles = {
    USER: [
      { name: "Dashboard", path: "/dashboard", icon: Home },
      {
        name: "my appointments",
        path: "/dashboard/user/appointment",
        icon: AlarmClock,
      },
      { name: "Settings", path: "/dashboard/user/settings", icon: Settings },
    ],
    ADMIN: [
      { name: "Dashboard", path: "/dashboard", icon: Home },
      { name: "Doctors", path: "/dashboard/doctors", icon: Users },
      { name: "Patients", path: "/dashboard/patients", icon: Users },
      { name: "Appointments", path: "/dashboard/appointments", icon: Users },
      { name: "Settings", path: "/dashboard/settings", icon: Settings },
    ],
    DOCTOR: [
      { name: "Dashboard", path: "/dashboard", icon: Home },
      {
        name: "Appointments",
        path: "/dashboard/doctor/appointments",
        icon: AlarmClock,
      },
      { name: "Patients", path: "/dashboard/doctor/patients", icon: Users },
      { name: "Tasks", path: "/dashboard/doctor/tasks", icon: Users },
      { name: "Inbox", path: "/dashboard/doctor/inbox", icon: Mail },
      { name: "Settings", path: "/dashboard/doctor/settings", icon: Settings },
    ],
  };
  console.log(role);
  const sideBarLinks = roles[role] || [];
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Online Med</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sideBarLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <Link
                  key={i}
                  href={link.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === link.path ? "bg-muted text-primary" : ""
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
