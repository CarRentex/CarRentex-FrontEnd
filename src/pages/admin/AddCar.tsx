import React from "react";
import { useNavigate } from "react-router-dom";
import { FormGroupContainer } from "../../components/common/Containers";
import { Button, Label } from "reactstrap";
import { TextInput } from "../../components/common/Inputs";

const AddCar = () => {
  return (
    <div className="gap-10">
      <h1 className="my-10">Araç Güncelleme</h1>
      <form action="">
        <div className="flex flex-row gap-x-5 items-center">
          <div>
            <FormGroupContainer className="mt-14">
              <Label htmlFor="email" className="font-normal">
                deneme
              </Label>
              <TextInput id="email" className="text-black w-[300px]" />
            </FormGroupContainer>
            <FormGroupContainer className="mt-14">
              <Label htmlFor="email" className="font-normal">
                deneme
              </Label>
              <TextInput id="email"  className="text-black w-[300px]" />
            </FormGroupContainer>
            <FormGroupContainer className="mt-14">
              <Label htmlFor="email" className="font-normal">
                deneme
              </Label>
              <TextInput id="email" className="text-black w-[300px]" />
            </FormGroupContainer>
          </div>
          <div>
            <FormGroupContainer className="mt-14">
              <Label htmlFor="email" className="font-normal">
                deneme
              </Label>
              <TextInput id="email" className="text-black w-[300px]" />
            </FormGroupContainer>
            <FormGroupContainer className="mt-14">
              <Label htmlFor="email" className="font-normal">
                deneme
              </Label>
              <TextInput id="email" className="text-black w-[300px]" />
            </FormGroupContainer>
            <FormGroupContainer className="mt-14">
              <Label htmlFor="email" className="font-normal">
                deneme
              </Label>
              <TextInput id="email" className="text-black w-[300px]" />
            </FormGroupContainer>
          </div>
        </div>
        <Button className="mt-10" type="submit">
          Güncelle
        </Button>
      </form>
    </div>
  );
};

export default AddCar;
