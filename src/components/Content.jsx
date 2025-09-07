//import React from 'react'
import Card from './Card'
import trendsPreview from '../assets/trendsPreview.png'
import portfolio from '../assets/Portfolio.png'
import api from '../assets/API_Workshop.png'
import TechTags from './TechTags'
import Experience from './Experience.jsx'

const Content = () => {
  return (
    <main className="relative flex-1 p-6">
      <section id="about" className="mb-64 font-[Anzo3]" aria-labelledby="about-heading"> 
        <h2 id="about-heading" className="text-2xl font-semibold mb-4 font-[Anzo1]">About</h2>
        <div className="relative rounded-xl border border-white/10"> 
          <div className="absolute inset-0 bg-transparent backdrop-blur-0 blur-sm rounded-xl pointer-events-none"></div>
          <div className="relative p-4">
            <p>
              I started software development in high school where I built simple programs for competitions and classes. Around the time I was a senior I participated in my first hackathon and was introduced to a world of developers and learned the joy of collaborative programming. Fast forward to today, I’m developing web services used by thousands of students, and pursuing a computer science major at The University of Texas at Dallas. I’ve had the opportunity to work on a project at Nebula Labs, which provides tools to Students like data visualization, indexing, comparing, and is web-hosted.
              <br />
              <br />
              Aside from clubs, I have more projects in development for Nebula Labs and ACM. In my free time Ive built a game combining Lua and Roblox engine.
              <br />
              <br />
              Outside of computer science, I practice Taekwondo, play Badminton, and am always reading up on topics that interest me.
            </p>
          </div>
        </div>
      </section>
      <section id="experience" className="mb-64" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-2xl font-semibold mb-4">Experience</h2>
        <Experience/>

        <h3 className="text-2xl font-semibold mb-4" id="techstack-heading">Tech Stack</h3>
        <TechTags/>
      </section>
      <section id="projects" className="mb-16" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-2xl font-semibold mb-4">Projects</h2> 
        <div className="space-y-4">
          <Card 
            title="Trends" 
            techNames={["Go", "React","JavaScript", "Tailwind CSS","Github", "Figma",]} 
            description="I work on this website with a team at Nebula Labs. The website has helped 20,000 unique users find their classes for future semesters. We maintain and update this website on Github, and its built on React and Tailwind frontend and our API team uses GO for the backend." 
            image={trendsPreview} 
            imageAlt="Screenshot of Trends website" // <-- Add alt text
            link="https://trends.utdnebula.com" 
          />
          <Card 
            title="API Workshop" 
            techNames={["React", "JavaScript", "Node.js", "Tailwind CSS", "Github", ]} 
            description="Boiler Plate app I made as a resource. This was used to teach UTD Students about APIs in the ACM Mentor Program API Workshop for the Spring 2025 Series." 
            image={api} 
            imageAlt="Screenshot of API Workshop app" // <-- Add alt text
            link="https://github.com/Shivhare-Ayush/acm-education-api-demo" 
          />
          <Card 
            title="Portfolio" 
            techNames={["React", "JavaScript", "Node.js", "Tailwind CSS", "Github", ]} 
            description="A test. This website was a test. Can I apply the technologies which I have been exposed to? How far can I take this and where will it take me?" 
            image={portfolio} 
            imageAlt="Screenshot of Portfolio website" // <-- Add alt text
            link="https://shivhare-ayush.github.io" 
          />
        </div>
      </section>
    </main>
  )
}

export default Content;
