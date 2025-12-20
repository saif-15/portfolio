import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircle'
import Link from 'next/link'
import data from '../public/portfolio.json';
type Props = {}

export default function Hero({ }: Props) {

    const [profession, counter] = useTypewriter({
        words: data.body.hero.profession,
        loop: true,
        delaySpeed: 2000
    }) 

    const [text, count] = useTypewriter({
        words: data.body.hero.headlines,
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={data.utility['static-file-base-url'] + data.body.hero.image} alt=''></img>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'><span>{profession}</span></h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-2'>
                    <span>{text}</span>
                    <Cursor cursorColor='#df5e22'></Cursor>
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='hero-button'>About</button>
                    </Link>
                     <Link href="#education">
                        <button className='hero-button'>Education</button>
                    </Link>
                    <Link href="#experience">
                        <button className='hero-button'>Expereince</button>
                    </Link>
                    <Link href="#skills">
                        <button className='hero-button'>Skills</button>
                    </Link>
                    <Link href="#certifications">
                        <button className='hero-button'>Certifications</button>
                    </Link>
                    <Link href="#projects">
                        <button className='hero-button'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}