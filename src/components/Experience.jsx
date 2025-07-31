//import React from 'react';

const experiences = [
  {
    title: 'Head of Engineering',
    company: 'Nebula Labs',
    description: 'Fostered the engineers for all Nebula Labs projects. Overseeing all engineering tasks and development.',
    date: 'May 2025 - Present',
  },
  {
    title: 'ACM Education Officer',
    company: 'ACM',
    description: 'Assumed an managerial role at ACM\'s Mentorship Program. Developed solutions for scaling the Mentor Program to the biggest its ever been.',
    date: 'January 2025 - Present',
  },
  {
    title: 'Software Engineer',
    company: 'Nebula Labs',
    description: 'Focused on building responsive UI components.',
    date: 'August 2024 - May 2025',
  },
  {
    title: 'Mobile Developer',
    company: 'Coppell ISD',
    description: 'Worked on developing web applications.',
    date: 'August 2022 - May 2023',
  },

  // Add more experiences as needed
];

function Experience() {
    return (
        <div className="backdrop-blur-sm border border-white/10 rounded-xl mb-16">
      <div className="experience-timeline relative">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item flex items-start mb-8">
            <div className="experience-node w-4 h-4 bg-white/40 rounded-full"></div>
            <div className="experience-content ml-8">
              <h3 className="experience-title text-xl font-[Anzo2]">{experience.title}</h3>
              <h4 className="experience-company text-lg font-[Anzo1]">{experience.company}</h4>
              <p className="experience-date text-sm text-gray-500">{experience.date}</p>
              <p className="experience-description text-base font-[Anzo3]">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="experience-line absolute left-2 top-0 bottom-0 w-1 bg-white/5"></div>
    </div>
    );
  }
  
  export default Experience;