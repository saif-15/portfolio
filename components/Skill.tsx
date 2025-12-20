import React from "react"
import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean
  skill: string
  baseUrl: string
}

function Skill({ directionLeft = false, skill, baseUrl }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: directionLeft ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className="group
          relative
          flex
          flex-col
          items-center
          w-full
          max-w-md
          sm:max-w-lg
          md:max-w-xl
          lg:max-w-2xl
          rounded-2xl
          bg-[#1f1f1f]
          p-3
          sm:p-8
          md:p-10
          shadow-xl
          transition-all
          duration-400
          hover:scale-[1.20]
          hover:z-10
          hover:shadow-2xl
          opacity-90
          hover:opacity-100
          overflow-hidden"
    >
      {/* Glow (same as certification) */}
                <div className="absolute inset-0 bg-gradient-to-br from-black-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Skill Image */}
      <img
        src={baseUrl + skill}
        alt="Skill"
        className="
          relative
          z-10
          w-14
          h-14
          sm:w-14
          sm:h-14
          md:w-16
          md:h-16
          lg:w-18
          lg:h-18
          object-contain
          mb-2
        "
      />
    </motion.div>
  )
}

export default Skill
