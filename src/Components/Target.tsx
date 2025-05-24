import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {  useGLTF } from "@react-three/drei";
import { useRef, type JSX } from "react";

import { Group } from "three";

const Target = (props: JSX.IntrinsicElements['group']) => {
  const targetRef = useRef<Group>(null);

  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []); // Optional dependency array


  return (
    <group {...props} ref={targetRef}>
      <primitive object={scene} />
    </group>
  );
};

export default Target;
