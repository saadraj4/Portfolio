'use client';

import React from 'react';

const LinkButton = ({ link, children }) => {
  const handleClick = (event) => {
    if (event.ctrlKey) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  };

  return (
    <a 
      href={link} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block text-center"
      onClick={(event) => {
        event.preventDefault();
        handleClick(event);
      }}
    >
      {children}
    </a>
  );
};

export default LinkButton;
