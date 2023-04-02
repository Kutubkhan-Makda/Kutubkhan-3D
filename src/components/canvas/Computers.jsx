import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import { HemisphereLight, PointLight } from 'three';
import Loader from '../Loader';

const Computers = () => {
  const comuter = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <HemisphereLight intensity={0.15} groundColor='black' />
      <PointLight intensity={1}/>
      <primitive object={comuter.scene}/>
    </mesh>
  )
}

const computerCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default Computers