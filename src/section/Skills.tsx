
const Skills = () => {
  return (
    <section className="c-space my-20">
         <div className="flex flex-row justify-between ">
    <p className=" text-gray_gradient sm:text-4xl text-3xl font-semibold"> Skill Summary</p>
    </div>
    <div className="flex  flex-col items-center justify-center text-white">
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-white mt-12 gap-5">
      
      <div className="flex justify-center items-center border-1 rounded-2xl pr-2"> 
      <img src="/public/assets/grid1.png" className="w-[100px] h-[100px] " />
      <span >HTML </span> 
      </div>
      <div className="flex justify-center items-center border-1 rounded-2xl "> 
      <img src="/public/assets/grid1.png" className="w-[100px] h-[100px] " />
      <span>CSS </span> 
      </div>
      <div className="flex justify-center items-center border-1 rounded-2xl "> 
      <img src="/public/assets/grid1.png" className="w-[100px] h-[100px] " />
      <span>JavaScript </span> 
      </div>
    </div>

  
    <div className="flex items-center justify-center text-white mt-10">FrontEnd  </div>
    </div>
    </section>
  )
}

export default Skills