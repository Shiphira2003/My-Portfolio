
import About from "./components/About";
import Certifications from "./components/Certification";
import  Community from "./components/Community";
import  Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import  Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./index.css"
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <main className="flex-grow">
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
        <Experience/>
        <Community/>
        <Certifications />
        <Contact/>
        <Footer />
        </main>
     
    </div>
  );
}

export default App;
