import React from "react";
import Image from 'next/image';

const brandsData = [
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];

export type SingleImageProps = {
  link: string;
  imageSrc: string;
  lightImageSrc: string;
  altText: string;
};

export default function Brands() {
  return (
    <section className="bg-slate-100 py-10 lg:py-[60px] dark:bg-dark">
      <h2 className="text-center pb-6">Trusted By</h2>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} {...brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ link, imageSrc, lightImageSrc, altText }: SingleImageProps) => {
  return (
    <a
      href={link}
      className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
      <div className="h-10 w-full dark:hidden">
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="contain" />
      </div>
      <div className="hidden h-10 w-full dark:block">
        <Image src={lightImageSrc} alt={altText} layout="fill" objectFit="contain" />
      </div>
    </a>
  );
};
