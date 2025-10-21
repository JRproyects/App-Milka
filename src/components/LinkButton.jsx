import React from 'react';

const LinkButton = ({ icon: Icon, title, href, onClick, isEvent }) => (
  <a
    href={href || '#'}
    onClick={onClick}
    target={href ? "_blank" : "_self"}
    rel={href ? "noopener noreferrer" : ""}
    className={`w-full max-w-sm mx-auto flex items-center justify-center space-x-3
      py-4 px-6 mb-4 rounded-xl shadow-lg transition-transform duration-200
      hover:scale-[1.02] active:scale-[0.98] cursor-pointer
      ${isEvent 
        ? 'bg-bordo text-crema border-2 border-crema dark:bg-darkBg dark:text-darkText dark:border-white/50'
        : 'bg-crema text-bordo border-2 border-bordo dark:bg-darkBg/50 dark:text-darkText dark:border-white/30'}
      backdrop-blur-sm`}
  >
    <Icon className="w-6 h-6" />
    <span className="text-lg font-semibold tracking-wide uppercase">{title}</span>
  </a>
);

export default LinkButton;
