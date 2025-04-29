import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Hero from "./components/sections/Hero";
import Features from './components/sections/Features';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Socials from './components/sections/Socials';
import Form from './components/sections/Form';
import Footer from './components/sections/Footer';
import phone from './assets/phone.png'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Features />
    {/* Diamond bridge between Features and Skills */}
  <div className="skills-diamond-bridge">
    <div className="skills-diamond-shape"></div>
    <img src={phone} alt="Phone" className="skills-diamond-icon" />
  </div>
    <Skills />
    <Services />
    <Socials />
    <Form />
    <Footer />
  </StrictMode>,
)
