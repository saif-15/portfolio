import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
            className='bg-white'
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={'https://portfolio-tech-icons.s3.us-east-1.amazonaws.com/JavaScript.png'}
>
            </motion.img>
            <p></p>
        </div>
    )
}

export default Skill