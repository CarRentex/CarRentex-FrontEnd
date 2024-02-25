import React from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import { FaBuilding, FaUser } from "react-icons/fa";

const CorporateCustomerCard: React.FC = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroupText>
          <FaBuilding />
        </InputGroupText>
        <Input id="companyName" placeholder="Şirket Adı..." type="text" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroupText>
          <FaUser />
        </InputGroupText>
        <Input id="contactPerson" placeholder="İrtibat Kişisi..." type="text" />
      </InputGroup>
      <div className="text-center">
        <Button className="btn-neutral btn-round" color="info" type="submit">
          Kayıt Ol
        </Button>
      </div>
    </>
  );
};

export default CorporateCustomerCard;
