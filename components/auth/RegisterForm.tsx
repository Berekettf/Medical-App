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

export default function RegisterForm({ role = "USER" }: { role?: UserRole }) {
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border border-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            label="Full Name"
            register={register}
            name="fullName"
            errors={errors}
          />

          <TextInput
            label="Email address"
            register={register}
            name="email"
            errors={errors}
            type="email"
          />
          <TextInput
            label="Phone Number"
            register={register}
            name="phone"
            errors={errors}
            type="tel"
          />

          <TextInput
            label="Password"
            register={register}
            name="password"
            errors={errors}
            type="password"
          />

          <div>
            <SubmitButton
              title="Create A New Account"
              isLoading={isLoading}
              LoadingTitle="Creating Please Wait..."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log In.
          </Link>
        </p>
      </div>
    </div>
  );
}
