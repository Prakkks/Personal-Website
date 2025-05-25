import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useRef } from "react"
import type { Group } from "three"
import type { ReactNode } from "react"

interface HeroCameraProps {
  children: ReactNode
  isMobile: boolean
}

const HeroCamera: React.FC<HeroCameraProps> = ({ children, isMobile }) => {
  const groupRef = useRef<Group>(null)

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta)

    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 3, 0],
        0.25,
        delta
      )
    }
  })

  return <group ref={groupRef} scale={1.1}>{children}</group>
}

export default HeroCamera
