import {useEffect} from "react"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import './App.css'

function App() {

  useEffect(() => {
      // Scroll down 240px
      window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);

  return (
    <>
    <Navbar/>
    <Intro/>
    <Portfolio/>
    <AboutMe/>
    <Contact/>
    </>
  )
}

export default App
