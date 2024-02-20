import { FaEnvelope, FaKey } from "react-icons/fa";
import { Button, Form, Input, InputGroup, InputGroupText, Container, Row, CardHeader, CardTitle, Card } from "reactstrap";

const SignIn = () => {
  

  return (
    <div
      className="section section-signup"
      style={{
        // backgroundImage: `url("/images/family.jpg")`,
        // backgroundSize: "cover",
        // backgroundPosition: "top center",
        // minHeight: "700px",
      }}
    >
    <Container>
      <Row>
      <Card className="card-signup" data-background-color="blue" style={{borderRadius: 24}}>
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Kayıt Ol
                    </CardTitle>
                  </CardHeader>
              <Form>
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
                  <Button className="btn-neutral btn-round" color="info" type="submit">
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

export default SignIn;