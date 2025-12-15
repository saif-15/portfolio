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
      className="
        group
        relative
        flex
        flex-col
        items-center
        justify-center
        w-full
        min-w-[120px]
        sm:min-w-[140px]
        md:min-w-[160px]
        lg:min-w-[180px]
        rounded-2xl
        bg-[#1f1f1f]
        p-5
        sm:p-6
        md:p-7
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.0]
        hover:shadow-2xl
        cursor-pointer
      "
    >
      {/* Glow (same as certification) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
