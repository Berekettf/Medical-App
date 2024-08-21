import { Loader } from "lucide-react";
import React from "react";

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
    <div>
      {isLoading ? (
        <button
          type={buttonType}
          disabled
          className="flex w-full justify-center rounded-md bg-indigo-600 
          px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
          hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
          focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
        >
          <Loader className="w-4 h-4 flex-shrink-0 mr-2 animate-spin" />
          {LoadingTitle}
        </button>
      ) : (
        <button
          type={buttonType}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {title}
        </button>
      )}
    </div>
  );
}
