import { twMerge } from "tailwind-merge";
import React from "react";

const CarFilterLink = ({ text, category, setCategory }: { text: string; category: string; setCategory: (category: string) => void }) => {

  const handleCategory = () => {
    setCategory(category); // Seçilen kategoriyi ana bileşende güncelle
  }

  return (
    <button
      className={twMerge(
        `mx-1 rounded-full px-2 py-2 text-center text-primary transition-all`,
        `text-[#fff] bg-[#38BDF2]`,
      )}
      onClick={handleCategory}
    >
      {text}
    </button>
  );
};

export default CarFilterLink;
