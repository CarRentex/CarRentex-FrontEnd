import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type Props = {
  category: string;
  marka: string;
  model: string;
  fiyat: number;

};

const ProductCard = (props: Props) => {
  const navigate = useNavigate();
  const { category, marka, model, fiyat} = props;
  let categoryTextClass = "flex items-center text-[.6rem] md:text-base gap-2";
  return (
    <section className="flex flex-col justify-between bg-white p-2 shadow-lg md:h-[32rem] md:p-5">
      <header className="grid grid-cols-2">
        <h3 className="col-span-2 text-[.5rem] font-bold text-primary md:col-span-1 md:text-xs">
          {category} Kiralık Araçlar
        </h3>
        <h2 className="row-span-2 text-left text-sm font-bold md:text-lg">
          {marka} {model}
        </h2>
        <h1 className="test-xs text-right font-bold md:text-base lg:text-2xl ">
          {fiyat} TL/ gün
        </h1>
      </header>
      <Image
        className="my-2 w-full md:p-5"
        src={require(`../../images/araçlar/Ekonomik/Fiat Egea.png`)}
        alt=""
      />
      <div className="grid grid-cols-2 gap-1 md:gap-6">
        <h1 className={categoryTextClass}>
          <Image className="w-[20px] md:w-[30px]" src="../../assets/img/flags/TR.png" alt="" />
        </h1>
        <h1 className={categoryTextClass}>
          <Image className="w-[20px] md:w-[30px]" src="../../assets/img/flags/TR.png" alt="" />
          Airbag
        </h1>
        <h1 className={categoryTextClass}>
          <Image className="w-[20px] md:w-[30px]" src="../../assets/img/flags/TR.png" alt="" />
          ABS
        </h1>
        <h1 className={categoryTextClass}>
          <Image className="w-[20px] md:w-[30px]" src="../../assets/img/flags/TR.png" alt="" />
          Dizel, Benzin
        </h1>
        <h1 className={categoryTextClass}>
          <Image className="w-[20px] md:w-[30px]"src="../../assets/img/flags/TR.png" alt="" />
          Otomatik, Manuel
        </h1>
        <button
          onClick= {() => navigate("/")}
          className="s-full h-full bg-primary text-center text-[10px] font-bold text-white max-md:font-medium md:text-lg"
        >
          Hemen Kirala
        </button>
      </div>
    </section>
  );
};

export default ProductCard;



