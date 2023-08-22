import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../Constants'
import Ball from './canvas/Ball'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologie)=>(
        <div className='w-28 h-28' key={technologie.name}>
          <Ball/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"tech") 