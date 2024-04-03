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
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../../components/Payment/Payment.css";
const PaymentSchema = Yup.object().shape({
  amount: Yup.number().required("Miktar zorunludur"),
  cardNumber: Yup.string().required("Kart numarası zorunludur"),
  expirationDate: Yup.string().required("Son kullanma tarihi zorunludur"),
  cvv: Yup.string().required("CVV zorunludur"),
});

const CarDetails = () => {
  const [carData, setCarData] = useState<GetByIdCarResponse>(); // boş obje ile başlatıldı
  const carId = useSelector((state: RootState) => state.rental.carId);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carResponse = await CarService.getById(carId);
        setCarData(carResponse.data); // Varsayılan olarak ilk aracı kullanıyoruz, siz bu kısmı kendi mantığınıza göre güncelleyebilirsiniz.
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCar();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePayment = () => {};
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PaymentSchema),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data: any) => {
    if (Object.keys(errors).length === 0) {
      // errors nesnesinin içinde herhangi bir hata yoksa, yani doğrulama başarılıysa çalışır
      toast.success("Ödeme Başarılı");
      handleClose();
    } else {
      // Hata varsa bir şey yapabilirsiniz, örneğin kullanıcıya bir uyarı gösterebilirsiniz
      toast.error("Lütfen formu doğru bir şekilde doldurun.");
    }
  };
  return (
    <div className="top">
      <Helmet title={carData?.model?.brand?.name}>
        <section>
          <Container>
            <Row className="flex justify-center">
              {count === 2 && (
                <Col lg="5">
                  <div className="car__info">
                    <h2 className="section__title">
                      {carData?.model.brand?.name} {carData?.model?.name}
                    </h2>

                    <div className=" d-flex align-items-center mb-4 mt-3 gap-5">
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
                      <span className=" d-flex align-items-center section__description gap-1">
                        <i
                          className="ri-roadster-line"
                          style={{ color: "#f9a826" }}
                        ></i>{" "}
                        Yolcu: {carData?.passengerCapacity}
                      </span>

                      <span className=" d-flex align-items-center section__description gap-1">
                        <i
                          className="ri-settings-2-line"
                          style={{ color: "#f9a826" }}
                        ></i>{" "}
                        {translate(carData?.gearType)}
                      </span>

                      <span className=" d-flex align-items-center section__description gap-1">
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
                      <span className=" d-flex align-items-center section__description gap-1">
                        <i
                          className="ri-map-pin-line"
                          style={{ color: "#f9a826" }}
                        ></i>{" "}
                        Minimum kredi notu : {carData?.minFindeksRate}
                      </span>

                      <span className=" d-flex align-items-center section__description gap-1">
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
                      <span className=" d-flex align-items-center section__description gap-1">
                        <i
                          className="ri-map-pin-line"
                          style={{ color: "#f9a826" }}
                        ></i>{" "}
                        Kilometre : {carData?.kilometer}
                      </span>

                      <span className=" d-flex align-items-center section__description gap-1">
                        <i
                          className="ri-wheelchair-line"
                          style={{ color: "#f9a826" }}
                        ></i>{" "}
                        Renk: {carData?.color?.name}
                      </span>
                      <span style={{ color: "red" }}>
                        Ödenecen Tutar : {carData?.dailyPrice}
                      </span>
                    </div>
                  </div>
                </Col>
              )}
              {count === 1 && (
                <>
                  <Col
                    lg="5"
                    style={{ paddingLeft: 30, marginLeft: 150 }}
                  ></Col>
                  <Col lg="6" className="">
                    <div className="booking-info mt-5">
                      <h5 className="fw-bold mb-4 ">Bilgilerim</h5>
                      <BookingForm />
                    </div>
                  </Col>
                </>
              )}
              {count === 3 && (
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-center"
                  >
                    <div className="form-group w-80">
                      <label htmlFor="card-number">Kart Numarası</label>
                      <input
                        type="text"
                        id="card-number"
                        placeholder="Kart Numarası"
                        {...register("cardNumber")}
                      />
                      <span className="error">
                        {errors.cardNumber?.message}
                      </span>
                    </div>
                    <div className="form-group w-80">
                      <label htmlFor="expiration-date">
                        Son Kullanma Tarihi
                      </label>
                      <input
                        type="text"
                        id="expiration-date"
                        placeholder="MM/YY"
                        {...register("expirationDate")}
                      />
                      <span className="error">
                        {errors.expirationDate?.message}
                      </span>
                    </div>
                    <div className="form-group w-80">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="CVV"
                        {...register("cvv")}
                      />
                      <span className="error">{errors.cvv?.message}</span>
                    </div>
                    <Button
                      className="btn-pay mt-5"
                      style={{
                       
                        width: 150,
                        height: 50,
                        backgroundColor: "#38BDF2",
                        fontSize: 20,
                      }}
                      onClick={onSubmit}
                    >
                      Ödeme Yap
                    </Button>
                  </form>
                </div>
              )}
            </Row>
            <div className="mx-auto mt-10 flex items-center justify-center gap-x-5">
              <Button
                disabled={count === 1}
                onClick={() => setCount(count - 1)}
              >
                Geri
              </Button>
              <Button
                disabled={count === 3}
                onClick={() => setCount(count + 1)}
              >
                İleri
              </Button>
            </div>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default CarDetails;