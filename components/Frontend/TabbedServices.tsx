import React from "react";
import TabbedItems from "./TabbedItems";

const TabbedService = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:py-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5x1 text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px] scroll-m-20 pb-2 tracking-tight first:mt-0">
                Browse Your Doctors BY.
              </h2>
              <p className="text-base text-body-color dark:text-dark-6 leading-7 [&:not(:first-child)]:mt-6">
                Choose from thousands of providers at every day affordable
                prices. Book online today.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6x1">
          <TabbedItems />
        </div>
      </div>
    </section>
  );
};

export default TabbedService;
