import React, { Suspense } from 'react'
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
    <Canvas frameloop='demand' shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
      </Suspense>
    </Canvas>
  )
}

export default Computers