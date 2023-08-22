import React, { Suspense } from 'react'
import * as random from "maath/random/dist/maath-random.esm";
import { Canvas } from '@react-three/fiber';

const Stars = (props) => {
  return (
    <div>Stars</div>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-full z-[-1] absolute inset-0'>
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense fallback={null}/>
      </Canvas>
    </div>
  )
}

export default StarsCanvas