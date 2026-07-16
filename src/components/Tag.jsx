//import React from 'react';
import PropTypes from 'prop-types';

function Tag({ icon: Icon, title }) {
  return (
    <div className='flex items-center bg-transparent text-gray-100 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 m-1'>
      {Icon && <Icon className='text-xl' />}
      <span className={`font-[Anzo3]${Icon ? ' ml-2' : ''}`}>{title}</span>
    </div>
  );
}
Tag.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
};
export default Tag;
