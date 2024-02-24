import CarService from "../../services/CarService";
import { GetAllCarResponse } from "../../models/Car/Response/GetAllCarResponse";
import { useEffect, useState } from "react";
import CarFilterLink from "../../components/VehliceCard/CarFilterLink";
import HeroPages from "../../components/HeroPages/HeroPages";
import VehliceCard from "../../components/VehliceCard/VehliceCard";
import BaseFetcher from "../../lib/BaseFetcher";
import BookingSection from "../../components/FilterCars/FilterCar";

const Model = () => {
  const [cars, setCars] = useState<GetAllCarResponse[]>([]);
  const [category, setCategory] = useState<string>("ALL");

  return (
    <>
      {category === "ALL" ? (
        <BaseFetcher service={() => CarService.getAll()} onBaseFetched={setCars} />
      ) : (
        <BaseFetcher service={CarService.getCarsByCategory} onBaseFetched={setCars} params={category} />
      )}

      <HeroPages path="/images/car/yol.jpeg" />
      <BookingSection />
      <div className="w-full mt-[150px]">
        <section className="container mx-auto flex flex-col">
          <h1 className="text-center text-xl text-[#38BDF2]">
            Kiralık Araçlarımız
          </h1>
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
          <div className="mx-auto w-full flex justify-center">
            <label className="flex flex-col text-xs md:text-base my-[20px]">
              Ara
              <input className="border-2 border-gray-200 px-2 w-full lg:w-[500px] h-10 rounded-md focus:outline-none focus:border-blue-500" />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
