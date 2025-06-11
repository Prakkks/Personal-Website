import About from "./section/About";
import CertificationIntern from "./section/CertificationIntern";
import Contact from "./section/Contact";
import Education from "./section/Education";
import Footer from "./section/Footer";
import HeroSection from "./section/Hero-Section";
import Navbar from "./section/Navbar";
import Project from "./section/Project";
import Skills from "./section/Skills";



function App() {
  return (
    
    <main className="  " id="home">
     <div className="bg-[url('/assets/herobg.png')] bg-cover bg-center max-w-full  ">
     <div className="max-w-7xl mx-auto">
     <Navbar />
     <HeroSection />
     </div>
     </div>
     <div className="max-w-7xl mx-auto">
     {/* <Hero /> */}
     <About />
      <Skills />
     </div>
     <div className="bg-[url('/assets/herobg-flip.png')]  bg-cover bg-center max-w-full  ">
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

