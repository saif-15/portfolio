import React from "react"
import data from "../public/portfolio.json"
import CertificationCard from "./CertificationCard"

type Props = {}

function Certification({}: Props) {
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
      {/* Heading */}
      <h3 className="absolute top-24 left-1/2 -translate-x-1/2 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Certifications
      </h3>

      {/* Centering Wrapper */}
      <div className="min-h-screen flex items-center justify-center pt-40">
        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-6
            w-full
          "
        >
          {data.body.certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              certification={certification}
              directionLeft={index % 2 === 0}
              baseUrl={data.utility["static-file-base-url"]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification
