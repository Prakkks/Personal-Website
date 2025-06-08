import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skill_set } from "../Constants";

const Skillrotating = () => {
  return (
    <div className="space-y-12 p-6 max-w-6xl mx-auto">
      {skill_set.map((category, catIdx) => {
        const [title, skills] = Object.entries(category)[0];

        return (
          <div key={catIdx}>
            <h2 className="text-2xl font-semibold mb-4 capitalize text-center appear-block underline-offset-1">
              {title}
            </h2>

            <div className="w-full flex justify-center">
              <SkillGroup skills={skills} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SkillGroup = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // animate each time it comes in view
    margin: "-100px 0px", // triggers a bit earlier
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center"
    >
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          className="relative group flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.25,
            ease: "easeOut",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
            style={{ backgroundColor: skill.color }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-20 z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
            <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg relative">
              {skill.name}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 
                  border-l-4 border-r-4 border-t-4 
                  border-l-transparent border-r-transparent border-t-black">
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skillrotating;
