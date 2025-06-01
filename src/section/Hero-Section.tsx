import { Canvas } from '@react-three/fiber'
import CanvasComputer from '../Components/CanvasComputer'
import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Components/CanvasLoader'
import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei'
import HeroCamera from '../Components/HeroCamera'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../Constants'
import Button from '../Components/Button'
import RotatingTitle from '../Components/RotatingTitle'





const HeroSection = () => {
const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isTab = useMediaQuery({ minWidth: 640, maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

 const [laptop , setlaptop] = useState(isDesktop);
 const [small , setsmall] = useState((isSmall || isMobile));

 useEffect(()=> {
  setlaptop(isDesktop);

 }, [isDesktop]);

  useEffect(()=> {
  setsmall(!(isSmall || isMobile));

 }, [isSmall || isMobile]);

  

  
  

  const sizes = calculateSizes(isSmall, isMobile, isTablet, isTab);
  return (
    <section className=" relative c-space w-full h-screen">
        <div className={` px-6 absolute inset-0 top-[420] max-w-7xol my-20 mx-auto flex flex-row items-center gap-5 sm:items-start justify-center  ` }>
            <div className='flex flex-col justify-center  items-center mt-5'>
               { <div className=' w-5 h-5 rounded-full bg-[#915eff]' />}
                <div className='w-1 sm:h-60 h-36  violet-gradient ' />
            </div>
        <div >
            <h1 className='font-black text-white  md:text-[50px] sm:text-[40px]  xs:text-[30px] text-[25px] lg:leading-[98px] mt-2'> Hi, I'm <span className='text-[#915eff]'> Prakriti  </span> Thapa</h1>
            <RotatingTitle />
            <p className='text-white-600 font-medium  sm:text-[16px] md:text-[18px] xs:text-[13px] text-[14px]  lg:leading-[30px] mt-2 '>Passionate about building user-friendly applications and intelligent  <br /> systems  by blending web development, machine learning, and robotics.<br className='sm:hidden block' />  </p>
        </div>
        </div>
         <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera  makeDefault position={[0,0,30]}/>
            <HeroCamera isMobile={isMobile}>

                    { small && (<CanvasComputer  scale = {sizes.deskScale}  position={sizes.deskPosition} />)}

                <ambientLight intensity={1} />
                <directionalLight color={'#C8A2C8'}  position={[10,4,10]} intensity={5}/>
                <SpotLight position={[-20,15,10]}  angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize = {1024}/>

                     {laptop && (
                   <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.8, -5.5, -1.5]}>
                   <planeGeometry args={[18, 10]} />
                    <meshBasicMaterial color="white" opacity={0.2} transparent />
                   </mesh>
                    )}
            </HeroCamera>


                {/* <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}  minPolarAngle={Math.PI/2} /> */}
                </Suspense> 
            </Canvas>
             <div className="absolute bottom-10 sm:bottom-7 right-0 left-0  lg:right-16 w-full z-10 c-space "> 
          <a href="#about" className="w-fit">
            <Button name='Lets work together!' isBeam containerClass = 'sm:w-fit w-full sm:min-w-96' /> 
          </a>
        </div>
    </section>
  )
}

export default HeroSection