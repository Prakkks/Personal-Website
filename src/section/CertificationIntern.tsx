import { useState } from "react";
import { motion } from "framer-motion";
import { internships, certifications } from "../Constants";

const CertificationIntern = () => {
  const [change, setchange] = useState(1);

  return (
    <section className="c-space my-20" id="internship">
      <div className="flex sm:flex-row flex-col">
        {/* Sidebar Tabs */}
        <div className="flex flex-col dark:text-white text-black  rounded-md md:w-1/6 sm:w-1/5 w-1/3">
          <div
            className={`p-3 cursor-pointer ${
              change === 1
                ? "dark:bg-primary-dark-purple bg-primary-purple text-white font-bold"
                : "border-t-2 border-t-white-500"
            }`}
            onClick={() => setchange(1)}
          >
            Internships
          </div>
          <div
            className={`p-3 cursor-pointer ${
              change === 2
                ? "dark:bg-primary-dark-purple bg-primary-purple text-white font-bold"
                : "border-b-2 border-b-white-500"
            }`}
            onClick={() => setchange(2)}
          >
            Certification
          </div>
        </div>

        {/* Timeline View for Internships */}
        {change === 1 && (
          <div className="dark:text-white-800 text-black-300 p-5 w-full">
            <div className="relative border-l-1 border-white-500 ml-10 pl-10 space-y-8 ">
              {internships.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  // className="relative bg-black-500 sm:bg-primary-dark-purple  p-4 rounded-lg shadow-lg"
                  className="relative border p-3 border-[#8572ae]  bg-[rgba(102,77,156,0.1)] backdrop-blur-md rounded-lg  "
                >
                  <h3 className=" text-md sm:text-xl font-bold">{item.title}</h3>
                  <span className=" text-xs sm:text-sm dark:text-gray-300 text-gray-600">{item.period}</span>
                  <p className="text-xs sm:text-sm">{item.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        
        {change === 2 && (
  <div className="text-white-800 p-5 w-full  sm:pl-10 ">
    <div className="grid  grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 ">
     {certifications.map((cert, index) => (
  <motion.div
    key={cert.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    // className=" bg-black-500 sm:bg-primary-dark-purple p-2 pl-4 sm:p-4 rounded-lg shadow-lg"
    className="relative border border-[#5d3f9c] shadow-md bg-[rgba(145,94,255,0.1)] backdrop-blur-md  p-3 rounded-lg   "

  >
    <div className="flex items-center justify-between">
      <h3 className="text-sm sm:text-[17px] font-bold dark:text-white text-black-500">{cert.title}</h3>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white text-black text-sm sm:text-base ml-2 hover:text-primary-light-purple"
          title="View Certificate"
        >
          🔗
        </a>
      )}
    </div>
    <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-500">Issued by {cert.provider}</p>
    <span className="text-[10px] sm:text-xs dark:text-gray-400 text-gray-600">{cert.date}</span>
  </motion.div>
))}
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default CertificationIntern;
