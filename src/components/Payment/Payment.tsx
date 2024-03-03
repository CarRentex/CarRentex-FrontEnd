import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const PaymentSchema = Yup.object().shape({
  amount: Yup.number().required("Miktar zorunludur"),
  cardNumber: Yup.string().required("Kart numarası zorunludur"),
  expirationDate: Yup.string().required("Son kullanma tarihi zorunludur"),
  cvv: Yup.string().required("CVV zorunludur"),
});

const Payment: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
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
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          marginLeft: 200,
          width: 250,
          height: 80,
          backgroundColor: "#38BDF2",
          fontSize: 20,
        }}
      >
        Ödeme Yap
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ödeme Yap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="form-group">
              <label htmlFor="card-number">Kart Numarası</label>
              <input
                type="text"
                id="card-number"
                placeholder="Kart Numarası"
                {...register("cardNumber")}
              />
              <span className="error">{errors.cardNumber?.message}</span>
            </div>
            <div className="form-group">
              <label htmlFor="expiration-date">Son Kullanma Tarihi</label>
              <input
                type="text"
                id="expiration-date"
                placeholder="MM/YY"
                {...register("expirationDate")}
              />
              <span className="error">{errors.expirationDate?.message}</span>
            </div>
            <div className="form-group">
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
                marginLeft: 200,
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
