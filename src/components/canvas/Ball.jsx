import React from 'react'
import Loader from '../Loader';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,5]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} rotation={[2*Math.PI,0,6.25]} map={decal} flatShading scale={1}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return(
    <Canvas frameloop='always' dpr={[1, 2]} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.35} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas

//shadows camera={{position:[20,3,5],fov:25}} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}