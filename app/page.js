'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import useDarkMode from "@/hooks/useDarkMode";

// Page composition only. Section order here is the order on screen and must match navLinks in data/content.js.
// isDarkMode is passed only to components that swap PNG images, since CSS dark: classes cannot change an image source.
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <>
    <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(prev => !prev)}/>
    <Header/>
    <About isDarkMode={isDarkMode}/>
    <Experience isDarkMode={isDarkMode}/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
