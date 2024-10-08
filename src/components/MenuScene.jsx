/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./src/assets/menuScene.glb 
*/

import React, { useRef, useLayoutEffect, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, useAnimations } from '@react-three/drei'

import gsap from 'gsap'
import menu from '../assets/menuScene.glb'


export function MenuScene(props) {
  
  const groupRef = useRef() // 
  //const group = React.useRef()
  const { nodes, materials, animations } = useGLTF(menu)
  const { actions } = useAnimations(animations, groupRef)


 // const { scene } = useGLTF(menu)
  //const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  //const { nodes, materials } = useGraph(clone)
  const tl = useRef()
  const lightRef = useRef()
  const aboutRef = useRef()
  const homeRef = useRef()
  const expRef = useRef()
  const contactRef = useRef()
  const scroll = useScroll() // 

  
  useEffect(() => {
    // tl.current = tl.current ? tl.current : gsap.timeline();
    for (const child of Object.values(nodes)) 
      {
         if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
        
     }
 
   }, [])

  useEffect(() => {
  //   gsap.from(groupRef.current.position, {
  //   duration : 1,
  //   z: 20,
  // })
  }, [])

useFrame((state, delta, frame) => {

  //tl.current.progress()
  tl.current.seek(scroll.offset * tl.current.duration())
})  


  

  useLayoutEffect(() => {
      //tl.current =  gsap.timeline();
      tl.current = tl.current ? tl.current : gsap.timeline();
      if (groupRef.current){  

          tl.current.to (
            groupRef.current.rotation,
            { 
              duration:26,
              y: - (Math.PI * 1.25),
             //scrub: 1 
            }, 
3
          )
        
          .to (
            groupRef.current.position,
            { 
              duration: 9,
              z: -8,
              x: 1,
              y: 1
              //scrub: 1  
            },0
           
          )
          .to (
            groupRef.current.position,
            { 
              duration: 6,
              z: 0,
              x: 1
              //scrub: 1  
            },12
           
          )
          
          .to (
            groupRef.current.position,
            { 
              duration: 6,
              z: -8,
              x: -1,
              y: -1
              //scrub: 1  
            },20
          )
  

      }
  }, [scroll.offset])



  const handleAbout = (e) => {
    console.log('about')
  }
  const handleHome = (e) => {
      e.stopPropagation()
    console.log('home')
 //   homeRef.current?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
  }
  

  return (
    <group ref={groupRef} {...props} dispose={null} >
      <group name="Scene">
        <pointLight name="PointAbout" intensity={0.5} decay={2} color="#cfff83" position={[0.583, 0.313, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point_Contact" intensity={0.5} decay={2} color="#b7c4ff" position={[0.243, 0, -0.345]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point_Exp" intensity={0.5} decay={2} color="#ff1200" position={[-0.268, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point_Home" intensity={0.5} decay={2} color="#ff00d5" position={[-0.302, -0.365, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <group ref={expRef}> 
            <mesh name="Text_Exp" geometry={nodes.Text_Exp.geometry} material={materials['Material.003']} rotation={[0, 1.571, 0]} />
            <mesh name="Portal_Exp" geometry={nodes.Portal_Exp.geometry} material={materials['Material.002']} />  

        </group>
        <group ref={homeRef} > 
           <mesh name="Text_Home" geometry={nodes.Text_Home.geometry} material={materials.Material} />
            <mesh name="Portal_Home" geometry={nodes.Portal_Home.geometry} material={materials.Material} />

        </group>
        <group ref = {aboutRef}>
          <mesh name="Text_About" geometry={nodes.Text_About.geometry} material={materials['Material.002']} rotation={[0, -1.571, 0]} />
          <mesh name="Portal_About" geometry={nodes.Portal_About.geometry} material={materials['Material.003']} />
          
           </group>
        <group ref={contactRef} >
           <mesh name="TextContact" geometry={nodes.TextContact.geometry} material={materials['Material.001']} />
           <mesh name="Portal_Contact" geometry={nodes.Portal_Contact.geometry} material={materials['Material.001']} />
        </group>
        <group>

          <mesh name="Cube_cell004" geometry={nodes.Cube_cell004.geometry} material={materials.Material} />
          <mesh name="Cube_cell005" geometry={nodes.Cube_cell005.geometry} material={materials.Material} />
          <mesh name="Cube_cell006" geometry={nodes.Cube_cell006.geometry} material={materials.Material} />
          <mesh name="Cube_cell007" geometry={nodes.Cube_cell007.geometry} material={materials.Material} />
          <mesh name="Cube_cell008" geometry={nodes.Cube_cell008.geometry} material={materials.Material} />
          <mesh name="Cube_cell009" geometry={nodes.Cube_cell009.geometry} material={materials.Material} />
          <mesh name="Cube_cell010" geometry={nodes.Cube_cell010.geometry} material={materials.Material} />
          <mesh name="Cube_cell011" geometry={nodes.Cube_cell011.geometry} material={materials.Material} />
          <mesh name="Cube_cell012" geometry={nodes.Cube_cell012.geometry} material={materials.Material} />
          <mesh name="Cube_cell015" geometry={nodes.Cube_cell015.geometry} material={materials.Material} />
          <mesh name="Cube_cell016" geometry={nodes.Cube_cell016.geometry} material={materials.Material} />
          <mesh name="Cube_cell017" geometry={nodes.Cube_cell017.geometry} material={materials.Material} />
          <mesh name="Cube_cell018" geometry={nodes.Cube_cell018.geometry} material={materials.Material} />
          <mesh name="Cube_cell019" geometry={nodes.Cube_cell019.geometry} material={materials.Material} />
          <mesh name="Cube_cell020" geometry={nodes.Cube_cell020.geometry} material={materials.Material} />
          <mesh name="Cube_cell021" geometry={nodes.Cube_cell021.geometry} material={materials.Material} />
          <mesh name="Cube_cell022" geometry={nodes.Cube_cell022.geometry} material={materials.Material} />
          <mesh name="Cube_cell023" geometry={nodes.Cube_cell023.geometry} material={materials.Material} />
          <mesh name="Cube_cell024" geometry={nodes.Cube_cell024.geometry} material={materials.Material} />
          <mesh name="Cube_cell025" geometry={nodes.Cube_cell025.geometry} material={materials.Material} />
          <mesh name="Cube_cell" geometry={nodes.Cube_cell.geometry} material={materials.Material} morphTargetDictionary={nodes.Cube_cell.morphTargetDictionary} morphTargetInfluences={nodes.Cube_cell.morphTargetInfluences} />
          <mesh name="Cube_cell001" geometry={nodes.Cube_cell001.geometry} material={materials.Material} morphTargetDictionary={nodes.Cube_cell001.morphTargetDictionary} morphTargetInfluences={nodes.Cube_cell001.morphTargetInfluences} />
          <mesh name="Cube_cell002" geometry={nodes.Cube_cell002.geometry} material={materials.Material} morphTargetDictionary={nodes.Cube_cell002.morphTargetDictionary} morphTargetInfluences={nodes.Cube_cell002.morphTargetInfluences} />
          <mesh name="Cube_cell003" geometry={nodes.Cube_cell003.geometry} material={materials.Material} morphTargetDictionary={nodes.Cube_cell003.morphTargetDictionary} morphTargetInfluences={nodes.Cube_cell003.morphTargetInfluences} />
          <mesh name="Cube_cell013" geometry={nodes.Cube_cell013.geometry} material={materials.Material} morphTargetDictionary={nodes.Cube_cell013.morphTargetDictionary} morphTargetInfluences={nodes.Cube_cell013.morphTargetInfluences} />
          <mesh name="Cube_cell014" geometry={nodes.Cube_cell014.geometry} material={materials.Material} morphTargetDictionary={nodes.Cube_cell014.morphTargetDictionary} morphTargetInfluences={nodes.Cube_cell014.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/menuScene.glb')
