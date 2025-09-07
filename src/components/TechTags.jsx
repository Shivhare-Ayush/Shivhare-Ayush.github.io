//import React from 'react';
import { BiLogoGoLang, BiLogoJava, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoTypescript, BiLogoPython, BiLogoNodejs, BiLogoGithub, BiLogoGit, BiLogoFigma } from 'react-icons/bi';
import { GrSwift } from "react-icons/gr";
import Tag from './Tag';
import PropTypes from 'prop-types';

const techStack = [
  { icon: BiLogoGoLang, title: 'Go' },
  { icon: BiLogoJava, title: 'Java' },
  { icon: BiLogoJavascript, title: 'JavaScript' },
  { icon: BiLogoTailwindCss, title: 'Tailwind CSS' },
  { icon: BiLogoReact, title: 'React' },
  { icon: BiLogoTypescript, title: 'TypeScript' },
  { icon: BiLogoPython, title: 'Python' },
  { icon: BiLogoNodejs, title: 'Node.js' },
  { icon: BiLogoGithub, title: 'GitHub' },
  { icon: BiLogoGit, title: 'Git' },
  { icon: BiLogoFigma, title: 'Figma' },
  { icon: GrSwift, title: 'Swift' },
  // Add more tech stack items as needed
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