import React, { Suspense, useRef } from 'react'
import * as random from "maath/random/dist/maath-random.esm";
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

const Stars = (props) => {
  const ref = useRef()

  return (
    <group>
      
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-full z-[-1] absolute inset-0'>
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  )
}

export default StarsCanvas