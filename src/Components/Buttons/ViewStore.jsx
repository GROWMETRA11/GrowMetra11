import React from 'react'

const ViewStore = ({ className,text= "View Store" }) => {
  return (
    <button
      className={`h-[36px] flex justify-center items-center w-full rounded-md bg-green-400 text-white ${className}`}
    >
     {text} 
    </button>
  );
};

export default ViewStore;
