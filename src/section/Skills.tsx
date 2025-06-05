import { skill_set } from "../Constants"

const Skills = () => {
  const filter_skill_obj =skill_set.find((project => project["Frontend Development"]) );
  const filter_skill =  filter_skill_obj ? filter_skill_obj["Frontend Development"] : [];
  console.log(filter_skill);


  return (
    <section className="c-space my-20">
         <div className="flex flex-row justify-between ">
    <p className=" text-gray_gradient sm:text-4xl text-3xl font-semibold"> Skill Summary</p>
    </div>
    <div className="flex  flex-col items-center justify-center text-white text-center">
      <h1 className="mt-12 text-white font-bold text-lg sm:text-2xl md:text-4xl  ">
        Building responsive websites, APIs, databases,  and exploring  data science and machine learning.
      </h1>
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-white mt-10 gap-5 w-[80%] ">
      
      {filter_skill?.map(( skill)=> (
        
      <div className="flex items-center gap-3 px-4 py-2   rounded-xl text-white text-sm font-medium " style={{ backgroundColor: skill.color  }}> 
      <img src={skill.icon} className="md:w-10 md:h-10 w-5 h-5  " />
      <div>{skill.name} </div> 
      </div>
      )
           
      )}

     
   
    </div>

  
    <div className="flex items-center justify-center text-white mt-10">FrontEnd  </div>
    </div>
    </section>
  )
}

export default Skills