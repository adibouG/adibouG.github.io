import { Suspense, useMemo, useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Box, PointerLockControls, OrbitControls, Sky, Cylinder, MeshReflectorMaterial, 
  Text3D, Center,
   ScrollControls, KeyboardControls , useCamera, useScroll,
   Environment} from '@react-three/drei'
import {Physics, RigidBody, CuboidCollider, CylinderCollider} from '@react-three/rapier'
import gsap from 'gsap'

import './App.css'
//import { Model } from './components/Model'
import  SceneComponent  from './components/Scene'
import Overlay from './components/Overlay'

//import  Controller  from './components/Controller'
//import TextComponent from './components/Text'

export const Control = {
  forward : 'forward',
  back : 'back',
  left : 'left',
  right : 'right',
  jump : 'jump',
  fire : 'fire',
}

function App() {

  const map = useMemo(()=>[
    { name: Control.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Control.back, keys: ['ArrowDown', 'KeyS'] },
    { name: Control.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Control.right, keys: ['ArrowRight', 'KeyD'] },
    { name: Control.jump, keys: ['Space'] },
    { name: Control.fire, keys: ['CtrlRight , CtrlLeft'] },

  ])



  



  return (
    <div id="app">
      <div className='aim'> <span className='blink'>
         work in progress 
        </span>
         </div>
      <Canvas shadows camera={{ fov: 80, position: [0, 0, 10] }} >
        <Suspense>
          <ScrollControls pages={4} horizontal={false} >
        
          <OrbitControls enableZoom={false} />


            <SceneComponent />
            <Overlay  />
          <axesHelper />
      </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
