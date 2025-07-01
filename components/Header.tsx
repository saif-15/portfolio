import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import data from '../public/portfolio.json';
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center'>
                {/* Social Icons*/}
                <SocialIcon url={data.header.linkedinLink} target='_blank' fgColor='gray' bgColor='transparent'></SocialIcon>
                <SocialIcon url={data.header.facebookLink} target='_blank' fgColor='gray' bgColor='transparent'></SocialIcon>
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className=' flex flex-row items-center text-gray-300'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                >
                </SocialIcon>
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>

            </motion.div>
        </header >
    )
}