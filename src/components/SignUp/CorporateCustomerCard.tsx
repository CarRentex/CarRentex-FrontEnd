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
import { FaAccessibleIcon, FaAddressBook, FaAddressCard, FaBuilding, FaCity, FaEnvelope, FaKey, FaPhone, FaTaxi } from "react-icons/fa";
import { CreateRegister } from "../../models/Auth/CreateRegister";
import { register } from "../../services/AuthService/auth";
import { toast } from "react-toastify";

const CorporateCustomerCard: React.FC = () => {
  const [formData, setFormData] = useState<CreateRegister>({
    companyName: "",
    taxNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    cityId: 0,
    districtId: 0,
    address: "",
    role: "CORPORATE_CUSTOMER",
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
      toast.success("Kayıt Başarılı!");
    } catch (error) {
      toast.error("Kayıt Başarısız!");
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
              <FaPhone />
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
              <FaCity />
            </InputGroupText>
            <Input
              id="cityId"
              placeholder="il"
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
              id="confirmPassword"
              placeholder="Şifreyi Onayla"
              type="password"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaBuilding />
            </InputGroupText>
            <Input
              id="companyName"
              placeholder="Şirket Adı"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaCity />
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
              <FaAddressCard />
            </InputGroupText>
            <Input
              id="address"
              placeholder="Adres"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <InputGroup className="mb-3">
            <InputGroupText>
              <FaAddressBook />
            </InputGroupText>
            <Input
              id="taxNo"
              placeholder="Vergi Numarası"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
      </Row>
      <div className="text-center">
        <Button className="btn-neutral btn-round" color="info" type="submit">
          Kayıt Ol
        </Button>
      </div>
    </Form>
  );
};

export default CorporateCustomerCard;
