import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServicesProps } from "@/types/types";

export default function ServiceCard({ service }: { service: ServicesProps }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="rounded-md dark:bg-slate-800 bg-slate-500 hover:bg-slate-50 flex gap-4 overflow-hidden duration-100"
    >
      <Image
        width={271}
        height={416}
        src={service.image}
        className="w-1/3 object-cover aspect-video"
        alt="A descriptive title for the image"
      />
      <div className="flex flex-col w-2/3 py-5">
        <h2>{service.title}</h2>
        <p className="text-[0.6rem]">789 Doctors available</p>
      </div>
    </Link>
  );
}
