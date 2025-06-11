// import Globe from "react-globe.gl"
// import Button from "../Components/Button"
// import { useState } from "react";

import { useState } from "react";
import Button from "../Components/Button"

// const About = () => {
//    const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText('tprakrity@gmail.com');
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };
//   return (
//     <section className="c-space my-20" id="about">
//       <div className=" grid xl:grid-cols-3  xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-fit ">
//         <div className=" col-span-1 xl:row-span-3"> 
//           <div className="grid-container">
//             <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-full object-contain"/>
//             <div>
//               <p className="grid-headtext"> Hello, I'm Prakriti </p>
//               <p className="grid-subtext"> With hands-off knowledge and skills  in Computer and IT </p>
//             </div>
//           </div> </div>

//         <div className=" col-span-1 xl:row-span-3"> 
//           <div className="grid-container">
//             <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
//             <div>
//               <p className="grid-headtext">Tech Stack </p>
//               <p className="grid-subtext"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
//             </div>
//           </div> </div>

//          <div className=" col-span-1 xl:row-span-4"> 
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex flex-col justify-center items-center">
//                <Globe  height={256} width={256}
//                 backgroundColor="rgba(0,0,0,0)"
//                 showAtmosphere
//                 showGraticules
//                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
//                />
//               <p className="grid-headtext">Tech Stack </p>
//               <p className="grid-subtext"> I have completed my bla bla lorem ipsum lorem ipsum  </p>
//             </div>
//              <div>
//               <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
//               <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
//               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
//               </div>
//           </div> </div>

//                     <div className="xl:col-span-2 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">My Passion for Coding</p>
//               <p className="grid-subtext">
//                 I love solving problems and building things through code. Programming isn&apos;t just my
//                 profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />

//             <div className="space-y-2">
//               <p className="grid-subtext text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopy}>
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">tprakrity@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default About


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
    <section className=" c-space my-20 rounded-xl border " id="about" >
       <div className="flex flex-col md:flex-row items-center sm:max-w-5xl gap-10 justify-between p-8  mx-auto">
      {/* Image */}
        <img
        src="/public/assets/pppicture1.png" // Replace with your actual image path
        alt="Profile"
        className="rounded-xl  w-75 h-auto shadow-lg "
      />

      {/* Text Content */}
      <div className="  md:text-left">
        {/* Bold intro */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300  text-center sm:text-left \">
          About Me
        </h1>

   
        {/* Paragraphs */}
    
        <p className="text-gray-500 leading-relaxed mb-4 text-justify ">
          I graduated in 2025 from Kantipur Engineering College with a degree in Electronics, Communication, and Information Engineering. Though my background is in electronics, I found my passion in web development,  data science, machine learning, web development, robotics, and the Internet of Things (IoT).
        </p>
        <p className="text-gray-500 leading-relaxed mb-4 text-justify">
          I’ve built my skills in HTML, CSS, JavaScript, React, Python, SQL, and Git. I also explore data science, machine learning, and IoT as a curious learner, and have worked with tools like Scikit-learn, TensorFlow, Pandas, NumPy, and Matplotlib. I’ve topped my second semester, won software competitions (like HEx 2023), robo soccer challenges, and published a research paper in my final year.
        </p>
        <p className="text-gray-500 leading-relaxed text-justify mb-4">
        Outside of coding, I love being involved in community clubs, learning new tools, and collaborating on exciting ideas. 
       I served as a general member of the Rotaract Club of Bagmati for 3 years and was also part of my college’s Electronics Club. I enjoy learning new tools, collaborating on exciting ideas, and staying active through dancing and indoor gardening.
        </p>
        <div className="flex flex-row gap-5 justify-start items-start"> 
          <div onClick={handleCopy} className=" flex flex-row gap-2 items-center cursor-pointer p-3 rounded-md bg-[#321A7D]  border-2 border-[#915eff]/5 transition-all active:scale-95 text-white "> <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} className="w-5 h-5" alt="copy" /><span>talktoprakrity@gmail.com </span></div>
          <div className=" cursor-pointer p-3 rounded-md bg-[#321A7D]  border-2 border-[#915eff]/5 transition-all active:scale-95 text-white " ><a href="#contact">Contact Me</a></div>
          {/* <Button  isBeam name="Contact me"/> */}
        </div>
      </div>
    </div>
    </section>
  )
}

export default About