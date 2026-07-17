//import React from 'react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'IBM',
    description: 'Built a self-service REST API (Jakarta EE / Java) that lets account admins configure OIDC and SAML identity providers without SRE involvement — eliminating a manual onboarding bottleneck for IBM\'s cloud platform. Designed async job model, drift-detection reconciliation loop, and lifecycle state machine for the Custom IdP control plane.',
    date: 'May 2026 – August 2026',
  },
  {
    title: 'Head of Engineering',
    company: 'Nebula Labs',
    description: 'Built and ran the Maintainer Team responsible for code review standards across all Nebula projects. Ran design-tradeoffs workshops for 20+ engineers. Oversaw UTDTrends and other active projects.',
    date: 'May 2025 – Present',
  },
  {
    title: 'ACM Education Officer',
    company: 'ACM',
    description: 'Assumed a managerial role at ACM\'s Mentorship Program. Developed solutions for scaling the Mentor Program to the biggest it\'s ever been.',
    date: 'January 2025 – Present',
  },
  {
    title: 'Software Engineer',
    company: 'Nebula Labs',
    description: 'Contributed to UTDTrends — a professor and course analytics platform used by UTD students. Focused on building responsive UI components.',
    date: 'August 2024 – May 2025',
  },
  {
    title: 'Mobile Developer',
    company: 'Coppell ISD',
    description: 'Worked on developing web applications for the district.',
    date: 'August 2022 – May 2023',
  },
];

function Experience() {
    return (
        <div className="backdrop-blur-sm border border-[var(--border)] rounded-xl mb-16">
      <div className="experience-timeline relative">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item flex items-start mb-8">
            <div className="experience-node w-4 h-4 bg-[var(--text)]/40 rounded-full"></div>
            <div className="experience-content ml-8">
              <h3 className="experience-title text-xl font-[Anzo2]">{experience.title}</h3>
              <h4 className="experience-company text-lg font-[Anzo1]">{experience.company}</h4>
              <p className="experience-date text-sm text-[var(--text-muted)]">{experience.date}</p>
              <p className="experience-description text-base font-[Anzo3]">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="experience-line absolute left-2 top-0 bottom-0 w-1 bg-[var(--text)]/5"></div>
    </div>
    );
  }
  
  export default Experience;