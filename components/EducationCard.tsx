import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

type Props = {
    edu: any;
    baseUrl: string;
};

function EducationCard({ edu, baseUrl }: Props) {
    return (
        <TiltCard className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <article className="group relative flex flex-col items-center w-full rounded-2xl bg-[#1f1f1f]/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 shadow-xl border border-white/5 hover:border-[#F97316]/40 transition-colors duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.img
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    src={baseUrl + edu["img-url"]}
                    alt={edu.institite}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mb-3 sm:mb-4 ring-2 ring-[#F97316]/30"
                />

                <div className="relative z-10 text-center space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                        {edu.qualification}
                    </h3>
                    <p className="text-sm text-gray-300">{edu.institite}</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">
                        {edu.duration}
                    </p>
                </div>
            </article>
        </TiltCard>
    );
}

export default EducationCard;
