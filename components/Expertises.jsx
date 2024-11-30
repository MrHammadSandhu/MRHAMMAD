import React from "react";

const ExpertiseSection = () => {
  const data = [
    {
      title: "Search Engine Optimization",
      imgSrc: "vector-01.png",
      description:
        "Perspective web development made with market that resized digital solution.",
    },
    {
      title: "SocialMedia Marketing",
      imgSrc: "vector-02.png",
      description:
        "Perspective web development made with market that resized digital solution.",
    },
    {
      title: "Content Marketing",
      imgSrc: "vector-03.png",
      description:
        "Perspective web development made with market that resized digital solution.",
    },
    {
      title: "Email Marketing",
      imgSrc: "vector-04.png",
      description:
        "Perspective web development made with market that resized digital solution.",
    },
  ];
  return (
    <div className="pb-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 py-32">
        <div className="text-center md:text-start">
          <h2 className="text-5xl font-bold leading-tight">
            My expertise <br />
            Area
          </h2>
        </div>
        <div className="mt-3 text-center md:text-right">
          <p className="text-xl text-gray-400">
            Digital marketing can be{" "}
            <strong className="text-red-500">broadly</strong> <br />
            broken into main categories with all <br />
            dynamic strategy
          </p>
        </div>
      </div>

      {/* Expertise Items */}
      <div className="flex flex-wrap gap-4 items-center sm:justify-center">
        {/* Expertise Card */}
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[linear-gradient(180deg,#ffff 0%,rgba(255, 255, 255, 0) 100%)] shadow-lg  overflow-hidden hover:scale-105 transition-transform duration-300 rounded-3xl border
              flex items-center justify-start sm:max-w-[320px] md:max-w-[330px] lg:max-w-[350px] min-h-[500px]"
          >
            <a href="#" className="block">
              <div className="py-16 px-12">
                <h4 className="text-xl md:text-3xl font-semibold text-white">
                  {item.title.split(" ").map((word, idx) => (
                    <span key={idx} className="block md:inline">
                      {word}{" "}
                    </span>
                  ))}
                </h4>
                <div className="my-16">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
