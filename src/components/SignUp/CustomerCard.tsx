import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Row,
  Col,
  Form,
} from "reactstrap";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { CreateRegister } from "../../models/Auth/CreateRegister";
import { register } from "../../services/AuthService/auth";

const CustomerCard: React.FC = () => {
  const [formData, setFormData] = useState<CreateRegister>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    cityId: 0,
    districtId: 0,
    address: "",
    role: "CUSTOMER",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form data:", formData);

    try {
      await register(formData);
      console.log("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="email"
              placeholder="Email..."
              type="email"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input
              id="password"
              placeholder="Şifre..."
              type="password"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input
              id="phoneNumber"
              placeholder="Telefon Numarası"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="name"
              placeholder="Ad"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="confirmPassword"
              placeholder="Şifreyi Onayla"
              type="password"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input
              id="cityId"
              placeholder="İl"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input
              id="surname"
              placeholder="Soyad"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="nationality"
              placeholder="Tc Kimlik No"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="districtId"
              placeholder="İlçe"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input
              id="address"
              placeholder="Adres"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
      </Row>
      <div className="text-center">
        <Button className="btn-neutral btn-round" color="info" type="submit">
          Kayıt Ol
        </Button>
      </div>
    </Form>
  );
};

export default CustomerCard;
