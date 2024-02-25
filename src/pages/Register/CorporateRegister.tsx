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

const CorporateRegister: React.FC = () => {
 

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
            className="card-signup"
            data-background-color="blue"
            style={{ borderRadius: 24 }}
          >
            <p className="text-center"> CarRentex</p>
            <CardHeader className="text-center">
              <CardTitle className="title-in" tag="h2">
                Kurumsal
              </CardTitle>
            </CardHeader>
            <Form >
              <InputGroup className="mb-3">
                <InputGroupText>
                  <FaEnvelope />
                </InputGroupText>
                <Input
                  id="email"
                  placeholder="Email..."
                  type="email"
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
                />
              </InputGroup>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-round"
                  color="info"
                  type="submit"
                >
                  Giriş Yap
                </Button>
              </div>
            </Form>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default CorporateRegister;
