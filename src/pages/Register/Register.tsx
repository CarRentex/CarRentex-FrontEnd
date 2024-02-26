import React, { useState } from "react";
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
import CustomerCard from "../../components/SignUp/CustomerCard";
import CorporateCustomerCard from "../../components/SignUp/CorporateCustomerCard";

const Register: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const getTitleText = () => {
    return isFlipped ? "Kurumsal Kayıt Ol" : "Bireysel Kayıt Ol";
  };

  const getButtonText = () => {
    return isFlipped ?   "Bireysel'e Kayıt Ol" : "Kurumsal'a Kayıt Ol";
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
      <Container id="sign" className="signUp">
        <Row>
          <Card
            className={`card-signup ${isFlipped ? "is-flipped" : ""}`}
            data-background-color="blue"
            style={{ borderRadius: 24 , padding : '12.9px' , opacity : '0.9'}}
          >
            <p className="text-center"> CarRentex</p>
            <CardHeader className="text-center">
              <CardTitle className="title-in" tag="h2">
                {getTitleText()}
              </CardTitle>
            </CardHeader>
              {isFlipped ? (
                /* Kurumsal müşteri kartı */
                <CorporateCustomerCard />
              ) : (
                /* Bireysel müşteri kartı */
                <CustomerCard />
              )}

            <div className="text-center">
              <Button
                className="btn-neutral btn-round"
                color="info"
                onClick={handleFlip}
                type="submit"
              >
                {getButtonText()}
              </Button>
            </div>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
