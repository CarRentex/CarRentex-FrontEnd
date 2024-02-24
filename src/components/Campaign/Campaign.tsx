import React, { useEffect, useState } from "react";
import CarBox from "./CarBox";
import "./Style/_index.scss";
import AnimateReveal from "../Animation/AnimateReveal";
import useBaseFetcher from "../../lib/BaseFetcherV2";
import CarService from "../../services/CarService";

interface CampaignProps {}

const Campaign: React.FC<CampaignProps> = (
  props: CampaignProps
): JSX.Element => {
  const [active, setActive] = useState<number>(0);
  const [colorBtn, setColorBtn] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);

  const btnID = (id: number) => {
    setColorBtn(colorBtn === id ? 0 : id);
  };

  const coloringButton = (id: number) => {
    return colorBtn === id ? "colored-button" : "";
  };

  useBaseFetcher({
    service: () => CarService.getAll(),
    onBaseFetched: setData,
  });

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <AnimateReveal direction="from-bottom" delay={400}>
                <h1>Kampanya</h1>
                <h2>Fırsatları Kaçırma!</h2>
                <p>Kampanya kapsamında, seçili araçlarda %20 indirim fırsatını kaçırma!</p>
              </AnimateReveal>
            </div>
            <div className="pick-container__car-content">
              <div className="pick-box">
                {data.map((car, index) => (
                  <button
                    key={index}
                    className={`${coloringButton(index + 1)}`}
                    onClick={() => {
                      setActive(index);
                      btnID(index + 1);
                    }}
                  >
                    {car.model && car.model.name}
                  </button>
                ))}
              </div>

              {active >= 0 && data.length > active && (
                <CarBox data={data[active]} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campaign;
