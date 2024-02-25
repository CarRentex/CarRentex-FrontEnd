import React from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Row,
  Col,
} from "reactstrap";
import { FaEnvelope, FaKey } from "react-icons/fa";

// CustomerCard component
// CustomerCard component
const CustomerCard: React.FC = () => {
  return (
    <>
      <Row>
        <Col md="6">
          {/* First column for email and password */}
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input id="email" placeholder="Email..." type="email" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input id="password" placeholder="Şifre..." type="password" />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input id="confirmPassword" placeholder="Şifreyi Onayla" type="password" />
          </InputGroup>
          {/* Second column for name, surname, and other personal information */}
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input id="name" placeholder="Ad" type="text" />
          </InputGroup>
            </Col>
            <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input id="surname" placeholder="Soyad" type="text" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input id="tcKimlik" placeholder="Kimlik No" type="text" />
          </InputGroup>
          </Col>
          <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input id="phoneNumber" placeholder="Telefon Numarası" type="text" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input id="il" placeholder="İl" type="text" />
          </InputGroup>
          </Col>
          <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input id="ilce" placeholder="İlçe" type="text" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input id="address" placeholder="Adres" type="text" />
          </InputGroup>
        </Col>
      </Row>
      {/* Submit button */}
      <div className="text-center">
        <Button className="btn-neutral btn-round" color="info" type="submit">
          Kayıt Ol
        </Button>
      </div>
    </>
  );
};

export default CustomerCard;