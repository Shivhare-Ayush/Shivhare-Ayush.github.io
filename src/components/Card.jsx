import { useState } from 'react'; //React,
import PropTypes from 'prop-types';
import { BsArrowUpRight, BsArrowDownLeft, BsBoxArrowUpRight } from 'react-icons/bs';
import TechTags from './TechTags';

function Card({ title, description, children, image, link, techNames }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className='bg-transparent backdrop-blur-sm border border-white/10 rounded-xl p-7 m-2 hover:border-white/50 transition-all duration-500 ease-in-out relative'
      onClick={toggleExpand}
      style={{
        cursor: 'pointer',
        maxHeight: isExpanded ? '50rem' : '20rem',
        overflow: 'hidden',
      }}
    >
      <div className='absolute top-2 right-2 text-white lg:text-3xl hover:text-purple-400 transition-all duration-300 ease-in-out'>
        <BsArrowUpRight
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-0' : 'opacity-100'}`}/>
        <BsArrowDownLeft
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}/>
      </div>
      <h3 className='text-xl font-bold mb-2 font-[Anzo1]'>{title}</h3>
      {isExpanded ? (
        <a href={link} target='_blank' rel='noopener noreferrer' className='relative'>
          <div className='relative group'>
            <img src={image} alt='' className='rounded-xl' />
            <BsBoxArrowUpRight className='absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out' />
          </div>
        </a>
      ) : (
        <img src={image} alt='placeholder' className='rounded-xl' />
      )}
      <TechTags techNames={techNames} />
      <p className='text-slate-100 text-sm lg:text-base md:text-md m-4 font-[Anzo3]'>{description}</p>
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
  image: PropTypes.string,
  link: PropTypes.string,
  techNames: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
