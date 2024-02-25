import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Button, Form, Input, InputGroup, InputGroupText, Container, Row, CardHeader, CardTitle, Card } from "reactstrap";

const InstitutionalSignUp = () => {
  const handleSignUp = (e:any) => {
    e.preventDefault();
    // Burada kayıt işlemleri gerçekleştirilebilir
    // Örneğin, formdan alınan verileri kullanarak bir API'ye POST isteği gönderilebilir.
  };

  return (
    <div className="section section-signup">
      <Container>
        <Row>
          <Card className="card-signup" data-background-color="blue" style={{ borderRadius: 24 }}>
            <CardHeader className="text-center">
              <CardTitle className="title-up" tag="h3">
                Kurumsal Kayıt Ol
              </CardTitle>
            </CardHeader>
            <Form onSubmit={handleSignUp}>
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
              <InputGroup className="mb-3">
                <InputGroupText>
                  <FaKey />
                </InputGroupText>
                <Input
                  id="confirmPassword"
                  placeholder="Şifreyi Onayla..."
                  type="password"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupText>
                  <FaKey />
                </InputGroupText>
                <Input
                  id="firstName"
                  placeholder="Adınız..."
                  type="text"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupText>
                  <FaKey />
                </InputGroupText>
                <Input
                  id="lastName"
                  placeholder="Soyadınız..."
                  type="text"
                />
              </InputGroup>
              <div className="text-center">
                <Button className="btn-neutral btn-round" color="info" type="submit">
                  Kayıt Ol
                </Button>
              </div>
            </Form>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default InstitutionalSignUp;
