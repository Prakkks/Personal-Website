
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

const HackerRoom = (props: any) => {
  const { nodes } = useGLTF('/models/hacker-room.glb');

  return (
    <group {...props} dispose={null}>
      {Object.values(nodes).map((node, index) => {
        if (node instanceof Mesh) {
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
