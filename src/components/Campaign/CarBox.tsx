import React, { useState } from "react";
import "./Style/_campaign.scss";




interface CarBoxProps {
  data: any;
}

const CarBox: React.FC<CarBoxProps> = ({ data }: CarBoxProps): JSX.Element => {
  const [carLoad, setCarLoad] = useState(true);

  // data undefined değilse devam et, aksi halde boş bir dizi kullan
  const carsArray = Array.isArray(data) ? data : [data];

  return (
    <>
     {carsArray.map((car: any, id: any) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.imagePath}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>₺{car.dailyPrice}</span>/ Günlük ücret
            </div>
            <div className="pick-description__table">

              <div className="pick-description__table__col">
                <span>Marka</span>
                <span>{car.model.brand.name}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model.name}</span>
              </div>


              <div className="pick-description__table__col">
                <span>Yıl</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Yolcu</span>
                <span>{car.passengerCapacity}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Vites</span>
                <span>{car.gearType}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Yakıt</span>
                <span>{car.fuelType}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Şimdi Kirala
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarBox;
