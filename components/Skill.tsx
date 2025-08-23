import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean,
    skill: string,
    baseUrl : string
}

function Skill({ directionLeft , skill, baseUrl }: Props) {
    return (
        <div className='group relative flex cursor-pointer h-30 w-30'>
            <motion.img
            className='bg-[#292929] p-3 rounded-3xl'
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: -10
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={baseUrl + skill }
>
            </motion.img>
            <p></p>
        </div>
    )
}

export default Skill