
// import { useGLTF, useTexture } from '@react-three/drei';
// import { Mesh, MeshMatcapMaterial } from 'three';

// const HackerRoom = (props: any) => {
//   const { nodes, materials } = useGLTF('/models/hacker-room.glb');
//   const monitorTexture = useTexture('/textures/desk/monitor.png');
//   const screenTexture = useTexture('/textures/desk/screen.png');


//   return (
//   <group dispose={null} {...props}>
//     {Object.values(nodes).map((node, index) => {
//                         console.log(node.name)
                                          
      
//             if (node.type == 'Mesh') {
//                const {  ...rest } = node;
//               return (
//                 <mesh
//               key={index}
//               {  ...rest }
//               // object={node}
//               // geometry = {node.geometry}
//               material = {materials.node}
//               // castShadow
//               // receiveShadow
//                 >

//                  if (node.name == 'screen_screens_0' ){   
//         <meshMatcapMaterial map={screenTexture }  />}
//             else 
//             {
              
//             }
//               </mesh>
              
//               );
//             }
//             return null;
//           })}    
  
//   </group>

// )  
  
// }
// useGLTF.preload('/models/hacker-room.glb');
// export default HackerRoom;


import { useGLTF, useTexture } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { useMemo } from 'react';

const HackerRoom = (props: any) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  // Load textures (they may be undefined or null)
  const monitorTexture = useTexture('/textures/desk/monitor.png');
  const screenTexture = useTexture('/textures/desk/screen.png');

  // Define fallback materials using useMemo (avoid recreating every render)
  const defaultMaterial = useMemo(() => new MeshStandardMaterial({ color: 'gray' }), []);
  const screenMaterial = useMemo(() => (
    screenTexture
      ? new MeshStandardMaterial({ map: screenTexture })
      : defaultMaterial
  ), [screenTexture]);

  return (
    <group dispose={null} {...props}>
      {Object.values(nodes).map((node: any, index: number) => {
        if (node.type === 'Mesh') {
          let material = materials[node.material?.name] || defaultMaterial;

          // Apply screen material only for specific mesh name
          if (node.name === 'screen_screens_0') {
            material = screenMaterial;
          }

          return (
            <mesh
              key={index}
              geometry={node.geometry}
              material={material}
              castShadow
              receiveShadow
            />
          );
        }
        return null;
      })}
    </group>
  );
};

useGLTF.preload('/models/hacker-room.glb');

export default HackerRoom;
