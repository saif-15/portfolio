import React from "react";
import { FaAws, FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { motion } from "framer-motion"

type Props = {
    exp: any;
    baseUrl: string;
};

function ExperienceCard({ exp, baseUrl }: Props) {
    return (
        <article className="flex flex-col items-center w-full rounded-2xl bg-[#292929] p-5 sm:p-6 md:p-7 shadow-lg transition-transform duration-300 cursor-pointer">
            {/* Company Logo */}
            <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
                src={baseUrl + exp["img-url"]}
                alt={exp.company}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover mb-4"
            >
            </motion.img>

            {/* Content */}
            <div className="w-full text-center sm:text-left space-y-2">
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
    );
}

export default ExperienceCard;
