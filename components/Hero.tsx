import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import data from '../public/portfolio.json'
import HeroOrb from './three/HeroOrbClient'

type Props = {}

export default function Hero({ }: Props) {
    const [profession] = useTypewriter({
        words: data.body.hero.profession,
        loop: true,
        delaySpeed: 2000
    })

    const [text] = useTypewriter({
        words: data.body.hero.headlines,
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='min-h-[100dvh] relative flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6'>
            <div className='absolute inset-0 z-0'>
                <HeroOrb />
            </div>

            <div className='relative z-10 flex flex-col items-center space-y-5 sm:space-y-6 max-w-5xl w-full'>
                <div className='relative'>
                    <div className='absolute inset-0 rounded-full bg-[#F97316]/30 blur-2xl scale-110 animate-pulse' />
                    <img
                        className='relative rounded-full h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mx-auto object-cover ring-2 ring-[#F97316]/60 shadow-[0_0_40px_rgba(249,115,22,0.5)]'
                        src={data.utility['static-file-base-url'] + data.body.hero.image}
                        alt=''
                    />
                </div>

                <div className='w-full'>
                    <h2 className='text-[10px] sm:text-xs md:text-sm uppercase text-gray-400 pb-2 tracking-[6px] sm:tracking-[10px] md:tracking-[12px] break-words'>
                        <span>{profession}</span>
                    </h2>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold px-2 break-words bg-gradient-to-r from-white via-[#F97316] to-white bg-clip-text text-transparent'>
                        <span>{text}</span>
                        <Cursor cursorColor='#F97316'></Cursor>
                    </h1>
                    <div className='pt-4 sm:pt-5 flex flex-wrap justify-center gap-1.5 sm:gap-2'>
                        <Link href="#about"><button className='hero-button'>About</button></Link>
                        <Link href="#education"><button className='hero-button'>Education</button></Link>
                        <Link href="#experience"><button className='hero-button'>Experience</button></Link>
                        <Link href="#skills"><button className='hero-button'>Skills</button></Link>
                        <Link href="#certifications"><button className='hero-button'>Certs</button></Link>
                        <Link href="#projects"><button className='hero-button'>Projects</button></Link>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60'>
                <div className='w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1'>
                    <div className='w-1 h-2 bg-[#F97316] rounded-full animate-bounce' />
                </div>
                <span className='text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500'>Scroll</span>
            </div>
        </div>
    )
}
