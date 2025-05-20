import './App.css';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import React, { useRef, useState, useEffect, useCallback } from 'react';

function App() {

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const projectSectionRef = useRef(null);

  const sectionsRef = [homeSectionRef, aboutSectionRef, projectSectionRef];

   const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = useCallback((index) => {
    if (index >= 0 && index < sectionsRef.length) {
      const targetRef = sectionsRef[index]; 

      
      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: 'smooth', 
          block: 'start',   
        });

        setCurrentSectionIndex(index); 
      }
    }
  }, [sectionsRef]); 

  
const handleGlobalClick = useCallback((event) => {
      if (event.target.closest('a, button, input, textarea, select')) {
          return;
      }

      const { clientY } = event;
      const screenHeight = window.innerHeight;

      const lowerThirdThreshold = screenHeight * 2 / 3;

      if (clientY > lowerThirdThreshold) {
          const nextIndex = (currentSectionIndex + 1) % sectionsRef.length; 

          scrollToSection(nextIndex); 
      }
  }, [currentSectionIndex, sectionsRef, scrollToSection]); 

     useEffect(() => {
    

     
      document.addEventListener('click', handleGlobalClick, true); 

     
      return () => {
        document.removeEventListener('click', handleGlobalClick, true); 
      };

     }, [handleGlobalClick]); 

  return (
    <div className="App">

   <Navigation
        scrollToHome={() => scrollToSection(0)} // Home 섹션 인덱스 0
        scrollToAbout={() => scrollToSection(1)} // About 섹션 인덱스 1
        scrollToProject={() => scrollToSection(2)} // Projects 섹션 인덱스 2
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
