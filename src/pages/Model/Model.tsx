import CarList from "../../lib/data/data.json";
import VehliceCard from "../../components/VehliceCard/ VehliceCard";
import CarFilterLink from "../../components/VehliceCard/CarFilterLink";
import Header from "../../components/Header/Header";
const RentACar = () => {
  return (
    <>
    <Header src = '/images/yol.jpeg'/>
    <div className="w-full mt-[150px]">
      <section className="container mx-auto flex flex-col">
        <h1 className="text-center text-xl text-[#38BDF2]">Kiralık Araçlarımız</h1>
        <div className="hidden w-full grid-cols-7 bg-white px-36 py-6 md:grid">
          <CarFilterLink text="Tüm" />
          <CarFilterLink text="Ekonomik" />
          <CarFilterLink text="Konfor" />
          <CarFilterLink text="Prestij" />
          <CarFilterLink text="Lüks" />
          <CarFilterLink text="Ticari" />
          <CarFilterLink  text="Van" />
        </div>
        <div className="mx-auto w-full flex justify-center">
        <label className="flex flex-col text-xs md:text-base my-[20px]">
              Ara
              <input
                className="border-2 border-gray-200 px-2 w-full lg:w-[500px]  h-10 rounded-md focus:outline-none focus:border-blue-500"
              />
            </label>
        </div>
      
        <div className="my-12 grid grid-cols-2 gap-3 px-5 md:grid-cols-4">
          {CarList.map((car, index) => (
            <VehliceCard
              key={index}
              category={car.category}
              marka={car.marka}
              model={car.model}
              fiyat={car.fiyat}
              yolcu={car.yolcu}
              additive={car.additive}
            />
          ))}
        </div>
      </section>
    </div>
    </>

  );
};

export default RentACar;
