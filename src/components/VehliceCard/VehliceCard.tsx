import { Image } from "react-bootstrap";
import ABS from "../../assets/icons/abs.jpeg";
import Airbag from "../../assets/icons/Airbag.jpeg";
import Fuel from "../../assets/icons/Fuel.jpeg";
import Passangers from "../../assets/icons/Passangers.jpeg";
import Vites from "../../assets/icons/Vites.jpeg";
import { useNavigate } from "react-router-dom";
import { GetAllCarResponse } from "../../models/Car/Response/GetAllCarResponse";
import "./VehliceCard.css";
import translate from "../../lib/translate";


const VehliceCard = (  {item}: {item: GetAllCarResponse}) => {
const navigate = useNavigate();



  let categoryTextClass = "flex items-center text-[.6rem] md:text-base gap-6";
  return (
    <section className={`vehlice-card flex flex-col justify-between bg-white p-2 shadow-lg md:h-[50rem] md:p-5`}>
      <header className="grid grid-cols-2">
        <h1 className="col-span-2 text-[.5rem] font-bold text-primary-color md:col-span-1 md:text-xs" style={{fontSize:10}}>
          {translate(item.category)} Kiralık Araçlar
        </h1>
        <h2 className="row-span-2 text-left text-sm font-bold md:text-lg" style={{fontSize:15}}>
          {item.model?.brand?.name} {item.model?.name} {item.year}
        </h2>
        <h1 className="test-xs text-right font-bold md:text-base lg:text-2xl " style={{fontSize:15}}>
          {item.dailyPrice} TL/ gün
        </h1>
      </header>
       <Image
         className="w-full h-[150px] rounded-t-lg"
         src={item.imagePath}
         alt=""
       />
      <div className="grid grid-cols-2 gap-1 md:gap-6">
        <h1 className={categoryTextClass} style={{fontSize:15}}>
          <img className="w-[20px] md:w-[30px]" src={Passangers} alt="" />
          {item.passengerCapacity}
        </h1>
        <h1 className={categoryTextClass} style={{fontSize:15}}>
          <img className="w-[20px] md:w-[30px]" src={Airbag} alt="" />
          Airbag
        </h1>
        <h1 className={categoryTextClass} style={{fontSize:15}}>
          <img className="w-[20px] md:w-[30px]" src={ABS} alt="" />
          ABS
        </h1>
        <h1 className={categoryTextClass} style={{fontSize:15}}>
          <img className="w-[20px] md:w-[30px]" src={Fuel} alt="" />
          {translate(item.fuelType)}
        </h1>
        <h1 className={categoryTextClass} style={{fontSize:15}}>
          <img className="w-[20px] md:w-[30px]" src={Vites} alt="" />
          {translate(item.gearType)}
        </h1>
        <button
          onClick={()=>navigate("/rental")}
          className="s-full h-full bg-primary-color text-center text-[10px] font-bold text-white max-md:font-medium md:text-lg"
          style={{ borderRadius: "0 0 10px 10px" }}
        >
          Hemen Kirala
        </button>
      </div>
    </section>
  ); 
};

export default VehliceCard;