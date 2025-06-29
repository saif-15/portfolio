import React from 'react'
import { motion } from 'framer-motion'
import data from '../public/portfolio.json'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
            initial={{ opacity : 0 }}
            whileInView={{ opacity : 1}}
            transition={{ duration: 2.5}}
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            </h3>

            <motion.img
                className='mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]'
                initial={{
                    x: -200
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1.0, x: 0 }}
                src={data.body.about['img-url']} alt=''
            >

            </motion.img>
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is <span className='underline decoration-[#F7ABBA]/50'>Little</span> Background
                </h4>
                <p className='text-base'>{data.body.about.description}</p>
            </div>
        </motion.div>
    )
}

export default About