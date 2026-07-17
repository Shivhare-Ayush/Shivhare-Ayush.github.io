//import React from 'react'
//FUTURE: basis-1/4 hover:basis-1/2
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import ThemeToggle from './ThemeToggle';
import useTheme from '../theme/useTheme';
import ayushPhoto from '../assets/Ayush.jpg';

const SideBar = () => {
  const { mode } = useTheme();
  const nameGradient = mode === 'light'
    ? 'bg-gradient-to-r from-[#55A8F7] via-[#FFEDD5] to-[#FF6B6B]'
    : 'bg-gradient-to-r from-[#4B0082] via-[#FF1493] to-[#FE865B]';

  return (

    <div className="bg-transparent backdrop-blur-sm border border-[var(--border)] rounded w-1/3 h-max p-6 text-[var(--text)] hidden lg:flex lg:sticky top-24 flex-col items-start transition-colors duration-300">
      <div className="flex items-center justify-between mb-8 w-full">
        <span className="before:block before:absolute before:-inset-2 before:-skew-y-0 relative inline-block">
          <span className={`font-[Anzo2] relative text-[#0c0a09] bg-clip-text text-6xl text-opacity-10 ${nameGradient} block pb-2`}>
            Ayush
          </span>
          <span className={`font-[Anzo2] relative text-[#0c0a09] bg-clip-text text-6xl text-opacity-10 ${nameGradient} block`}>
            Shivhare
          </span>
        </span>
        <img
          src={ayushPhoto}
          alt="Ayush Shivhare"
          className="w-40 h-40 rounded-full object-cover object-top border-2 border-[var(--border)] flex-shrink-0"
        />
      </div>
      
      <p className="font-[anzo1] mb-6">CS @ UTD · Software Developer Intern @ IBM</p>
      <nav className="flex flex-col gap-4 ">
        <a
          href="#about"
          onClick={e => {
            e.preventDefault();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition-all duration-200 ease-in-out"
        >
          About
        </a>
        <a
          href="#experience"
          onClick={e => {
            e.preventDefault();
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition-all duration-200 ease-in-out"
        >
          Experience
        </a>
        <a
          href="#projects"
          onClick={e => {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition-all duration-200 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#writing"
          onClick={e => {
            e.preventDefault();
            document.getElementById('writing').scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition-all duration-200 ease-in-out"
        >
          Writing
        </a>
      </nav>
      <div className="flex gap-4 mt-8">
        <a href="https://www.linkedin.com/in/ayushshiv/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-4xl hover:text-purple-400 hover:translate-y-2 transition duration-200" />
        </a>
        <a href="https://github.com/Shivhare-Ayush" target="_blank" rel="noreferrer">
          <FaGithubSquare className="text-4xl hover:text-purple-400 hover:translate-y-2 transition duration-200" />
        </a>
        <a href="https://medium.com/@ayush-shivhare" target="_blank" rel="noreferrer">
          <SiMedium className="text-4xl hover:text-purple-400 hover:translate-y-2 transition duration-200" />
        </a>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default SideBar
