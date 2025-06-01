import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { titles } from "../Constants";



export default function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3500); // 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h2
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 1.5 }}
      className="text-white-800 font-medium lg:text-[22px] sm:text-[18px] md:text-[20px] xs:text-[18px] text-[14px] lg:leading-[40px]"
    >
      {titles[index]}
    </motion.h2>
  );
}
