import { useState } from 'react'; //React,
import PropTypes from 'prop-types';
import { BsChevronDown, BsBoxArrowUpRight } from 'react-icons/bs';
import TechTags from './TechTags';
function Card({ title, description, children, image, link, techNames, imageAlt, imagePosition }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className='bg-transparent backdrop-blur-sm border border-[var(--border)] rounded-xl p-7 m-2 hover:border-[var(--text)]/50 transition-all duration-500 ease-in-out relative'
      onClick={toggleExpand}
      tabIndex={0} // Make focusable
      role="button" // Announce as button
      aria-expanded={isExpanded} // Accessibility state
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') toggleExpand();
      }}
      style={{
        cursor: 'pointer',
        maxHeight: isExpanded ? '50rem' : '20rem',
        overflow: 'hidden',
      }}
    >
        <div className='absolute top-7 right-7 text-[var(--text)] text-lg hover:text-purple-400 transition-all duration-300 ease-in-out'>
          <BsChevronDown
            className={`transition-transform duration-500 ease-in-out ${isExpanded ? '-rotate-180' : 'rotate-0'}`} />
        </div>
        <h3 className='text-xl font-bold mb-2 font-[Anzo1]'>{title}</h3>
        {image && (
          <div className='w-full h-48 rounded-xl overflow-hidden mb-2'>
            <img src={image} alt={imageAlt} className={`w-full h-full object-cover object-${imagePosition || 'center'}`} />
          </div>
        )}
        <TechTags techNames={techNames} />
        <p className='text-[var(--text)] text-sm lg:text-base md:text-md m-4 font-[Anzo3]'>{description}</p>
        {children}
        {isExpanded && (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-transparent text-[var(--text)] underline px-3 inline-flex items-center gap-1 hover:text-purple-400 transition-all duration-300 ease-in-out'
            aria-label={`Visit ${title} project`}
          >
            Visit Project
            <BsBoxArrowUpRight />
          </a>
        )}
      </div>
    
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePosition: PropTypes.string,
  link: PropTypes.string,
  techNames: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
