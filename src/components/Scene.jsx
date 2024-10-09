import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Box, PointerLockControls, OrbitControls, Sky, Cylinder, MeshReflectorMaterial, Text3D, Center, KeyboardControls,
   ScrollControls, useFaceControls, useCamera, useScroll,
   Capsule} from '@react-three/drei'
import {Physics, RigidBody, CuboidCollider, CapsuleCollider,CylinderCollider} from '@react-three/rapier'
import gsap from 'gsap'
import { MenuScene } from './MenuScene'
import { HemisphereLight } from 'three'
//import { Menu } from './MenuScene2'



const Star = React.forwardRef(function Star( props, ref ) {


  useFrame( (_, delta) => {
    
//     console.log(ref.current)
    //    setPos1(pos =>  pos -0.1 * delta) 
//    const a = clock.getElapsedTime()
   if (ref && ref.current) {
    ref.current.position.x += 0.5 * delta   
    ref.current.position.y += 0.5 * delta   
   }

  })


  return (
    <group ref={ref} {...props} >
<pointLight intensity={0.25} color="#ffffff"   />
    <mesh>
      <sphereGeometry args={[props.size || 0.5, 8, 12 ]} />
      <meshPhongMaterial color="#ffffff"  emissive={"#ffffff"} emissiveIntensity={0.5}/>
    </mesh>
    </group>
  )
})



const makeStars = () => {
  const stars = []
  for (let i = 0; i < 50; i++) {
    const x = (Math.random() - 0.5) * 100 
    const y = (Math.random() - 0.5) * 100 + 10
    const z = (Math.random() - 0.5) * 100 
    const s = (Math.random() + 0.5)
   

    stars.push(<Star  size={s} position={[x, y, z]} key={`${x},${y},${z}`} />) // [x, y, z])
  }
  return stars
}


const s = makeStars()
     



const SceneComponent = ({...props}) => {
  

   const pos2 = useRef()
   const pos3 = useRef()
  
  return (
    <>

      <group {...props} >
      <hemisphereLight intensity={0.09} color="#cfff83" position={[1,5, 1]}/>  
      
      <pointLight intensity={1.5} color="#ffffff" position={[-2, 0, -3.5]}  />
      <pointLight intensity={1.5} color="#99ffbb" position={[2,0, -1.5]}  /> 
    <Star ref={pos2}   position={[-10, 2, -10]}  />
    <Star ref={pos3} position={[-3, -2, -15]}  />
     <group position={[5, 0, 0]}  rotation-y={Math.PI / 3}>
      <MenuScene />
     </group>
      {s}
      <mesh scale={1} position={[0, -5, 0]} rotation-x={-Math.PI / 2} receiveShadow>

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