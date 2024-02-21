import { FaEnvelope, FaKey } from "react-icons/fa";
import { Button, Form, Input, InputGroup, InputGroupText, Container, Row, CardHeader, CardTitle, Card } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/AuthService/auth";
import { toast } from "react-toastify";
import AnimateReveal from "../Animation/AnimateReveal";

const SignIn = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Geçersiz email adresi").required("Email gerekli"),
      password: Yup.string().required("Şifre gerekli"),
    }),
    onSubmit: (values) => {
      console.log(values);
      login(values)
        .then(() => {
          toast.success("Giriş Başarılı");
        })
        .catch(() => {
          toast.error("Giriş Başarısız");
        });
      formik.resetForm();
    },
  });

  return (
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
      <Card className="card-signup" data-background-color="blue" style={{borderRadius: 24}}>
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Giriş Yap
                    </CardTitle>
                  </CardHeader>
              <Form onSubmit={formik.handleSubmit}>
                <InputGroup className="mb-3">
                  <InputGroupText>
                    <FaEnvelope />
                  </InputGroupText>
                  <Input
                    id="email"
                    placeholder="Email..."
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                </InputGroup>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
                <InputGroup className="mb-3">
                  <InputGroupText>
                    <FaKey />
                  </InputGroupText>
                  <Input
                    id="password"
                    placeholder="Şifre..."
                    type="password"
                    {...formik.getFieldProps("password")}
                  />
                </InputGroup>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
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
  </AnimateReveal>
  );
};

export default SignIn;