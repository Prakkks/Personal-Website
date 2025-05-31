import { Canvas } from '@react-three/fiber'
import CanvasComputer from '../Components/CanvasComputer'
import { Suspense } from 'react'
import CanvasLoader from '../Components/CanvasLoader'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import HeroCamera from '../Components/HeroCamera'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../Constants'
import { useControls } from 'leva'

const HeroSection = () => {

    const controls = useControls('HackerRoom', {
  positionX: { value: 2.5, min: -10, max: 10 },
  positionY: { value: 2.5, min: -10, max: 10 },
  positionZ: { value: 2.5, min: -10, max: 10 },
  rotationX: { value: 0, min: -10, max: 10 },
  rotationY: { value: 0, min: -10, max: 10 },
  rotationZ: { value: 0, min: -10, max: 10 },
  scale: { value: 2.5, min: -10, max: 10 },
});
  
const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className=" relative c-space my-20 w-full h-screen">
        <div className={`sm:px-16 px-6 absolute inset-0 top-[120] max-w-7xol mx-auto flex flex-row items-start gap-5 ` }>
            <div className='flex flex-col justify-center  items-center mt-5'>
                <div className=' w-5 h-5 rounded-full bg-[#915eff]' />
                <div className='w-1 sm:h-60 h-36  violet-gradient ' />
            </div>
        <div>
            <h1 className='font-black text-white  lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2'> Hi, I'm <span className='text-[#915eff]'> Prakriti Thapa </span></h1>
            <p className='text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[24px] xs:text-[18px] text-[14px] lg:leading-[40px]'>Hello I develop three d web application <br className='sm:hidden block' /> nad enthusiast for bla bla </p>
        </div>
        </div>
         <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera  makeDefault position={[0,0,30]}/>
           
                      <CanvasComputer   />

                <ambientLight intensity={1} />
                <directionalLight position={[10,5,10]} intensity={0.5}/>
                {/* <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}  minPolarAngle={Math.PI/2} /> */}
                </Suspense> 
            </Canvas>
    </section>
  )
}

export default HeroSection