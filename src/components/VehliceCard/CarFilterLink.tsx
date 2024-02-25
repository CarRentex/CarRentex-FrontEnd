import { twMerge } from "tailwind-merge";
import React from "react";

const CarFilterLink = ({ text, category, setCategory }: { text: string; category: string; setCategory: (category: string) => void }) => {

  const handleCategory = () => {
    setCategory(category); // Seçilen kategoriyi ana bileşende güncelle
  }

  return (
    <button
      className={twMerge(
        `mx-1 rounded-full px-6 py-6 text-center text-primary transition-all`,
        `text-[#fff] bg-[#38BDF2] hover:bg-[#60C6FC] hover:shadow-md hover:scale-105 hover:z-10`, // Hover efektleri ekledik
      )}
      onClick={handleCategory}
    >
      {text}
    </button>
  );
};

export default CarFilterLink;
