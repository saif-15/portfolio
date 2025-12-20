import React from "react";
import data from "../public/portfolio.json";
import EducationCard from "./EducationCard";

type Props = {};

function Education({}: Props) {
  const education = data.body.education.list;
  return (
    <section className="relative min-h-screen max-w-[2000px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16">
      {/* Headings */}
           <h3 className="absolute top-24 left-1/2 -translate-x-1/2 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Education
      </h3>

      <h3 className="absolute top-36 left-1/2 -translate-x-1/2 uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
       Education Snapshot
      </h3>

      {/* Grid Container */}
      <div className="min-h-screen flex items-center justify-center pt-44">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} baseUrl={data.utility["static-file-base-url"]} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
