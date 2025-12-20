import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

type Certification = {
    title: string
    expiry: string
    icon: string
    link: string
}

type Props = {
    directionLeft?: boolean
    certification: Certification
    baseUrl: string
}

function CertificationCard({
    directionLeft = false,
    certification,
    baseUrl,
}: Props) {
    return (
        <Link href={certification.link} target="_blank" className="w-full">
            <article
                className="
          group
          relative
          flex
          flex-col
          items-center
          w-full
          max-w-md
          sm:max-w-lg
          md:max-w-xl
          lg:max-w-2xl
          mx-auto
          rounded-2xl
          bg-[#1f1f1f]
          p-6
          sm:p-8
          md:p-10
          shadow-xl
          transition-all
          duration-400
          hover:z-10
          hover:scale-[1.20]
          hover:shadow-2xl
          opacity-90
          hover:opacity-100
          overflow-hidden
        "
            >
                {/* subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-black-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image (NO border / NO background) */}
                <motion.img
                    src={baseUrl + certification.icon}
                    alt={certification.title}
                    initial={{
                        y: - 120,
                        opacity: 0,
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="
            relative
            z-10
            w-24
            h-24
            sm:w-28
            sm:h-28
            md:w-32
            md:h-32
            object-contain
            mb-6
          "
                />
                {/* Content */}
                <div className="relative z-10 text-center space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                        {certification.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">
                        {certification.expiry}
                    </p>
                </div>
            </article>
        </Link>
    )
}

export default CertificationCard
