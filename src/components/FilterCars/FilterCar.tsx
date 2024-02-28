import React, { useState, useEffect } from "react";
import "./FilterCar.scss";
import CarService from "../../services/CarService";
import BrandService from "../../services/BrandService";
import ModelService from "../../services/ModelService";
import FetchFilterCars from "../../lib/fetchFilter";
import { useDispatch } from "react-redux";
import { filterSuccess } from "../../store/filterCarSlice";
import { on } from "events";

interface BookingSectionProps {
  
}

const FilterSection: React.FC<BookingSectionProps> = () => {
  const [carType, setCarType] = useState<any>("");
  const [dropOff, setDropOff] = useState<any>("");
  const [brands, setBrands] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [minPrice, setMinPrice] = useState<any>(null);
  const [maxPrice, setMaxPrice] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Markaları getir
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await BrandService.getAll();
      setBrands(response.data as any[]);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const fetchModels = async (brandId: number) => {
    try {
      const response = await ModelService.getModelByBrandId(brandId);
      setModels(response.data);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  const open = () => {
    window.scrollTo(0, 1000);
  };

  const handleCar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCarType(Number(event.target.value));
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrandId = Number(event.target.value);
    const selectedBrand = brands.find((brand) => brand.id === selectedBrandId);
  
    if (selectedBrand) {
      setDropOff(String(selectedBrandId));
      setCarType("");
      // Marka değiştiğinde modelleri getir
      fetchModels(selectedBrandId);
    }
  };

  const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      carType,
      dropOff,
      minPrice,
      maxPrice,
    });
    dispatch(filterSuccess({ minPrice, maxPrice, brand: dropOff, model: carType }));
  };

  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Filtrele</h2>
            <form className="box-form" onSubmit={handleSubmit}>
              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Marka{" "}
                  <b>*</b>
                </label>
                <select value={dropOff} onChange={handleBrandChange}>
                <option>Seçiniz</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-car"></i> &nbsp; Model <b>*</b>
                </label>
                <select value={carType} onChange={handleCar}>
                  <option>Seçiniz</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Minimum
                  Fiyat <b>*</b>
                </label>
                <input
                  type="number"
                  value={minPrice || ""}
                  onChange={handleMinPrice}
                />
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Maksimum
                  Fiyat <b>*</b>
                </label>
                <input
                  type="number"
                  value={maxPrice || ""}
                  onChange={handleMaxPrice}
                />
              </div>

              <button onClick={open} type="submit">
                Filtrele
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;