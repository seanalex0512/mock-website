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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Features />
    <Skills />
    <Services />
    <Socials />
    <Form />
    <Footer />
  </StrictMode>,
)
