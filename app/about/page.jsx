import React from "react";
import Expertise from "../../components/Expertises";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <>
      <section className="portfolio-section portfolio__about h-[100%]  pt-32 px-7 md:px-10 lg:px-14 xl:px-36 2xl:px-56">
        {/* About Section */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3">
            <div className="relative h-full pb-8 lg:pb-0">
              <h2 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold leading-none sm:leading-snug md:leading-none uppercase">
                I craft wonderful
                <span className="block relative pl-0 sm:pl-0 md:pl-24 lg:pl-24">
                  digital experiences
                  <span className="absolute  sm:w-16 sm:block md:w-20 h-1 top-2 sm:top-4 md:top-8 left-0 bg-none md:bg-red-800"></span>
                </span>
                for brands
              </h2>

              <img
                src="16.png"
                alt="Shape"
                className="absolute bottom-0 right-0 md:right-[150px]  max-w-[180px]  invert hidden lg:block"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="pt-6">
              <p className="text-lg leading-relaxed text-white">
                Based in Washington, DC, I work with experts from the Center for
                Strategic and International Studies (CSIS) to help them
                communicate their research more effectively on the web. Together
                we make websites, data visualizations, and long-forms that
                strengthen their networks and engage new audiences with
                thoughtful content and design strategies.
              </p>
              <a
                href="about.html"
                className="inline-block  py-2 text-white  transition border-b"
              >
                Explore Me
              </a>
            </div>
          </div>
        </div>

        <div className="md:mt-52 mt-20">
          <div className="py-10 border-t border-b border-[#9999]">
            <div className="flex flex-wrap items-center sm:justify-center justify-center md:justify-start">
              {/* Title Section */}
              <div className="w-full md:w-1/3 sm:text-center md:text-start">
                <h3 className="font-bold text-[#9999] lg:max-w-[250px] w-full text-2xl uppercase md:border-r-4 border-0 border-[#9999] sm:pb-10 md:py-0 pb-4 text-center md:text-start">
                  Worked with Global Largest Brands
                </h3>
              </div>
              {/* Counters Section */}
              <div className="flex items-center gap-x-8 md:w-2/3 md:px-3">
                {/* Counter 1 */}
                <div className="text-center">
                  <p className="md:text-4xl text-2xl font-extrabold text-[#9999]">
                    120+
                  </p>
                  <p className="text-[17px] text-gray-600 mt-2">
                    Projects Completed
                  </p>
                </div>
                {/* Counter 2 */}
                <div className="text-center">
                  <p className="md:text-4xl text-2xl font-extrabold text-[#9999]">
                    120+
                  </p>
                  <p className="text-[17px] text-gray-600 mt-2">
                    Projects Completed
                  </p>
                </div>
                {/* Counter 3 */}
                <div className="text-center">
                  <p className="md:text-4xl text-2xl font-extrabold text-[#9999]">
                    120+
                  </p>
                  <p className="text-[17px] text-gray-600 mt-2">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Expertise></Expertise>
        <Skills></Skills>
      </section>
    </>
  );
};

export default page;
