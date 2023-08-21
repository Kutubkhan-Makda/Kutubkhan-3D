import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../Utils/motion'

const SectionWrapper = (Component,idName) => function HOC() {
    return(
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show">
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper