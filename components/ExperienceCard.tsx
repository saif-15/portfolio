import React from 'react'
import { motion } from 'framer-motion'
import { FaAws, FaJava } from 'react-icons/fa'
import { SiSpring } from 'react-icons/si'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-6 sm:space-y-7 flex-shrink-0 w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] snap-center p-6 sm:p-8 md:p-10 bg-[#292929] hover:opacity-100 opacity-75 cursor-pointer transition-opacity duration-200 overflow-hidden shadow-lg'
        >
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-[150px] xl:h-[150px] rounded-full object-cover object-center'
                src='https://media.licdn.com/dms/image/v2/C4D0BAQFVK71jsqTAeQ/company-logo_200_200/company-logo_200_200/0/1673575492245?e=1756339200&v=beta&t=5Z5hhkHhlk3jWlmcPBBC2sV3BGuhzb2bNp3dwQdyprw'
                alt='Company Logo'
            />

            <div className='px-2 sm:px-4 md:px-6 text-center sm:text-left w-full'>
                <h4 className='text-2xl sm:text-3xl font-light'>Manager at Utopia Deals</h4>
                <p className='font-bold text-lg sm:text-xl mt-1'>Utopia Deals</p>

                <div className='flex justify-center sm:justify-start space-x-3 my-3'>
                    <FaAws className='rounded-2xl h-10 w-10 bg-amber-400 p-1 text-[#161D26]' />
                    <FaJava className='rounded-2xl h-10 w-10 bg-white p-1 text-[#FF0000]' />
                    <SiSpring className='rounded-2xl h-10 w-10 bg-white p-1 text-[#2bff00]' />
                </div>

                <p className='uppercase py-3 text-gray-300 text-sm sm:text-base'>
                    Started work... - Ended...
                </p>

                <ul className='list-disc list-inside space-y-2 text-left text-sm sm:text-base leading-relaxed text-gray-200'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Developed scalable backend APIs with Spring Boot.</li>
                    <li>Deployed microservices on AWS cloud environment.</li>
                    <li>Collaborated with cross-functional teams and stakeholders.</li>
                    <li>Led development of real-time analytics dashboards.</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
