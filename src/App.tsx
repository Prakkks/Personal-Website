import About from "./section/About";
import Contact from "./section/Contact";
import Education from "./section/Education";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Project from "./section/Project";
import Skills from "./section/Skills";



function App() {
  return (
    <main className="max-w-7xl mx-auto  ">
     <Navbar />
     <Hero />
     <About />
     <Project />
     <Education />
     <Skills />
     <Contact />
     <Footer />
    </main>
   
    
  );

}

export default App;

