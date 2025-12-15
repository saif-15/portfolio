import React from "react"
import Skill from "./Skill"
import data from "../public/portfolio.json"

type Props = {}

function Skills({}: Props) {
  const skills = Object.entries(data.body.skills)

  return (
    <section
      className="
        relative
        min-h-screen
        max-w-[2000px]
        mx-auto
        px-4
        sm:px-6
        md:px-10
        xl:px-16
      "
    >
      {/* Headings */}
      <h3 className="absolute top-24 left-1/2 -translate-x-1/2 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 left-1/2 -translate-x-1/2 uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
        Hover over the skill for current proficiency
      </h3>

      {/* Centered Grid */}
      <div className="min-h-screen flex items-center justify-center pt-44">
        <div
          className="
            grid
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-5
            lg:grid-cols-6
            xl:grid-cols-8
            gap-4
            sm:gap-5
            w-full
          "
        >
          {skills.map(([key, value], index) => (
            <Skill
              key={key}
              skill={value as string}
              directionLeft={index > skills.length / 2}
              baseUrl={data.utility["static-file-base-url"]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
