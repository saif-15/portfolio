import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import data from '../public/portfolio.json'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-3 sm:p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='flex flex-row items-center'
            >
                <SocialIcon
                    style={{ height: 36, width: 36 }}
                    url={data.header.linkedinLink}
                    target='_blank'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    style={{ height: 36, width: 36 }}
                    url={data.header.facebookLink}
                    target='_blank'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='flex flex-row items-center text-gray-300'
            >
                <SocialIcon
                    style={{ height: 36, width: 36 }}
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    url={data.header.emailLink}
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </motion.div>
        </header>
    )
}
