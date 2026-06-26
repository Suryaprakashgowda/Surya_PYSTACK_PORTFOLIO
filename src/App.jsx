import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer' 

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

import "./styles/global.css"

const App = () => {
  return (
    <div className="app-container">
        <Navbar />

        <main className="main-content">
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="education">
                <Education />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default App