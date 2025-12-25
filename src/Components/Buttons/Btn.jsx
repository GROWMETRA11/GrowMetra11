import React from 'react'

const Btn = ({onClick, className= "", icon= "icon", type= "button", children,}) => {
  return (
    <button 
    type={type}
    onClick={onClick}
    className={`${className}`}
    icon={icon}
    >
         {children}
    </button>
  )
}

export default Btn