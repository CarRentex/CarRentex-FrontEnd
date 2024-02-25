import React from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Row,
  Col,
} from "reactstrap";
import { FaBuilding, FaUser } from "react-icons/fa";

// CorporateCustomerCard component
const CorporateCustomerCard: React.FC = () => {
  return (
    <>
      <Row>
        <Col md="6">
          {/* First column for company name and contact person */}
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
        </Col>
        <Col md="6">
          {/* Second column for additional corporate information */}
          <InputGroup className="mb-3">
            <InputGroupText>
              {/* Add additional icons or styling as needed */}
            </InputGroupText>
            <Input id="additionalField1" placeholder="Additional Field 1" type="text" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              {/* Add additional icons or styling as needed */}
            </InputGroupText>
            <Input id="additionalField2" placeholder="Additional Field 2" type="text" />
          </InputGroup>
          {/* Add additional input fields for corporate information */}
        </Col>
      </Row>
      {/* Submit button */}
      <div className="text-center">
        <Button className="btn-neutral btn-round" color="info" type="submit">
          Kayıt Ol
        </Button>
      </div>
    </>
  );
};



export default CorporateCustomerCard;