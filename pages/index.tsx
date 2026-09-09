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
import SceneBackground from '../components/three/SceneBackgroundClient'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Saif Portfolio</title>
        <meta name="description" content="Interactive 3D portfolio of Saif Ul Haq — Software Engineer & Cloud Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <SceneBackground />

      <div
        id="scroll-root"
        className="text-white h-[100dvh] snap-none md:snap-y md:snap-proximity lg:snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/80 relative"
      >
        <Header />

        <section id="hero" className='md:snap-start relative'>
          <Hero />
        </section>

        <section id="about" className='md:snap-center relative'>
          <About />
        </section>

        <section id="education" className='md:snap-center relative'>
          <Education />
        </section>

        <section id="experience" className='md:snap-center relative'>
          <Experience />
        </section>

        <section id="skills" className='md:snap-start relative'>
          <Skills />
        </section>

        <section id="certifications" className='md:snap-center relative'>
          <Certification />
        </section>

        <section id='projects' className='md:snap-center relative'>
          <Projects />
        </section>
      </div>
    </>
  )
}

export default Home
