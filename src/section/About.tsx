import { useState } from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('talktoprakrity@gmail.com');
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