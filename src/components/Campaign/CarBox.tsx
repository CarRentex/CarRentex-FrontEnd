import React, { useState } from "react";
import "./Style/_campaign.scss";

interface Car {
  img: string;
  price: number;
  model: string;
  mark: string;
  year: number;
  doors: number;
  air: string;
  transmission: string;
  fuel: string;
}

interface CarBoxProps {
  data: any;
  carID: number;
}

const CarBox: React.FC<CarBoxProps> = ({ data, carID }: CarBoxProps): JSX.Element => {
  const [carLoad, setCarLoad] = useState(true);

  return (
    <>
      {data[carID].map((car: any, id: any) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>₺{car.price}</span>/ Günlük ücret
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Marka</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Yıl</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{car.fuel}</span>
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
