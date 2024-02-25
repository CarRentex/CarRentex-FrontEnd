import React from 'react';
import CarService from '../services/CarService';
import { filterSuccess } from '../store/filterCarSlice';
import { useDispatch } from 'react-redux';

interface FetchDataProps {
    minPrice: number;
    maxPrice: number;
    brand: number;
    model: number;
    
    setState: React.Dispatch<React.SetStateAction<any>>;
}


const FetchFilterCars: React.FC<FetchDataProps> = ({ minPrice, maxPrice, brand, model, setState }) => {
  
    const fetchData = async () => {
      try {
        console.log("minPrice", minPrice);
        console.log("maxPrice", maxPrice);
        console.log("brand", brand);
        console.log("model", model);
        const response = await CarService.getFilterCars(minPrice, maxPrice, brand, model);
        setState(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
  
    React.useEffect(() => {
      fetchData();
    }, [minPrice, maxPrice, brand, model]);
  
    return null;
  };
  
  export default FetchFilterCars;
  
