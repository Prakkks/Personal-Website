import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../Components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../Components/CanvasLoader"
import { Leva, useControls } from "leva"
import { calculateSizes } from "../Constants"
import Target from "../Components/Target"
import ReactLogo from "../Components/ReactLogo"
import Cube from "../Components/cube"


const Hero = () => {
  
//   const controls = useControls('HackerRoom', {
//   positionX: { value: 2.5, min: -10, max: 10 },
//   positionY: { value: 2.5, min: -10, max: 10 },
//   positionZ: { value: 2.5, min: -10, max: 10 },
//   rotationX: { value: 2.5, min: -10, max: 10 },
//   rotationY: { value: 2.5, min: -10, max: 10 },
//   rotationZ: { value: 2.5, min: -10, max: 10 },
//   scale: { value: 2.5, min: -10, max: 10 },
// });

const width = window.innerWidth;
const isSmall = width <= 480;
const isMobile = width > 480 && width <= 768;
const isTablet = width > 768 && width <= 1024;


const sizes = calculateSizes(isSmall,isMobile,isTablet);

  return (
    <section className='min-h-screen full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'> Hi, I am Prakriti <span className='waving-hand'>👋</span></p>
        <p className="hero_tag text-gray_gradient">Passionate about building what matters.</p>
        </div>
        <div className="w-full h-full absolute inset-0`">
                <Leva />
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>

                <PerspectiveCamera  makeDefault position={[0,0,30]}/>
                <HackerRoom 
                scale = {sizes.deskScale} 
                position = {sizes.deskPosition} 
                rotation = { [0,Math.PI,0]} 
                />
                <group>
                  <Target position={sizes.targetPosition} />
                  <ReactLogo position= {sizes.reactLogoPosition}/>
                  <Cube position={sizes.cubePosition} />
                  
                </group>
                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} intensity={0.5}/>
                
                </Suspense> 
            </Canvas>
        </div>
    </section>
  )
}

export default Hero