import React from 'react'
import Skill from './Skill'
import data from '../public/portfolio.json';

type Props = {}

function Skills({ }: Props) {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left xl:flew-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over the skill for current proficiency</h3>

            <div className='grid grid-cols-8 gap-5 m-50'>
                {Object.entries(data.body.skills).map(([key, value], index) => (
                    <Skill key={index} 
                    skill={value}
                    directionLeft={ index > Object.entries(data.body.skills).length / 2 }
                    baseUrl={data.utility['static-file-base-url']} />
                ))}

            </div>
        </div>
    )
}

export default Skills