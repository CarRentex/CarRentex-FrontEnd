// SignIn.tsx
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addSignIn, loginSuccess } from "../../store/signInSlice";
import { AppDispatch } from "../../store/store";
import useToken from "../../lib/useToken";
import "./SıgnIn.css";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { decodedToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await dispatch(
        addSignIn({ email: values.email, password: values.password })
      );
      if ("error" in response) {
        // handle error
      } else {
        const userPayload = {
          id: decodedToken?.id || 0,
          email: decodedToken?.emailAddress || "",
          role: decodedToken?.role || "",
        };
        dispatch(loginSuccess(userPayload));

        // setSuccessMessage("Hoşgeldiniz! Giriş başarılı.");
        navigate("/"); // Redirect to home page
        window.location.reload(); // Reload the page
      }
    } catch (error) {
      console.error("Redux action dispatch hatası:", error);
      // setErrorMessage("Giriş başarısız. Lütfen tekrar deneyin.");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Geçerli bir e-posta adresi giriniz")
        .required("E-posta adresi boş geçilemez"),
      password: Yup.string().required("Şifre boş geçilemez"),
    }),
    onSubmit: handleSubmit,
  });

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

export default SignIn;
