import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsChevronDown } from 'react-icons/bs';
import Tag from './Tag';

function ArticleCard({ title, excerpt, date, tags, platforms }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className='bg-transparent backdrop-blur-sm border border-white/10 rounded-xl p-7 m-2 hover:border-white/50 transition-all duration-500 ease-in-out relative'
      onClick={toggleExpand}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') toggleExpand();
      }}
      style={{
        cursor: 'pointer',
        maxHeight: isExpanded ? '50rem' : '20rem',
        overflow: 'hidden',
      }}
    >
      <div className='absolute top-7 right-7 text-white text-lg hover:text-purple-400 transition-all duration-300 ease-in-out'>
        <BsChevronDown
          className={`transition-transform duration-500 ease-in-out ${isExpanded ? '-rotate-180' : 'rotate-0'}`} />
      </div>

      <h3 className='text-xl font-bold mb-1 font-[Anzo1]'>{title}</h3>
      <p className='text-sm text-gray-500 mb-2 font-[Anzo3]'>{date}</p>

      <div className='flex flex-wrap mb-2'>
        {tags.map((tag, i) => (
          <Tag key={i} title={tag} />
        ))}
      </div>

      <p className='text-slate-100 text-sm lg:text-base md:text-md m-4 font-[Anzo3]'>{excerpt}</p>

      {isExpanded && (
        <div className='flex flex-wrap gap-3 mt-4 ml-4'>
          {platforms.map((platform, i) => {
            const PlatformIcon = platform.icon;
            return (
              <a
                key={i}
                href={platform.url}
                target='_blank'
                rel='noopener noreferrer'
                onClick={e => e.stopPropagation()}
                className='flex items-center gap-2 bg-transparent text-gray-100 underline px-3 hover:text-purple-400 transition-all duration-300 ease-in-out'
                aria-label={`Read on ${platform.name}`}
              >
                <PlatformIcon className='text-2xl' />
                Read on {platform.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

ArticleCard.propTypes = {
  title:   PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date:    PropTypes.string.isRequired,
  tags:    PropTypes.arrayOf(PropTypes.string).isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      url:  PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArticleCard;
