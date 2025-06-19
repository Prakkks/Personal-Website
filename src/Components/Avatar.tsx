import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import type { Group, AnimationAction, Mesh, SkinnedMesh } from 'three'
import { LoopRepeat, LoopOnce } from 'three'

interface AvatarProps {
  animationName?: string
  loop?: boolean
  [key: string]: any
}



const Avatar = ({ animationName = 'Action-Idle', loop=false, ...props }: AvatarProps) => {
  const group = useRef<Group>(null)
  const currentAction = useRef<AnimationAction | null>(null)

  const { nodes, materials, animations } = useGLTF('/models/animations/avatar1.glb')
  const { actions } = useAnimations(animations, group)
  console.log('ANimation data');
  console.log(animations);

  useEffect(() => {
  if (!actions || !animationName) return;

  // Try exact match first
  let action: AnimationAction | null = actions[animationName] ?? null;

  // If no exact match, try partial match (e.g., "Action-Clap" matches "Action-Clap_Armature.002")
  if (!action) {
    const altKey = Object.keys(actions).find(key => key.startsWith(animationName));
    if (altKey) {
      action = actions[altKey] ?? null;
    }
  }

  if (!action) {
    console.warn(`Animation '${animationName}' not found in actions`);
    return;
  }

  // Fade out current if switching
  if (currentAction.current && currentAction.current !== action) {
    currentAction.current.fadeOut(0.2);
  }

  action.reset().fadeIn(0.2);
  action.setLoop(loop ? LoopRepeat : LoopOnce, Infinity);
  action.play();

  currentAction.current = action;

  return () => {
    action?.fadeOut(0.2);
  };
}, [animationName, actions, loop]);



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={(nodes.EyeLeft as Mesh).geometry}
            material={materials['Wolf3D_Eye.007']}
            skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.EyeLeft as Mesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.EyeLeft as Mesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={(nodes.EyeRight as Mesh).geometry}
            material={materials['Wolf3D_Eye.007']}
            skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.EyeRight as Mesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.EyeRight as Mesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={(nodes.Wolf3D_Body as Mesh).geometry}
            material={materials['Wolf3D_Body.007']}
            skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={(nodes.Wolf3D_Glasses as Mesh).geometry}
            material={materials['Wolf3D_Glasses.007']}
            skeleton={(nodes.Wolf3D_Glasses as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={(nodes.Wolf3D_Hair as Mesh).geometry}
            material={materials['Wolf3D_Hair.007']}
            skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={(nodes.Wolf3D_Head as Mesh).geometry}
            material={materials['Wolf3D_Skin.007']}
            skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.Wolf3D_Head as Mesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Head as Mesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={(nodes.Wolf3D_Outfit_Bottom as Mesh).geometry}
            material={materials['Wolf3D_Outfit_Bottom.010']}
            skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={(nodes.Wolf3D_Outfit_Footwear as Mesh).geometry}
            material={materials['Wolf3D_Outfit_Footwear.007']}
            skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={(nodes.Wolf3D_Outfit_Top as Mesh).geometry}
            material={materials['Wolf3D_Outfit_Top.007']}
            skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={(nodes.Wolf3D_Teeth as Mesh).geometry}
            material={materials['Wolf3D_Teeth.001']}
            skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.Wolf3D_Teeth as Mesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Teeth as Mesh).morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}
export default Avatar
useGLTF.preload('/models/animations/avatar1.glb')


