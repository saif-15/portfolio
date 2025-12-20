import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certification from '../components/Certification'
import Education from '../components/Education'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-scroll'>
      <Head>
        <title>Saif Portfolio</title>
      </Head>

      { /* Header */}
      <Header />

      { /* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      { /* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      { /* Education */}
      <section id="education" className='snap-center'>
        <Education />
      </section>

      { /* Expereince */}
      <section id="experience" className='snap-center'>
        <Experience/>
      </section>

      { /* Skills */}
      <section id="skills" className='snap-start'>
        <Skills/>
      </section>
      {/* Certifications  */}
      <section id="certifications" className='snap-center'>
        <Certification/>
      </section>
      { /* Projects */}
      <section id='projects' className='snap-center'>
        <Projects/>
      </section>

      { /* Contact Me */}


    </div>
  )
}

export default Home
