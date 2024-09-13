import { Check, HelpCircle } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Free Forever",
      desc: "Ideal for individual practioners starting out.",
      price: 0,
      fee: 5,
      isMostPop: false,
      features: [
        "Manage up to 50 appointments per Month",
        "Basic patient recored managment",
        "Email notification for appointment",
      ],
      getStarted: "/register?role=DOCTOR&plan=free",
    },
    {
      name: "Proffetional",
      desc: "Perfect for small to medium sized clinics.",
      price: 59.9,
      free: 2,
      isMostPop: true,
      features: [
        "Unlimedted appointments",
        "Advanced patient record managment",
        "SMS reminder for appointment",
        "Customizable clinical profile",
      ],
      getStarted: "/register?role=DOCTOR&plan=proffetional",
    },
    {
      name: "Enterprise",
      desc: "Tailored for large healthcare institutions and Hospitals.",
      price: 100,
      free: 0,
      isMostPop: false,
      features: [
        "All features from the standard plan",
        "Multi-provider support",
        "Priority customer support",
        "Integration with electronic health records (EHR) systems",
      ],
      getStarted: "/register?role=DOCTOR&plan=enterprise",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl scroll-m-20 dark:text-slate-300 tracking-tight lg:text-5xl">
            Pricing for all sizes
          </h3>
          <div className="mt-3 max-w-xl">
            <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="text-indigo-600 font-bold uppercase tracking-widest">
                  {item.name}
                </span>
                <div className="text-gray-800 dark:text-gray-300 text-3xl font-semibold">
                  {item.price} Birr{" "}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p className="text-xs">{item.desc}</p>
                <div className="flex">
                  <p>+5% transaction fee</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button>
                          <HelpCircle className="w-4 h-4 ms-2" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-900 text-white">
                        <p>
                          PayPal/Stripe will charge their regular transaction
                          fee
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Link
                  href={item.getStarted}
                  className="px-3 py-3 block text-center rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700"
                >
                  Get Started
                </Link>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
