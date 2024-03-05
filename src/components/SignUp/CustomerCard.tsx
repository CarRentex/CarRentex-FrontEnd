import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  Button,
  Row,
  Col,
  Form,
} from "reactstrap";
import {
  FaAddressCard,
  FaCity,
  FaEnvelope,
  FaFingerprint,
  FaKey,
  FaPhone,
} from "react-icons/fa";
import { CreateRegister } from "../../models/Auth/CreateRegister";
import { register } from "../../services/AuthService/auth";
import { toast } from "react-toastify";
import CityService from "../../services/CityService";

const CustomerCard: React.FC = () => {
  const [cities, setCities] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<number>(0);
  const [formData, setFormData] = useState<CreateRegister>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    cityId: 0,
    districtId: 0,
    address: "",
    role: "CUSTOMER",
  });

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await CityService.getAll();
        setCities(response.data as any);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCityId = parseInt(e.target.value);
    setSelectedCityId(newCityId);

    const selectedCity = cities.find((city) => city.id === newCityId);
    if (selectedCity) {
      setDistricts(selectedCity.districts);
      setFormData({ ...formData, cityId: newCityId, districtId: 0 });
    }
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, districtId: parseInt(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(formData);
      toast.success("Kayıt Başarılı!");
    } catch (error) {
      toast.error("Kayıt Başarısız!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="email"
              placeholder="Email..."
              type="email"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaPhone />
            </InputGroupText>
            <Input
              id="phoneNumber"
              placeholder="Telefon Numarası"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="name"
              placeholder="Ad"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaKey />
            </InputGroupText>
            <Input
              id="confirmPassword"
              placeholder="Şifreyi Onayla"
              type="password"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaCity />
            </InputGroupText>
            <Input
              id="cityId"
              placeholder="İl"
              type="select"
              onChange={handleCityChange as any}
              value={selectedCityId}
            >
              <option value={0}>İl Seçiniz</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </Input>
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaEnvelope />
            </InputGroupText>
            <Input
              id="surname"
              placeholder="Soyad"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaFingerprint />
            </InputGroupText>
            <Input
              id="nationality"
              placeholder="Tc Kimlik No"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaCity />
            </InputGroupText>
            <Input
              id="districtId"
              placeholder="İlçe"
              type="select"
              onChange={handleDistrictChange as any}
              value={formData.districtId}
            >
              <option value={0}>İlçe Seçiniz</option>
              {districts.map((district) => (
                <option key={district.id} value={district.id}>{district.name}</option>
              ))}
            </Input>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupText>
              <FaAddressCard />
            </InputGroupText>
            <Input
              id="address"
              placeholder="Adres"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
      </Row>
      <div className="text-center">
        <Button className="btn-neutral btn-round" color="info" type="submit">
          Kayıt Ol
        </Button>
      </div>
    </Form>
  );
};

export default CustomerCard;
