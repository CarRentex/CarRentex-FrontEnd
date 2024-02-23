import { Image } from "react-bootstrap";
import ABS from "../../assets/icons/abs.jpeg";
import Airbag from "../../assets/icons/Airbag.jpeg";
import Fuel from "../../assets/icons/Fuel.jpeg";
import Passangers from "../../assets/icons/Passangers.jpeg";
import Vites from "../../assets/icons/Vites.jpeg";
import { useNavigate } from "react-router-dom";
import { GetAllCarResponse } from "../../models/Car/Response/GetAllCarResponse";



const VehliceCard = (  {item}: {item: GetAllCarResponse}) => {
const navigate = useNavigate();
  
  let categoryTextClass = "flex items-center text-[.6rem] md:text-base gap-2";
  return (
    <section className="flex flex-col justify-between bg-white p-2 shadow-lg md:h-[50rem] md:p-5">
      <header className="grid grid-cols-2">
        <h3 className="col-span-2 text-[.5rem] font-bold text-primary-color md:col-span-1 md:text-xs">
          {item.category} Kiralık Araçlar
        </h3>
        <h2 className="row-span-2 text-left text-sm font-bold md:text-lg">
          {item.model?.brand?.name} {item.model?.name} {item.year}
        </h2>
        <h1 className="test-xs text-right font-bold md:text-base lg:text-2xl ">
          {item.dailyPrice} TL/ gün
        </h1>
      </header>
       <Image
         className="w-full h-[150px] rounded-t-lg"
         src={item.imagePath}
         alt=""
       />
      <div className="grid grid-cols-2 gap-1 md:gap-6">
        <h1 className={categoryTextClass}>
          <img className="w-[20px] md:w-[30px]" src={Passangers} alt="" />
          {item.passengerCapacity}
        </h1>
        <h1 className={categoryTextClass}>
          <img className="w-[20px] md:w-[30px]" src={Airbag} alt="" />
          Airbag
        </h1>
        <h1 className={categoryTextClass}>
          <img className="w-[20px] md:w-[30px]" src={ABS} alt="" />
          ABS
        </h1>
        <h1 className={categoryTextClass}>
          <img className="w-[20px] md:w-[30px]" src={Fuel} alt="" />
          {item.fuelType}
        </h1>
        <h1 className={categoryTextClass}>
          <img className="w-[20px] md:w-[30px]" src={Vites} alt="" />
          {item.gearType}
        </h1>
        <button
          onClick={()=>navigate("/")}
          className="s-full h-full bg-primary-color text-center text-[10px] font-bold text-white max-md:font-medium md:text-lg"
        >
          Hemen Kirala
        </button>
      </div>
    </section>
  ); 
};

export default VehliceCard;