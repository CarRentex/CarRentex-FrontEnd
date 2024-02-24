import React, { useContext, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormGroupContainer } from "../common/Containers";
import { TextInput } from "../common/Inputs";
import Button from "../common/Button";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export type PostParameter = {
  key: string;
  value: string;
  description: string;
};

const AddCarModal = ({ open, setOpen }: Props) => {
  const Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (Ref.current && !Ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    });
  }, [Ref]);

  return (
    <>
      {open && (
        <div className="fixed left-0 top-0 z-[75] flex h-full w-full items-center justify-center bg-[#333333] bg-opacity-90">
          <div
            ref={Ref}
            className={`relative z-50 mx-3 h-[350px] w-[585px] rounded-[16px] bg-white  sm:h-[286px] 
          `}
          >
         <div className="bg-neutral-600 mx-auto my-10 text-center">
            burası dolduracağın yer
         </div>
         <FormGroupContainer>
          <label className="text-black" htmlFor="name">
            Kategori Adı
          </label>
          <TextInput
            id="name"
            placeholder="Kategori adı giriniz"
            className="uppercase text-black"
            defaultValue={"dümenden"}
          />
        </FormGroupContainer>
            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-5">
              <Button
                className="flex w-[240px] items-center justify-center gap-x-[13px] text-sm"
                onClick={() => setOpen(false)}
                variant="secondary"
              >
                Kapat
              </Button>

              <Button
                className="flex w-[240px] items-center justify-center text-sm"
                type="submit"
                variant="secondary-outline"
              >
                oluştur
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCarModal;
