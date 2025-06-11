import Marquee from "react-fast-marquee";
import { skill_set } from "../Constants";

const Skills = () => {
  

  return (
 <section className="c-space my-20 relative" id="skill">


  {/* <div className="w-full md:w-1/2 p-4 text-white">
      <div className="flex flex-row justify-between z-10 relative">
    <p className="text-gray_gradient sm:text-4xl text-3xl font-semibold">Skill Summary</p>
  </div>
</div> */}

 <Marquee speed={50} gradient={false}  className="text-gray-300 ">
    {
      skill_set.map((skill, index)=> (
        <div key={index} className="mx-6 font-semibold flex flex-row gap-2 items-center md:text-2xl "> <img src={skill.icon} className="md:w-15 md:h-15 w-10 h-10" /> {skill.name} </div>
      ))
    }

   
  </Marquee>  
</section>

  )
}

export default Skills