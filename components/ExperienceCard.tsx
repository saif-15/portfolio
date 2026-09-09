import React from "react";
import { FaAws, FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

type Props = {
    exp: any;
    baseUrl: string;
};

function ExperienceCard({ exp, baseUrl }: Props) {
    return (
        <TiltCard className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <article className="group relative flex flex-col items-center w-full rounded-2xl bg-[#1f1f1f]/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 shadow-xl border border-white/5 hover:border-[#F97316]/40 transition-colors duration-300 overflow-hidden">
                {/* subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Company Logo */}
                <motion.img
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    src={baseUrl + exp["img-url"]}
                    alt={exp.company}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mb-3 sm:mb-4 ring-2 ring-[#F97316]/30"
                />

                {/* Content */}
                <div className="w-full text-center sm:text-left space-y-2 relative z-10">
                    <h4 className="text-lg sm:text-xl font-light">{exp.position}</h4>
                    <p className="font-semibold text-base sm:text-lg">{exp.company}</p>

                    {/* Tech Icons */}
                    <div className="flex justify-center sm:justify-start gap-3 my-2">
                        <FaAws className="h-8 w-8 rounded-xl bg-amber-400 p-1 text-[#161D26]" />
                        <FaJava className="h-8 w-8 rounded-xl bg-white p-1 text-red-600" />
                        <SiSpring className="h-8 w-8 rounded-xl bg-white p-1 text-green-500" />
                    </div>

                    <p className="uppercase text-gray-400 text-xs sm:text-sm py-1">{exp.duration}</p>

                    {/* Bullet Points */}
                    <ul className="list-disc list-inside space-y-1 text-left text-sm text-gray-200">
                        {exp.points.map((pt: string, idx: number) => (
                            <li key={idx}>{pt}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </TiltCard>
    );
}

export default ExperienceCard;
