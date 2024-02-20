import { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import "./Login.css";
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
import AnimateReveal from "../../components/Animation/AnimateReveal";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../services/auth";
import { toast } from "react-toastify";

type InputType = {
  email: string;
  password: string;
};


const Login =() => {
  const [lastFocus, setLastFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const { register, handleSubmit, reset } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = (data) => {
    login(data.email, data.password)
      .then(() => {
        toast.success("Giriş Başarılı");
      })
      .catch(() => {
        toast.error("Giriş Başarısız");
      });
    reset();

    console.log(data);
  };

  return (
    <>
      <AnimateReveal direction="from-left" delay={300}>
        <div
          className="section section-signup"
          style={{
            backgroundImage: `url("/images/family.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
          }}
        >
          <Container>
            <Row>
              <Card className="card-signup" data-background-color="blue" style={{borderRadius: 25}}>
                <Form action="" className="form" method="" onSubmit={handleSubmit(onSubmit)}>
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Giriş Yap
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup className={"no-border" + (emailFocus ? " input-group-focus" : "")}>
                      <InputGroupText>
                        <FaEnvelope />
                      </InputGroupText>
                      <Input
                      id="email"
                        placeholder="Email..."
                        type="text"
                        onFocus={() => setEmailFocus(true)}
                        {...register("email", { required: true })}
                      />
                    </InputGroup>
                    <InputGroup className={"no-border" + (lastFocus ? " input-group-focus" : "")}>
                      <InputGroupText>
                        <FaKey />
                      </InputGroupText>
                      <Input
                        id="password"
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

export default Login;