import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import TiltCard from "./TiltCard"

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

function CertificationCard({ certification, baseUrl }: Props) {
    return (
        <Link href={certification.link} target="_blank" className="w-full">
            <TiltCard className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                <article className="group relative flex flex-col items-center w-full rounded-2xl bg-[#1f1f1f]/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 shadow-xl border border-white/5 hover:border-[#F97316]/40 transition-colors duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.img
                        src={baseUrl + certification.icon}
                        alt={certification.title}
                        initial={{ y: -120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain mb-4 sm:mb-6 drop-shadow-[0_0_20px_rgba(249,115,22,0.35)]"
                    />

                    <div className="relative z-10 text-center space-y-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                            {certification.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">
                            {certification.expiry}
                        </p>
                    </div>
                </article>
            </TiltCard>
        </Link>
    )
}

export default CertificationCard
