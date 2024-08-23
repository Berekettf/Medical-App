"use client";
import { LoginInputForm } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../formInput/TextInput";
import SubmitButton from "../formInput/SubmitButton";
import { useState } from "react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputForm>();

  async function onSubmit(data: LoginInputForm) {
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
          Sign In to your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              title="Log In"
              isLoading={isLoading}
              LoadingTitle="Logging you In Please Wait..."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have account?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create A New Account.
          </Link>
        </p>
      </div>
    </div>
  );
}
