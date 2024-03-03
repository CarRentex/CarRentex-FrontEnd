import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import CarService from "../../services/CarService";
import BookingForm from "./BookingForm";
import PaymentMethod from "./payment-method";
import "./Rental.css";
import Helmet from "./Helmet";
import { GetAllCarResponse } from "../../models/Car/Response/GetAllCarResponse";
import { GetByIdBrandResponse } from "../../models/Brand/Response/GetByIdResponse";
import { GetByIdCarResponse } from "../../models/Car/Response/GetByIdResponse";
import { Image } from "react-bootstrap";
import translate from "../../lib/translate";
import Payment from "../../components/Payment/Payment";

const CarDetails = () => {
  const [carData, setCarData] = useState<GetByIdCarResponse>(); // boş obje ile başlatıldı

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carResponse = await CarService.getById(40);
        setCarData(carResponse.data); // Varsayılan olarak ilk aracı kullanıyoruz, siz bu kısmı kendi mantığınıza göre güncelleyebilirsiniz.
      } catch (error) {
        console.error('Error fetching car:', error);
      }
    };

    fetchCar();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handlePayment = () => {
        
    };

  return (
    <div style={{paddingTop:76}}>
       <Helmet title={carData?.model?.brand?.name}>
      <section>
        <Container>
          <Row>
            <Col lg="5">
            <div className="car__info">
                <h2 className="section__title">{carData?.model.brand?.name} {carData?.model?.name}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ₺{carData?.dailyPrice} / Günlük
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({translate(carData?.category)})
                  </span>
                </div>

                <p className="section__description">
                {translate(carData?.fuelType)}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    Yolcu: {carData?.passengerCapacity}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {translate(carData?.gearType)}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {carData?.year}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                     Minimum kredi notu : {carData?.minFindeksRate}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    Plaka : {carData?.plate}
                  </span>
                </div>
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                     Kilometre : {carData?.kilometer}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    Renk:  {carData?.color?.name}
                  </span>
                  <span style={{color:"red"}}>
                Ödenecen Tutar : {carData?.dailyPrice}

                  </span>
                </div>
              </div>

            </Col>

            <Col lg="5" style={{paddingLeft:30, marginLeft:150}}>
            <img src={carData?.imagePath} alt="" className="w-100" />

            </Col>
            <Col lg="6" className="">

            <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Bilgilerim</h5>
                <BookingForm />
              </div>
            </Col>
            
            <Col lg="5" className="">
            <img src="/images/kredi.png" alt="" className="w-100" />
            {/* <Button className="btn-rezerv   mt-5" onSubmit={handlePayment} onClick={Payment} style={{marginLeft:200, width:250, height:80, backgroundColor:"#38BDF2", fontSize:20}}>Ödeme Yap</Button> */}
            <Payment/>
                   
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
    </div>
  );

};

export default CarDetails;
