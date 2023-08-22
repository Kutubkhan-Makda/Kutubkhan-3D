import React from 'react'
import { motion } from 'framer-motion'
import { github } from '../assets'
import SectionWrapper from '../hoc/SectionWrapper'
import { textVariant } from '../Utils/motion'
import { styles } from '../styles'

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className='w-full flex'>

    </div>
    </>
  )
}

export default SectionWrapper(Works,"") 