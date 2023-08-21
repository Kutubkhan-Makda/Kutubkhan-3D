import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../Utils/motion'
import { styles } from '../styles'

const SectionWrapper = (Component,idName) => function HOC() {
    return(
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true,amount:0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper