import CarService from "../../services/CarService";
import { GetAllCarResponse } from "../../models/Car/Response/GetAllCarResponse";
import { useEffect, useState } from "react";
import CarFilterLink from "../../components/VehliceCard/CarFilterLink";
import HeroPages from "../../components/HeroPages/HeroPages";
import VehliceCard from "../../components/VehliceCard/VehliceCard";
import BaseFetcher from "../../lib/BaseFetcher";
import BookingSection from "../../components/FilterCars/FilterCar";
import FilterSection from "../../components/FilterCars/FilterCar";
import { useSelector } from "react-redux";
import FetchFilterCars from "../../lib/FetchFilter";

const Model = () => {
  const [cars, setCars] = useState<GetAllCarResponse[]>([]);
  const [category, setCategory] = useState<string>("ALL");
  const [filterData, setFilterData] = useState({
    minPrice: 0,
    maxPrice: 0,
    brand: 0,
    model: 0,
    isfilterCar: false  // isfilterCar eklenmiş gibi varsayalım
  });

  const handleFilter = (filterValues : any) => {
    setFilterData({ ...filterValues, isfilterCar: true });
  };
  return (
    <>
      {1 ? (
        <FetchFilterCars
          minPrice={filterData.minPrice}
          maxPrice={filterData.maxPrice}
          brand={filterData.brand}
          model={filterData.model}
          setState={setCars}
        />
      ) : category === "ALL" ? (
        <BaseFetcher
          service={() => CarService.getAll()}
          onBaseFetched={setCars}
        />
      ) : (
        <BaseFetcher
          service={CarService.getCarsByCategory}
          onBaseFetched={setCars}
          params={category}
        />
      )}

      <HeroPages path="/images/car/yol.jpeg" />
      <FilterSection onFilter={handleFilter} />
      <div className="w-full mt-[100px]">
        <section className="container mx-auto flex flex-col">
          <div className="hidden w-full grid-cols-7 bg-white px-36 py-6 md:grid">
            <CarFilterLink
              text="Tümü"
              category="ALL"
              setCategory={setCategory}
            />
            <CarFilterLink
              text="Ekonomik"
              category="ECONOMY"
              setCategory={setCategory}
            />
            <CarFilterLink
              text="Konfor"
              category="COMFORT"
              setCategory={setCategory}
            />
            <CarFilterLink
              text="Prestij"
              category="PRESTIGE"
              setCategory={setCategory}
            />
            <CarFilterLink
              text="Lüks"
              category="LUXURY"
              setCategory={setCategory}
            />
            <CarFilterLink
              text="Ticari"
              category="COMMERCIAL"
              setCategory={setCategory}
            />
            <CarFilterLink
              text="Van"
              category="VAN"
              setCategory={setCategory}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {cars.map((model, index) => (
              <VehliceCard key={index} item={model} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Model;
