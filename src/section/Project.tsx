import { Suspense, useState } from "react";
import { myProjects } from "../Constants"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";
import ProjectDemo from "../Components/ProjectDemo";

const Project = () => {
    const ProjectCount = myProjects.length;
    const [selectedPindex, setselectedPindex] = useState(0);
    
    const currentProject = myProjects[selectedPindex];

 const handleNavigation = (direction: 'previous' | 'next') => {
  setselectedPindex((prevIndex) => {
    if (direction === 'previous') {
      return prevIndex === 0 ? ProjectCount - 1 : prevIndex - 1;
    } else {
      return prevIndex === ProjectCount - 1 ? 0 : prevIndex + 1;
    }
  });
};


  return (
    <section className="c-space my-20"> 
    <p className=" text-gray_gradient sm:text-4xl text-3xl font-semibold"> My Work</p>
    <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 ">
            <div className="absolute top-0 right-0">
                <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>
            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg  " style={ currentProject.logoStyle}> 
                <img src={currentProject.logo } alt="logo" className="w-10 h-10 shadow-sm" />
            </div>
            <div className="flex flex-col gap-5 text-white-600 my-5 ">
                <p className="text-white text-2xl  font-semibold animatedText " >{currentProject.title}</p>
                <p className="animatedText"> {currentProject.desc}</p>
                <p className="animatedText"> {currentProject.subdesc }</p>
            </div>
            <div className=" flex  items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-6 ">
                    {currentProject.tags.map((tag, index )=> (
                        <div key={index} className="tech-logo">
                            <img src={tag.path} className="h-8 w-8" alt={tag.name} />
                        </div>
                    ))}
                </div>
                <a className="flex items-center gap-2  cursor-pointer  text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                    <p>Check Live Site</p>
                    <img src="assets/arrow-up.png" className="w-3 h-3" alt="arrow"/>
                </a>
            </div>
            {/* Container for arrow movement  */}
            <div className="flex justify-between  items-center mt-7">
                <button className=" w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full text-white arrow-gradient "
                 onClick={()=> handleNavigation('previous')}>
                        <img src='/assets/left-arrow.png' alt="arrow-right " className="w-4 h-4" />
                </button>
                <button className=" w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full text-white arrow-gradient "
                 onClick={()=> handleNavigation('next')}>
                        <img src='/assets/right-arrow.png' alt="arrow-left " className="w-4 h-4" />
                </button>
            </div>

        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
                <ambientLight intensity={3.1415} />
                <directionalLight position={[10,10,5]} />
                <Center>
                    <Suspense fallback={<CanvasLoader />}>
                    <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                        <ProjectDemo texture={currentProject.texture} />
                    </group> 
                    </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={true} />
            </Canvas>

        </div>

    </div>
    
    </section>

  )
}

export default Project