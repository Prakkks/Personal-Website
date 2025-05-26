import Globe from "react-globe.gl"
import Button from "../Components/Button"
import { useState } from "react";

const About = () => {
   const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('tprakrity@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20">
      <div className=" grid xl:grid-cols-3  xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-fit ">
        <div className=" col-span-1 xl:row-span-3"> 
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-full object-contain"/>
            <div>
              <p className="grid-headtext"> Hello, I'm Prakriti </p>
              <p className="grid-subtext"> With hands-off knowledge and skills  in Computer and IT </p>
            </div>
          </div> </div>

        <div className=" col-span-1 xl:row-span-3"> 
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
            <div>
              <p className="grid-headtext">Tech Stack </p>
              <p className="grid-subtext"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
            </div>
          </div> </div>

         <div className=" col-span-1 xl:row-span-4"> 
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex flex-col justify-center items-center">
               <Globe  height={256} width={256}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
               globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
               />
              <p className="grid-headtext">Tech Stack </p>
              <p className="grid-subtext"> I have completed my bla bla lorem ipsum lorem ipsum  </p>
            </div>
             <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </div>
          </div> </div>

                    <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">tprakrity@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About