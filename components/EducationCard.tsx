import React from "react";
import { FaAws, FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { motion } from "framer-motion"

type Props = {
    edu: any;
    baseUrl: string;
};

function EducationCard({ edu, baseUrl }: Props) {
    return (
        <article className="group
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
          hover:scale-[1.20]
          hover:z-10
          hover:shadow-2xl
          opacity-90
          hover:opacity-100
          overflow-hidden">
            {/* subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-black-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* University Logo */}
            <motion.img
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                src={baseUrl + edu["img-url"]}
                alt={edu.institite}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover mb-4"
            >
            </motion.img>

            {/* Content */}
            <div className="relative z-10 text-center space-y-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {edu.qualification}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wide">
                    {edu.duration}
                </p>
            </div>
        </article>
    );
}

export default EducationCard;
