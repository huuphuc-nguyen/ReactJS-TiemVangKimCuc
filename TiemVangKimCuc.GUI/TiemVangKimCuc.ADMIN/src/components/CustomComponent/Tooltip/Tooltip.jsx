import React from 'react'

// Transform x-50% is set in animation in taiwind.config.js

const Tooltip = ({message, children, position, offset, className}) => {
  return (
    <div className={`group relative ${className}`}>
        {children}
        <span className={`z-10 bg-black/90 text-white group-hover:animate-tool-tip rounded-md absolute ${position === 'top' ? '-top-10' : 'top-6'} ${offset ? `top-[30px]` : ''} left-1/2 scale-0 p-2 text-sm w-max`}>{message}</span>
    </div>
  )
}

export default Tooltip
