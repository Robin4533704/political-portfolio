import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Essays from "./components/Essays";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates"

function App() {
  

  return (
    <>
     <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
    </Routes>
     
     
    </>
  )
}

export default App
