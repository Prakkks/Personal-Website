// note that dark mode is light for us okay ?


import About from "./section/About";
import CertificationIntern from "./section/CertificationIntern";
import Contact from "./section/Contact";
import Education from "./section/Education";
import Footer from "./section/Footer";
import HeroSection from "./section/Hero-Section";
import Navbar from "./section/Navbar";
import Project from "./section/Project";
import Skills from "./section/Skills";
import { useTheme } from "./assets/themeprovider";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleRightClick = (e:any) => e.preventDefault();
    const handleCopy = (e:any) => {
      e.preventDefault();
      alert("Copying is disabled.");
    };
    const handleKeyDown = (e:any) => {
      if (
        (e.ctrlKey && (e.key === "c" || e.key === "u")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        alert("This shortcut is disabled.");
      }
    };

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


 const { isDark, setIsDark } = useTheme();

  return (
    <main className="select-none dark:bg-black" id="home">
      {/* <div className="dark:bg-[url('/assets/herobg.png')] bg-[url('/assets/herobg-light.jpg')] bg-cover bg-center transition duration-75 max-w-full"> */}
     <div className="relative w-full h-full">
        <div className={`absolute inset-0 bg-[url('/assets/herobg-light.jpg')] bg-cover bg-center transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`absolute inset-0 bg-[url('/assets/herobg.png')] bg-cover bg-center transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <About />
        <Skills />
      </div>

       {/* <div className="relative w-full h-full"> */}
      <div className="dark:bg-[url('/assets/herobg-flip.png')] bg-[url('/assets/herobg-light-flip.jpg')] bg-cover bg-center transition duration-75 max-w-full">

       <div className="max-w-7xl mx-auto">
          <Education />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <CertificationIntern />
        <Project />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
