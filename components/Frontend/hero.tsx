import React from "react";
import Search from "./Search";
import Transitiontext from "./Transitiontext";
import { Pill } from "lucide-react";
import Image from "next/image";
import { CommandMenu } from "../command-menu";

const Hero = () => {
  const TEXTS = [
    "Message",
    "Dental",
    "Cosmetic",
    "Speech Therapist",
    "Occupational Therapist",
    "Acupuncturist",
  ];
  return (
    <div className="bg-blue-950 dark:bg-slate-950  ">
      <div className="relative pb-[110px] pt-[50px]  lg:pt-[50px] max-w-6xl mx-auto">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  <span className="text-gray-50">Book Your </span>
                  <Transitiontext className="text-blue-500" TEXTS={TEXTS} />
                  <span className="text-white">Session Now</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-gray-100 dark:-6">
                  Health shouldn&apos;t be a puzzle, we are cutting through the
                  B.C to bring you simple, affordable, and transparent
                  healthcare
                </p>
                {/* search bar*/}
                {/*<Search />*/}
                <div className="w-full flex-1 md:flex-none">
                  <CommandMenu />
                </div>
                {/* STA BTNS*/}
                <ul className="flex flex-wrap items-center mt-6">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                    >
                      Need Doctor Urgently
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-50 hover:text-blue-500 dark:text-white"
                    >
                      <span className="mr-2">
                        <Pill className="flex-shrink-0 w-5 h-5 text-blue-500" />
                      </span>
                      Need a Refill
                    </a>
                  </li>
                </ul>
                <div className="py-4 pt-8 flex gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-50">600</span>
                    <span className="text-sm text-gray-300">
                      Active Specialist
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-50">1800</span>
                    <span className="text-sm text-gray-400">
                      Active Patients
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Image
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    width={800}
                    height={600}
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <Image
          src={imgSrc}
          alt="brand image"
          width={500}
          height={500}
          className="h-10 w-full"
        />
      </a>
    </>
  );
};
