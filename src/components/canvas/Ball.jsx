import { Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import React from 'react'
import Loader from '../Loader';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75}>
      <ambientLight intensity={0.25}/>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return(
    <Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas

//shadows camera={{position:[20,3,5],fov:25}} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}