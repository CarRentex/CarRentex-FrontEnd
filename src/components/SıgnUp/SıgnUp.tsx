import React, { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Container,
  Row,
} from "reactstrap";
import AnimateReveal from "../Animation/AnimateReveal";

interface SignUpProps {}

// const customStyle = {
//   backgroundColor: 'rgba(255, 255, 255, 0.8)', // 0.8 şeffaflık
//   opcity: '1.6',
// };


const SignUp: React.FC<SignUpProps> = () => {
  const [lastFocus, setLastFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  return (
    <>
      <AnimateReveal direction="from-left" delay={300}>
        <div
          className="section section-signup"
          style={{
            backgroundImage: `url(${require("../../images/family.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
          }}
        >
          <Container>
            <Row>
              <Card className="card-signup" data-background-color="blue">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Giriş Yap
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border" + (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupText>
                        <FaEnvelope />
                      </InputGroupText>
                      <Input
                        placeholder="Email..."
                        type="text"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupText>
                        <FaKey />
                      </InputGroupText>
                      <Input
                        placeholder="Şifre..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Giriş Yap
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Row>
          </Container>
        </div>
      </AnimateReveal>
    </>
  );
};

export default SignUp;
