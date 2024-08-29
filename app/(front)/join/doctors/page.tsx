import Image from "next/image";
import React from "react";
import { CustomButton } from "@/components/CustomButton";
import { Check } from "lucide-react";
import {
  CustomAccordion,
  FAQItem,
} from "@/components/Frontend/CustomAccordion";
import Pricing from "@/components/Frontend/Pricing";

export default function page() {
  const features = [
    " Medical App brings patients to you",
    "Seamless e-prescribing experience",
    " Integrated clinical note-taking",
  ];
  const steps = [
    "List your practice",
    "Create competitive offerings",
    "Start seeing patients",
  ];
  const cards = [
    {
      title: "Begin your Journy",
      description:
        " Start a new application to join our network healthcary provider.",
      link: "/",
      linkTitle: "Start a new Application",
    },
    {
      title: "Resume Application",
      description:
        " Pick up where you left off and complete your onboarding process schedule for physical approval",
      link: "/",
      linkTitle: "Continue your Application",
    },
    {
      title: "Schedule a Call",
      description: "Arrange a time for call to finalize your application",
      link: "/",
      linkTitle: "Schedule a Call",
    },
    {
      title: "Truck your Progress",
      description:
        "Mentor the status of your application and approvals in real time",
      link: "/",
      linkTitle: "Check Status",
    },
  ];

  const faqs: FAQItem[] = [
    {
      qn: "how do i sign up for Medical App?",
      ans: (
        <div>
          You can sign up by visiting our website and clicking on the
          <CustomButton
            title="Sign Up"
            href="/register?role='DOCTOR'"
            className="bg-blue-600 hover:bg-blue-800"
          />
          follow the instructions to sign up."
        </div>
      ),
    },
    {
      qn: "Can I use Medical App on multiple devices?",
      ans: "Yes, You can access our app from any device with an internet connection",
    },
    {
      qn: "Is my data secured on the Medical App?",
      ans: "Absolutly, we prioritize the privace and security of your data",
    },
    {
      qn: "how can i reset my passwords?",
      ans: "To reset your password, go to the login page and click on the 'Forget Password' link. follow the prompts to reset your password",
    },
  ];
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-6xl gap-4 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="sm:text-[3rem] text-[1.5rem] leading-[3.5rem]">
              Build a thriving{" "}
              <span className="text-blue-600 font-semibold">direct-pay</span>{" "}
              practice with Medical App.
            </h2>
            <p className="py-4">
              Welcome to Medical App, where connecting with patient is made
              easier than ever before. our platform streamlines the process of
              managing appointments, providing care remotly, and keeping track
              of patient records.
            </p>
            <CustomButton
              title="List Your Practice"
              href="#"
              className="bg-blue-900 hover:bg-blue-600"
            />
            <div className="py-6">
              {features.map((feature, f) => {
                return (
                  <p key={f} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {feature}
                  </p>
                );
              })}
            </div>
          </div>
          <Image
            className="w-full"
            src="/5.png"
            alt=""
            width={1170}
            height={848}
          />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto gap-8 grid grid-cols-1 md:grid-cols-2">
          <Image
            src="/5.png"
            alt="Doctor"
            width={1170}
            height={848}
            className="w-full hidden md:block mr-4"
          />
          <div className="">
            <h2 className="sm:text-4xl text-3xl ">
              Join Medical App to increase your
              <span className="text-blue-600 font-semibold">
                {" "}
                revenue{" "}
              </span>{" "}
              today.
            </h2>
            {/*<div className="py-6">
              {steps.map((feature, f) => {
                return (
                  <p key={f} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {feature}
                  </p>
                );
              })}
            </div>*/}
            <div className="grid grid-cols-2 gap-4 py-6">
              {cards.map((card, c) => (
                <div key={c} className="bg-blue-900 p-4 rounded-lg shadow-2xl">
                  <h3 className="text-white text-2xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-xs py-3">
                    {card.description}
                  </p>
                  <CustomButton
                    title={card.linkTitle}
                    href={card.link}
                    className="bg-blue-600 hover:bg-blue-800"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl gap-4 mx-auto">
          <Pricing />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-2xl gap-4 mx-auto">
          <CustomAccordion FAQS={faqs} />
        </div>
      </section>
    </div>
  );
}
