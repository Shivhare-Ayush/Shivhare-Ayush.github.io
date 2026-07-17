//import React from 'react'
import Card from './Card'
import newsify from '../assets/newsify.jpg'
import trendsPreview from '../assets/trendsPreview.png'
import portfolio from '../assets/Portfolio.png'
import api from '../assets/API_Workshop.png'
import TechTags from './TechTags'
import Experience from './Experience.jsx'
import Writing from './Writing.jsx'

const Content = () => {
  return (
    <main className="relative flex-1 p-6">
      <section id="about" className="mb-64 font-[Anzo3]" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-2xl font-semibold mb-4 font-[Anzo1]">About</h2>
        <div className="relative rounded-xl border border-[var(--border)]">
          <div className="absolute inset-0 bg-transparent backdrop-blur-0 blur-sm rounded-xl pointer-events-none"></div>
          <div className="relative p-4">
            <p>
              Ever since high school I&apos;ve been drawn to finding the unnecessary constraint in a system and removing it. That instinct has taken me through competitive programming, hackathons, open-source org leadership, and now enterprise platform engineering at IBM. I build things at every scale — from a self-hosted home server to a production identity API serving IBM cloud customers. Currently a CS student at UTD and Software Developer Intern at IBM ATX.
              <br />
              <br />
              Outside of tech: Taekwondo, Badminton, and reading about anything that teaches me how things actually work.
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
            title="Newsify"
            techNames={["Python", "FastAPI", "React", "TypeScript", "Docker", "AWS"]}
            description="Media intelligence platform that ingests YouTube transcripts, extracts structured claims with Gemini, clusters narratives using UMAP + HDBSCAN, and surfaces risk-scored misinformation signals through a retro-newspaper-styled dashboard."
            image={newsify}
            imageAlt="Newsify project screenshot"
            link="https://newsifyutd.vercel.app"
          />
          <Card
            title="Roguelike"
            techNames={["Lua", "Roblox"]}
            description="Slay-the-Spire–style roguelike built in Lua on Roblox. Features a seeded procedural map generator (LCG-based path-walk with crossing-detection), persistent data stores, a full card/combat system, shop, events, rest sites, and boss ascension. Built and iterated using a multi-AI agent pipeline (Claude + Gemini) with cost-based provider routing."
            imageAlt="Roguelike game screenshot"
            link="https://github.com/Shivhare-Ayush/SoulForge"
          />
          <Card
            title="Trends"
            techNames={["Go", "React","JavaScript", "Tailwind CSS","Github", "Figma"]}
            description="I work on this website with a team at Nebula Labs. The website has helped 20,000 unique users find their classes for future semesters. We maintain and update this website on Github, and its built on React and Tailwind frontend and our API team uses GO for the backend."
            image={trendsPreview}
            imageAlt="Screenshot of Trends website"
            link="https://trends.utdnebula.com"
          />
          <Card
            title="API Workshop"
            techNames={["React", "JavaScript", "Node.js", "Tailwind CSS", "Github"]}
            description="Boiler plate app made as a teaching resource. Used to teach UTD students about APIs in the ACM Mentor Program API Workshop for the Spring 2025 Series."
            image={api}
            imageAlt="Screenshot of API Workshop app"
            link="https://github.com/Shivhare-Ayush/acm-education-api-demo"
          />
          <Card
            title="Portfolio"
            techNames={["React", "JavaScript", "Node.js", "Tailwind CSS", "Github"]}
            description="A test. This website was a test. Can I apply the technologies which I have been exposed to? How far can I take this and where will it take me?"
            image={portfolio}
            imageAlt="Screenshot of Portfolio website"
            link="https://shivhare-ayush.github.io"
          />
        </div>
      </section>
      <section id="writing" className="mb-16" aria-labelledby="writing-heading">
        <h2 id="writing-heading" className="text-2xl font-semibold mb-4">Writing</h2>
        <Writing />
      </section>
    </main>
  )
}

export default Content;
