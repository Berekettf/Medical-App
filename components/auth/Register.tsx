"use client";
import { type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import Image from "next/image";

export default function RegisterWithBg({ role = "USER" }: { role?: UserRole }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    setIsLoading(true);
    data.role = role;
    //console.log(data);
    try {
      const user = await createUser(data);
      if (user && user.status === 200) {
        console.log("user created secesssfully");
        reset();
        setIsLoading(false);
        toast.success("user created succesfully");
        console.log(user.data);
      } else {
        console.log(user.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your credentials to create an account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Full Name"
              register={register}
              name="fullName"
              errors={errors}
              placeholder="Beka Wube"
            />
            <TextInput
              label="Phone Number"
              register={register}
              name="phone"
              errors={errors}
              type="tel"
            />

            <TextInput
              label="Email address"
              register={register}
              name="email"
              errors={errors}
              type="email"
              placeholder="ex beka@gmail.com"
            />

            <TextInput
              label="password"
              register={register}
              name="password"
              errors={errors}
              type="password"
              placeholder="*****"
            />

            <SubmitButton
              title="Sign Up"
              isLoading={isLoading}
              LoadingTitle="Logging you in, please wait..."
            />
            <Button variant="outline" className="w-full">
              Signup with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/doctor.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
