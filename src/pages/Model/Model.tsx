import CarService from "../../services/CarService";
import { GetAllCarResponse } from "../../models/Car/Response/GetAllCarResponse";
import { useEffect, useState } from "react";
import CarFilterLink from "../../components/VehliceCard/CarFilterLink";
import HeroPages from "../../components/HeroPages/HeroPages";
import VehliceCard from "../../components/VehliceCard/VehliceCard";
import BookingSection from "../../components/FilterCars/FilterCar";
import FilterSection from "../../components/FilterCars/FilterCar";
import { useSelector } from "react-redux";
import FetchFilterCars from "../../lib/fetchFilter";
import { RootState } from "../../store/store";
import BaseFetcher from "../../lib/BaseFetcher";

const Model = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [category, setCategory] = useState<string>("ALL");

  const filterCar = useSelector((state: RootState) => state.filter);

  return (
    <>
      {filterCar.isfilterCar ? (
        <FetchFilterCars
          minPrice={filterCar.minPrice}
          maxPrice={filterCar.maxPrice}
          brand={filterCar.brand}
          model={filterCar.model}
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
      <FilterSection/>
      <div className="w-full mt-[90px]">
        <section className="container mx-auto flex flex-col">
          <div className="hidden w-full grid-cols-7 bg-white px-56 py-16 md:grid">
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
