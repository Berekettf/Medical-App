import { UploadDropzone } from "@/utils/uploadthing";
import { XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

type MultipleImageInputProps = {
  label: string;
  imageUrls: string[];
  setImageUrl: any;
  className?: string;
  endpoint?: any;
};

export default function MultipleImageInput({
  label,
  imageUrls,
  setImageUrl,
  className = "col-span-full",
  endpoint = "",
}: MultipleImageInputProps) {
  function handleImageRemove(imageIndex: any) {
    const updatedImages = imageUrls.filter(
      (image, index) => index !== imageIndex
    );
    setImageUrl(updatedImages);
  }
  return (
    <div className={className}>
      <div className="flex justify-center item-center mb-4">
        <label
          htmlFor="course-image"
          className="block text:sm font-medium loading-6 text-gray-900 dark:text-slate-50 mb-2"
        >
          {label}
        </label>
      </div>
      {imageUrls.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((imageurl, i) => {
            return (
              <div key={i} className="relative mb-6">
                <button
                  onClick={() => handleImageRemove(i)}
                  type="button"
                  className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
                >
                    <XCircle className=""/>
                </button>
                <Image
                  src={imageurl}
                  alt="Item Image"
                  width={1000}
                  height={667}
                  className="w-full h-32 object-cover"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <UploadDropzone
          endpoint={`${endpoint}` as any}
          onClientUploadComplete={(res: any) => {
            setImageUrl(res[0].url);
            toast.success("Image uploaded successfully!");
            console.log("files:", res);
            console.log("upload complate");
          }}
          onUploadError={(error: any) => {
            toast.error("image upload failed, try again");
            console.log(`ERROR: ${error.message}`, error);
          }}
        />
      )}
    </div>
  );
}
