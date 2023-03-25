import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

const Computers = () => {
  const comuter = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1}/>
      <primitive object={comuter.scene}/>
    </mesh>
  )
}

const computerCanvas = () => {
  return (
    <Canvas/>
  )
}

export default Computers