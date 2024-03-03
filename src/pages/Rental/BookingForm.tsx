import React, { FormEvent, useEffect, useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import LocationService from "../../services/LocationService";
import { useSelector } from "react-redux";
import { Root } from "react-dom/client";
import { RootState } from "../../store/store";

const BookingForm: React.FC = () => {
  const [locations, setLocations] = useState<any>([]); // Boş bir array ile başlatıldı
  const [startLocation, setStartLocation] = useState<string>("");
  const [endLocation, setEndLocation] = useState<string>("");
  const rental = useSelector((state: RootState) => state.rental);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await LocationService.getAll();
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleStartLocaitonChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStartLocation(event.target.value);
  };

  const handleEndLocaitonChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEndLocation(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Form submit işlemleri burada yapılabilir
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="Ad" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="Soyad" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input type="number" placeholder="Telefon Numarası" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input type="text" placeholder="Adres" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="il" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input type="text" placeholder="ilçe" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4 ml-5">
        <Input type="date" placeholder="Journey Date" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="picklocationId"
          value={startLocation}
          onChange={handleStartLocaitonChange}
        >
          <option value="" disabled hidden>
            Başlangıç Tarihi
          </option>
          {locations.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ml-5">
        <Input type="date" placeholder="Journey Date" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="droplocationId"
          value={endLocation}
          onChange={handleEndLocaitonChange}
        >
          <option value="" disabled hidden>
            Bitiş Tarihi
          </option>
          {locations.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </FormGroup>

{/*       <FormGroup>
        <textarea rows={5} className="textarea" placeholder="Write" />
      </FormGroup> */}
    </Form>
  );
};

export default BookingForm;
