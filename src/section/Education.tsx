import { Canvas } from "@react-three/fiber"
import { EducationHistory } from "../Constants"
import { OrbitControls } from "@react-three/drei"
import { Suspense, useState } from "react"
import CanvasLoader from "../Components/CanvasLoader"
import Avatar from "../Components/Avatar"
import { useMediaQuery } from "react-responsive"





const Education = () => {

    const isDesktop = useMediaQuery({ minWidth: 1024 });
     const [animationName, setAnimationName] = useState('Action-Idle');
  return (
    <section className="c-space my-10 sm:my-20" id="education">
        <div className="w-full text-white-600" >
            <div className="head-text text-gray_gradient "> Education</div>
           <div className="work-container">
              { isDesktop &&  <div className="work-canvas "  >
                    <Canvas  >
                        <ambientLight intensity={0.5} position={[0,0,5]} />
                        <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                        <directionalLight position={[10,10,10]} intensity={1}/>
                        <OrbitControls  enableZoom={false} maxPolarAngle={Math.PI/2} />
                        <Suspense fallback={<CanvasLoader />} />
                        <Avatar position-y={-3} scale={3} animationName={animationName} />
                    </Canvas>
                </div>}
                <div className="work-content breath-animation">
                    <div className="sm:py-10 py-0 sm:px-5 px-2.5">
                        {EducationHistory.map( (item,index )=>(
                            <div key={index} 
                             onClick={() => setAnimationName(item.animation)}
                  onPointerOver={() => setAnimationName(item.animation)}
                  onPointerOut={() => setAnimationName('Action-Idle')}
                            className="work-content_container group">
                                <div className="flex  py-2 flex-col h-full justify-start  items-center">
                                    <div className="work-content_logo "> 
                                        <img src={item.icon} alt="logo" className="sm:w-full  sm:h-full scale-150 object-cover sm:scale-120" />
                                    </div>
                                    <div className="work-content_bar" />
                                 </div>   
                                <div className="sm:p-5 p-2.5 py-5">
                                <p className="font-bold dark:text-white-800 text-black-500">{item.name}</p>
                                <p className="text-sm mb-2 sm:mb-5 text-gray-500 ">{item.pos } -- {item.duration}</p>
                                <p className="dark:group-hover:text-white group-hover:text-black transition ease-in-out duration-500 sm:text-justify text-sm md:text-[15px] ">
                                    {item.title}
                                </p>
                                 </div>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education