import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import AboutMe from "./components/AboutMe"
import {ContactUs} from "./components/ContactForm"
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Intro/>
    <Portfolio/>
    <AboutMe/>
    <ContactUs/>
    </>
  )
}

export default App
