
import About from "./components/About";
import  Community from "./components/Community";
import  Contact from "./components/Contact";
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
        <Projects/>
        <Experience/>
        <Community/>
        <Contact/>
        <Footer />
        </main>
     
    </div>
  );
}

export default App;
