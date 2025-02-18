import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NewButton({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Button className="text-sm" asChild variant="outline">
        <Link href={href}>
          <Plus className="w-4 h-4" />
          {title}
        </Link>
      </Button>
    </div>
  );
}
