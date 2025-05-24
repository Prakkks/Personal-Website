
import { useGLTF, useTexture } from '@react-three/drei';
import { Mesh, MeshMatcapMaterial } from 'three';

const HackerRoom = (props: any) => {
  const { nodes } = useGLTF('/models/hacker-room.glb');
  const monitorTexture = useTexture('/textures/desk/monitor.png');
  const screenTexture = useTexture('/textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      {Object.values(nodes).map((node, index) => {
        if (node instanceof Mesh) {
          // <MeshMatcapMaterial map={monitorTexture} />

          return (
            <primitive
              key={index}
              object={node}
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
