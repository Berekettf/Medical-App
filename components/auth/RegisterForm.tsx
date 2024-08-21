"use client";
import { type RegisterInputForm } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputForm>();

  async function onSubmit(data: RegisterInputForm) {
    console.log(data);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border border-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="My Health"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput
            label="First Name"
            register={register}
            name="firstName"
            errors={errors}
          />

          <TextInput
            label="Last Name"
            register={register}
            name="lastName"
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
