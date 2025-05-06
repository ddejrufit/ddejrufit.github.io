import './App.css';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { useRef } from 'react';
function App() {

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const projectSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    if(ref && ref.current){
      ref.current.scrollIntoView({
        behavior:'smooth',
        block:'start',
      })
    }
  }

  return (
    <div className="App">

    <Navigation
    scrollToHome={() => scrollToSection(homeSectionRef)}
    scrollToAbout={() => scrollToSection(aboutSectionRef)}
    scrollToProject={() => scrollToSection(projectSectionRef)}
    />
    <MainContent 
    homeRef={homeSectionRef}
    aboutRef={aboutSectionRef}
    projectRef={projectSectionRef}
    />
    <Footer />
    </div>
  );
}

export default App;
