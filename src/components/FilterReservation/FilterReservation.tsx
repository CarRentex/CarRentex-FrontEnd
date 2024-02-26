import React, { useEffect, useState } from 'react';
import './FilterReservation.scss';
import LocationService from '../../services/LocationService';

const FilterReservation = () => {
  const [locOne, setLocOne] = useState('');
  const [locTwo, setLocTwo] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [pickTime, setPickTime] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [locations, setLocations] = useState<any []>([]); // Yeni eklenen state

  useEffect(() => {
    // Markaları getir
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await LocationService.getAll();
      setLocations(response.data as any);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleLocationChange = (e:any) => {
    setLocOne(e.target.value);
  };

  const handleloctwoChange = (e:any) => {
    setLocTwo(e.target.value);
  };

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };

  const handlePickTime = (e:any) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e:any) => {
    setDropTime(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Filtreleme işlemlerini burada gerçekleştirebilirsiniz
  };

  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Hemen Kirala</h2>
            <form className="box-form" onSubmit={handleSubmit}>
              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Alış Noktası <b>*</b>
                </label>
                <select value={locOne} onChange={handleLocationChange}>
                  <option value="">Seçiniz</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-car"></i> &nbsp; Teslim Noktası <b>*</b>
                </label>
                <select value={locTwo} onChange={handleloctwoChange}>
                  <option value="">Boş</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="box-form__car-time">
                <label htmlFor="picktime">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp; Alış Tarihi{" "}
                  <b>*</b>
                </label>
                <input
                  id="picktime"
                  value={pickTime}
                  onChange={handlePickTime}
                  type="date"
                ></input>
              </div>

              <div className="box-form__car-time">
                <label htmlFor="droptime">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp; Teslim Tarihi{" "}
                  <b>*</b>
                </label>
                <input
                  id="droptime"
                  value={dropTime}
                  onChange={handleDropTime}
                  type="date"
                ></input>
              </div>

              <button type="submit">Kirala</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterReservation;
