import { Loader, Loader2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type submitButtonProps = {
  title: string;
  buttonType?: "submit";
  isLoading: boolean;
  LoadingTitle: string;
};

export default function SubmitButton({
  title,
  buttonType = "submit",
  isLoading = false,
  LoadingTitle,
}: submitButtonProps) {
  return (
    <>
      {isLoading ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {LoadingTitle}
        </Button>
      ) : (
        <Button type={buttonType}>{title}</Button>
      )}
    </>
  );
}
