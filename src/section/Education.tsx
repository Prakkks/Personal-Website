import { Canvas } from "@react-three/fiber"
import { workExperiences } from "../Constants"
import { OrbitControls } from "@react-three/drei"
import { Suspense, useState } from "react"
import CanvasLoader from "../Components/CanvasLoader"
import Avatar from "../Components/Avatar"



const Education = () => {
     const [animationName, setAnimationName] = useState('Action-Idle');
  return (
    <section className="c-space my-20">
        <div className="w-full text-white-600" >
            <h3 className="head-text text-gray_gradient " > Education</h3>

            <div className="work-container">
                <div className="work-canvas "  >
                    <Canvas  >
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                        <directionalLight position={[10,10,10]} intensity={1}/>
                        <OrbitControls  enableZoom={false} maxPolarAngle={Math.PI/2} />
                        <Suspense fallback={<CanvasLoader />} />
                        <Avatar position-y={-3} scale={3} animationName={animationName} />
                    </Canvas>
                </div>
                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map( (item,index )=>(
                            <div key={index} 
                             onClick={() => setAnimationName(item.animation)}
                  onPointerOver={() => setAnimationName(item.animation)}
                  onPointerOut={() => setAnimationName('Action-Idle')}
                            className="work-content_container group">
                                <div className="flex  py-2 flex-col h-full justify-start  items-center">
                                    <div className="work-content_logo"> 
                                        <img src={item.icon} alt="logo" className="w-full  h-full" />
                                    </div>
                                    <div className="work-content_bar" />
                                 </div>   
                                <div className="sm:p-5 p-2.5 py-5">
                                <p className="font-bold text-white-800">{item.name}</p>
                                <p className="text-sm mb-5 ">{item.pos } -- {item.duration}</p>
                                <p className="group-hover:text-white transition ease-in-out duration-500">
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