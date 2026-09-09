import React from 'react'
import { motion } from 'framer-motion'
import data from '../public/portfolio.json'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            className='min-h-[100dvh] flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-6 md:px-10 pt-40 md:pt-32 pb-10 justify-evenly mx-auto items-center gap-8 md:gap-10'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
        >
            <h3 className='absolute top-16 sm:top-20 md:top-24 left-1/2 -translate-x-1/2 uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl'>
                About
            </h3>

            <div className='relative flex-shrink-0'>
                <div className='absolute inset-0 rounded-full md:rounded-lg bg-[#F97316]/20 blur-3xl' />
                <motion.img
                    className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-96 xl:w-[380px] xl:h-[400px] rounded-full md:rounded-lg object-cover ring-2 ring-[#F97316]/40 shadow-[0_0_40px_rgba(249,115,22,0.35)]'
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    src={data.utility['static-file-base-url'] + data.body.about['img-url']}
                    alt=''
                />
            </div>

            <div className='space-y-4 sm:space-y-6 md:space-y-8 md:max-w-2xl w-full'>
                <h4 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                    Here is a <span className='text-[#F97316]'>little</span> background
                </h4>
                <p className='text-sm sm:text-base leading-relaxed text-gray-200'>
                    {data.body.about.description}
                </p>
            </div>
        </motion.div>
    )
}

export default About
