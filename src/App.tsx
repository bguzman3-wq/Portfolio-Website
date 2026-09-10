import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Resume from "./components/Resume";


export default function App() {
  return(
        <>
            <Hero/>
            <About/>
            <Projects/>
            <Resume/>
            <Skills/>
            <Contacts/>
        </>
    );
}