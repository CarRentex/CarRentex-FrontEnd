import React from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import { FaEnvelope, FaKey } from "react-icons/fa";

const CustomerCard: React.FC = () => {
  return (
    <>
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
          Kayıt Ol
        </Button>
      </div>
    </>
  );
};

export default CustomerCard;
