import React from "react";
import ExperienceCard from "./ExperienceCard";
import data from "../public/portfolio.json";

type Props = {};

function Experience({}: Props) {
  const experiences = data.body.experience.list;

  return (
    <section className="relative min-h-[100dvh] max-w-[2000px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16">
      <h3 className="absolute top-16 sm:top-20 md:top-24 left-1/2 -translate-x-1/2 uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl">
        Experience
      </h3>

      <h3 className="absolute top-28 sm:top-32 md:top-36 left-1/2 -translate-x-1/2 uppercase tracking-[2px] md:tracking-[3px] text-gray-500 text-[10px] sm:text-xs md:text-sm text-center whitespace-nowrap">
        All experiences at a glance
      </h3>

      <div className="min-h-[100dvh] flex items-center justify-center pt-36 sm:pt-40 md:pt-44 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} baseUrl={data.utility["static-file-base-url"]} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
