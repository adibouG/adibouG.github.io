import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Box, PointerLockControls, OrbitControls, Sky, Cylinder, MeshReflectorMaterial, Text3D, Center, KeyboardControls,
   ScrollControls, useFaceControls, useCamera, useScroll,
   Capsule} from '@react-three/drei'
import {Physics, RigidBody, CuboidCollider, CapsuleCollider,CylinderCollider} from '@react-three/rapier'
import gsap from 'gsap'
import { Menu2 } from './MenuScene'
import { Menu } from './MenuScene2'




const SceneComponent = ({...props}) => {
  

  
  return (
    <>
      <group {...props} >
      <pointLight intensity={0.5} color="#cfff83" position={[0.1, 0, 0.1]}  />
      <pointLight intensity={0.5} color="#cfff83" position={[0.1, 0, -0.1]}  />
      <pointLight intensity={0.5} color="#ff1200" position={[-0.1, 0, 0.1]}  />
      <pointLight intensity={0.5} color="#ff00d5" position={[-0.1, 0, -0.1]}  />
     
      <pointLight intensity={0.5} color="#ffffff" position={[-2, 0, -3.5]}  />
      <pointLight intensity={0.5} color="#99ffbb" position={[2,0, -1.5]}  /> 
     
      <Menu/>
<mesh scale={1} position={[0, -1.5, 0]} rotation-x={-Math.PI / 2} receiveShadow>

        <planeGeometry args={[20, 20]}    />
          <meshStandardMaterial resolution={2048} mixBlur={0.5}
           mixStrength={1}
           color="#ffffff" metalness={0.5} roughness={0.5}  
           />
           </mesh>
        </group>            
     </>
  )
}

export default SceneComponent