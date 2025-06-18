import { Suspense, useState } from "react";
import { myProjects } from "../Constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";
import ProjectDemo from "../Components/ProjectDemo";
import { useMediaQuery } from "react-responsive";
import ToggleButton from "../Components/ToggleButton";
import { useTheme } from "../assets/themeprovider";

interface ProjectDetailProps {
  currentProject: any;
  handleNavigation: (direction: "previous" | "next") => void;
  projectCount: number;
}

interface ProjectCanvasProps {
  currentProject: any;
  isMobile: boolean;
  isTablet: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ currentProject, handleNavigation, projectCount }) => {
  const isSingle = projectCount === 1;
  const {isDark} = useTheme();

  return (
    <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5  ">
      <div className="absolute top-0 right-0">
        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover" />
      </div>
      <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
        <img src={currentProject.logo} alt="logo" className="sm:w-10 sm:h-10 w-6 h-6 shadow-sm" />
      </div>
      <div className="flex flex-col gap-5 text-white-600 my-5">
        <p className="text-white sm:text-2xl font-semibold animatedText text-lg">{currentProject.title}</p>
        <p className="animatedText sm:text-[16px] text-sm text-justify">{currentProject.desc}</p>
        <p className="animatedText sm:text-[16px] text-sm text-justify">{currentProject.subdesc}</p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-6">
          {currentProject.tags.map((tag: any, index: number) => (
            <div key={index} className="tech-logo">
              <img src={tag.path} className="h-8 w-8" alt={tag.name} />
            </div>
          ))}
        </div>
        <a className="flex items-center gap-2 cursor-pointer dark:text-white-600 text-gray-700" href={currentProject.href} target="_blank" rel="noreferrer">
          <p>Check Live Site</p>
          <img src="assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
        </a>
      </div>

      <div className="flex justify-between items-center mt-7">
        {["previous", "next"].map((dir) => (
          <button
            key={dir}
            className={`w-10 h-10 p-3 rounded-full ${ isDark ? 'arrow-gradient' : 'gradient-light'} dark:text-white text-gray-900 transition-all ${
                    projectCount === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-95"
                  }`}
            onClick={() => handleNavigation(dir as "previous" | "next")}
            disabled={isSingle}
          >
              <img src={`/assets/${dir === "previous" ? `left-arrow${!isDark ? "-dark" : ""}.png` : `right-arrow${!isDark ? "-dark" : ""}.png` }`} alt={`${dir} arrow`}
  className="w-4 h-4"/>
            {/* <img src={`/assets/${dir === "previous" ? "left" : "right"}-arrow.png`} alt={`${dir} arrow`} className="w-4 h-4" /> */}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectCanvas: React.FC<ProjectCanvasProps> = ({ currentProject, isMobile, isTablet }) => {
  return (
    <div className="relative border dark:border-black dark:bg-black border-white bg-white rounded-lg h-96 md:h-full">
      <div className="absolute top-0 right-0">
        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover" />
      </div>
      <Canvas>
        <ambientLight intensity={3.1415} />
        <directionalLight position={[10, 10, 5]} />
        <Center>
          <Suspense fallback={<CanvasLoader />}>
            <group scale={isMobile ? 1 : isTablet ? 1.5 : 1.7} position={[0, -2, 0]} rotation={[0, -0.1, 0]}>
              <ProjectDemo texture={currentProject.texture} />
            </group>
          </Suspense>
        </Center>
        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
      </Canvas>
    </div>
  );
};

const Project = () => {
  const {isDark} = useTheme();
  const [show3D, setShow3D] = useState(false);
  const [activecategory, setactivecategory] = useState("Web Development");
  const filteredProjects = myProjects.filter((project) => project.category === activecategory);
  const projectCategories = [...new Set(myProjects.map((project) => project.category))];
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 640 });
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const ProjectCount = filteredProjects.length;
  const [selectedPindex, setselectedPindex] = useState(0);
  const currentProject = filteredProjects[selectedPindex];

  const handleNavigation = (direction: "previous" | "next") => {
    setselectedPindex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? ProjectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === ProjectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20 relative" id="project">
      <div className="flex flex-row justify-between">
        <p className="head-text sm:text-4xl text-3xl font-semibold">My Work</p>
        {isMobile && <ToggleButton isActive={!show3D} onToggle={() => setShow3D((prev) => !prev)} />}
      </div>

      <div className="dark:text-white text-gray-400 mt-10">
        <div className="flex flex-row md:px-10 justify-left px-5 text-xs md:text-base">
          {projectCategories.map((project) => (
            <div
              className={`project-title ${
                activecategory === project ? "dark:text-[#915eff] dark:border-b-primary-purple text-blue-500 border-b-blue-500" : ""
              }`}
              key={project}
              onClick={() => {
                setactivecategory(project);
                setselectedPindex(0);
              }}
            >
              {project}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full relative">
        {!isMobile ? (
          <>
            <ProjectDetail currentProject={currentProject} handleNavigation={handleNavigation} projectCount={ProjectCount} />
            <ProjectCanvas currentProject={currentProject} isMobile={isMobile} isTablet={isTablet} />
          </>
        ) : show3D ? (
          <ProjectDetail currentProject={currentProject} handleNavigation={handleNavigation} projectCount={ProjectCount} />
        ) : (
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5  ">
            <div className="absolute top-0 right-0">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover" />
            </div>
            <div className="p-3  w-fit rounded-lg" style={currentProject.logoStyle}>
              <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
            </div>
            <div className="flex flex-col gap-5 dark:text-white-600 text-gray-800 my-5">
              <p className="dark:text-white text-gray-900 font-semibold animatedText text-md sm:text-base">{currentProject.title}</p>
              <p className="animatedText text-sm sm:text-base  text-justify">{currentProject.desc}</p>

              <div className="relative border dark:border-black dark:bg-black bg-white border-white rounded-lg h-60">
                <Canvas>
                  <ambientLight intensity={3.1415} />
                  <directionalLight position={[10, 10, 5]} />
                  <Center>
                    <Suspense fallback={<CanvasLoader />}>
                      <group scale={2.1} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                        <ProjectDemo texture={currentProject.texture} />
                      </group>
                    </Suspense>
                  </Center>
                  <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                </Canvas>
              </div>
            </div>

            <div className="flex justify-between items-center mt-7">
              {["previous", "next"].map((dir) => (
                <button
                  key={dir}
                  className={`w-10 h-10 p-3 rounded-full ${ isDark ? 'arrow-gradient' : 'gradient-light'} dark:text-white text-gray-900 transition-all ${
                    ProjectCount === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-95"
                  }`}
                  onClick={() => handleNavigation(dir as "previous" | "next")}
                  disabled={ProjectCount === 1}
                >
                  {/* <img src={`  /assets/${dir === "previous" ? "left-arrow.png" : "right-arrow.png"}`} alt={`${dir} arrow`} className="w-4 h-4" /> */}
                  <img src={`/assets/${dir === "previous" ? `left-arrow${!isDark ? "-dark" : ""}.png` : `right-arrow${!isDark ? "-dark" : ""}.png` }`} alt={`${dir} arrow`}
  className="w-4 h-4"
/>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
