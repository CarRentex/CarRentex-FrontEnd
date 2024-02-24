import React, { useState } from "react";
import "./BookCar.scss";

interface BookingSectionProps {
  // Gerekirse props ekleyebilirsiniz
}

const BookingSection: React.FC<BookingSectionProps> = ({}) => {
  const [modal, setModal] = useState<boolean>(false);
  const [carType, setCarType] = useState<string>("");
  const [pickUp, setPickUp] = useState<string>("");
  const [dropOff, setDropOff] = useState<string>("");
  const [pickTime, setPickTime] = useState<string>("");
  const [dropTime, setDropTime] = useState<string>("");

  const openModal = () => {
    setModal(true);
    // Modal açma işlemleri ekleyebilirsiniz
  };

  const handleCar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCarType(event.target.value);
  };

  const handlePick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPickUp(event.target.value);
  };

  const handleDrop = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDropOff(event.target.value);
  };

  const handlePickTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPickTime(event.target.value);
  };

  const handleDropTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropTime(event.target.value);
  };

  const hideMessage = () => {
    // Mesaj gizleme işlemleri ekleyebilirsiniz
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submit işlemleri ekleyebilirsiniz
  };

  return (
    <section id="booking-section" className="book-section">
      {/* overlay */}
      <div
        onClick={openModal}
        className={`modal-overlay ${modal ? "active-modal" : ""}`}
      ></div>

      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Book a car</h2>

            <p className="error-message">
              All fields required! <i className="fa-solid fa-xmark"></i>
            </p>

            <p className="booking-done">
              Check your email to confirm an order.{" "}
              <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
            </p>

            <form className="box-form" onSubmit={handleSubmit}>
              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                  Type <b>*</b>
                </label>
                <select value={carType} onChange={handleCar}>
                  <option>Select your car type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                  <b>*</b>
                </label>
                <select value={pickUp} onChange={handlePick}>
                  <option>Select pick up location</option>
                  <option>Belgrade</option>
                  <option>Novi Sad</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                  <b>*</b>
                </label>
                <select value={dropOff} onChange={handleDrop}>
                  <option>Select drop off location</option>
                  <option>Novi Sad</option>
                  <option>Belgrade</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
              </div>

              <div className="box-form__car-time">
                <label htmlFor="picktime">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp; Pick-up{" "}
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
                  <i className="fa-regular fa-calendar-days "></i> &nbsp; Drop-of{" "}
                  <b>*</b>
                </label>
                <input
                  id="droptime"
                  value={dropTime}
                  onChange={handleDropTime}
                  type="date"
                ></input>
              </div>

              <button onClick={openModal} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
