
import { Float, useGLTF } from '@react-three/drei'
import type { JSX } from 'react'
import { Mesh } from 'three';


const ReactLogo = (props:JSX.IntrinsicElements['group'] ) =>{
  const { nodes } = useGLTF('/models/react_logo.glb')
  return (
     <Float  dispose={null}>
      <group scale={0.006} {...props}>

          {Object.values(nodes).map((node, index) => {
            if (node instanceof Mesh) {
              return (
                <primitive
              key={index}
              object={node}
              position={[-400, 8.935, 18.102]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[39.166, 39.166, 52.734]}
                />
              );
            }
            return null;
          })}
        </group>
       </Float>
  )
}

useGLTF.preload('/models/react_logo.glb');
export default ReactLogo;
