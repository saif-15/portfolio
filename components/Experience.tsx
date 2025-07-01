import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import data from '../public/portfolio.json'

type Props = {}

function Experience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1.0 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'></h3>
            <div className='w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory'>
                {data.body.experience.list.map((item, index) => (
                   <ExperienceCard key={index} exp={item} />
                ))}
                
            </div>
        </motion.div>
    )
}

export default Experience