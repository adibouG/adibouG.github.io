import {Text3D, Center} from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

const Letter = ({letter, idx}) => {
    const xPos = idx || 0;
    return (
    <RigidBody position-x={idx}>
    {/* <Center position-y={0.5}> */}
        <Text3D font="./Fira_Sans_ExtraBold_Regular.json"
                size={0.5}
        >
            {letter}
            <meshNormalMaterial />
        </Text3D>
        {/* <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
    {/* </Center>   */}
    </RigidBody> 
    )
}

const TextComponent = ({text, separate, position}) => {
    
    if (separate) {
       const letters = []

        for (let i=0; i < text.length; ++i) {
            letters.push(
                <Letter key={i} idx={i} letter={text[i]}  />
            )
        }

        return (
            <group>
                {letters}
            </group> 
        )
    }
    else 
    {
        return(
            <RigidBody type='fixed' position={position}>
                <Text3D font="./Fira_Sans_ExtraBold_Regular.json"
                    size={0.5}
                >
                {text}
                <meshNormalMaterial />
            </Text3D>
            </RigidBody>
        )
    }
}


export default TextComponent