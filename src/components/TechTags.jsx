//import React from 'react';
import { BiLogoGoLang, BiLogoJava, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoTypescript, BiLogoPython, BiLogoNodejs, BiLogoGithub, BiLogoGit, BiLogoFigma } from 'react-icons/bi';
import { GrSwift } from "react-icons/gr";
import { SiDocker, SiPostgresql, SiFastapi, SiLinux, SiAmazonwebservices, SiLua, SiRoblox } from 'react-icons/si';
import Tag from './Tag';
import PropTypes from 'prop-types';

const techStack = [
  { icon: BiLogoJava, title: 'Java' },
  { icon: BiLogoPython, title: 'Python' },
  { icon: BiLogoGoLang, title: 'Go' },
  { icon: BiLogoJavascript, title: 'JavaScript' },
  { icon: BiLogoTypescript, title: 'TypeScript' },
  { icon: SiLua, title: 'Lua' },
  { icon: BiLogoReact, title: 'React' },
  { icon: SiFastapi, title: 'FastAPI' },
  { icon: BiLogoNodejs, title: 'Node.js' },
  { icon: BiLogoTailwindCss, title: 'Tailwind CSS' },
  { icon: SiPostgresql, title: 'PostgreSQL' },
  { icon: SiDocker, title: 'Docker' },
  { icon: SiLinux, title: 'Linux' },
  { icon: SiAmazonwebservices, title: 'AWS' },
  { icon: SiRoblox, title: 'Roblox' },
  { icon: BiLogoGithub, title: 'Github' },
  { icon: BiLogoGit, title: 'Git' },
  { icon: BiLogoFigma, title: 'Figma' },
  { icon: GrSwift, title: 'Swift' },
];

function TechTags({ techNames }) {
  if (techNames && techNames.length > 0) {
    return (
      <div className='flex flex-wrap mt-4'>
        {techNames.map((techName, index) => {
          const tech = techStack.find(t => t.title === techName);
          return tech ? <Tag key={index} icon={tech.icon} title={tech.title} /> : null;
        })}
      </div>
    );
  }

  return (
    <div className='flex flex-wrap mt-4'>
      {techStack.map((tech, index) => (
        <Tag key={index} icon={tech.icon} title={tech.title} />
      ))}
    </div>
  );
}
TechTags.propTypes = {
  techNames: PropTypes.arrayOf(PropTypes.string),
};
export default TechTags;