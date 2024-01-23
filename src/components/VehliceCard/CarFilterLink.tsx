import { twMerge } from "tailwind-merge";
import React from "react";


const CarFilterLink = ({text,active}:{text:string;active?:boolean}) => {

  return (
    <button
      className={twMerge(
        ` mx-1 rounded-full px-2 py-2 text-center text-primary transition-all`,
        `text-[#fff] bg-[#F46444]`,
       
      )}
      
    >
      {text }
    </button>
  );
};

export default CarFilterLink;
