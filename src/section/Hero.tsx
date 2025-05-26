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
import HeroCamera from "../Components/HeroCamera"
import Button from "../Components/Button"
import { useMediaQuery } from "react-responsive"






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

const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

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
               <HeroCamera isMobile = {isMobile}>
                 <HackerRoom 
                scale = {sizes.deskScale} 
                position = {sizes.deskPosition} 
                rotation = { [0,Math.PI,0]} 
                />
               </HeroCamera>
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
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space "> 
          <a href="#about" className="w-fit">
            <Button name='Lets work together!' isBeam containerClass = 'sm:w-fit w-full sm:min-w-96' /> 
          </a>
        </div>
    </section>
  )
}

export default Hero