import React, { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import {
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Container,
  Row,
  CardHeader,
  CardTitle,
  Card,
} from "reactstrap";
import "./Register.css";

const PersonalCustomerCard: React.FC = () => (
  <div className="card-body card-front">
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
    <div className="text-center">
      <Button className="btn-neutral btn-round" color="info" type="submit">
        Giriş Yap
      </Button>
    </div>
  </div>
);

const CorporateCustomerCard: React.FC = () => (
  <div className="card-body card-back">
    {/* Kurumsal müşteri için özel içerik buraya eklenebilir */}
    <p>Bu kart kurumsal müşteri içeriğini temsil eder.</p>
  </div>
);

const Register: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="section section-signup"
      style={{
        backgroundImage: `url("/images/family.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "800px",
      }}
    >
      <Container id="sign">
        <Row>
          <Card
            className={`card-signup ${isFlipped ? "is-flipped" : ""}`}
            data-background-color="blue"
            style={{ borderRadius: 24 }}
          >
            <p className="text-center"> CarRentex</p>
            <CardHeader className="text-center">
              <CardTitle className="title-in" tag="h2">
                Kayıt ol
              </CardTitle>
              <Button
                className="btn-neutral btn-round"
                color="info"
                onClick={handleFlip}
              >
                Döndür
              </Button>
            </CardHeader>
            <Form>
              {isFlipped ? (
                /* Kurumsal müşteri kartı */
                <CorporateCustomerCard />
              ) : (
                /* Bireysel müşteri kartı */
                <PersonalCustomerCard />
              )}
            </Form>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
