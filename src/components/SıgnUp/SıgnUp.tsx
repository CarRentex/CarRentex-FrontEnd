import { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import "./SıgnUp.css";
import {
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
import AnimateReveal from "../Animation/AnimateReveal";
import { FormGroupContainer } from "../common/Containers";
import { PasswordInput, TextInput } from "../common/Inputs";
import Button from "../common/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../../services/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type InputType = {
  email: string;
  password: string;
};

const SignUp = () => {
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
          className=" "
          style={{
            backgroundImage: `url("/images/family.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
          }}
        >
          <Container>
            <Card className="card-signup">
            <div className="pt-20 text-white">
              <Form
               action=""
                className="bg-zinc-600 " 
                onSubmit={handleSubmit(onSubmit)}
                >
                <h1> Giriş Yap</h1>

                <FormGroupContainer className="mt-14">
                  <label htmlFor="email" className="font-normal text-white">
                    Email
                  </label>
                  <TextInput
                   id="email"
                    className="text-black"
                    {...register("email", { required: true })}
                     />
                </FormGroupContainer>
                <FormGroupContainer className="mt-8">
                  <label htmlFor="password" className="font-normal text-white">
                    Şifre
                  </label>
                  <PasswordInput
                   id="password" 
                   className="text-black"
                    {...register("password", { required: true })}
                    />
                </FormGroupContainer>
                <button type="submit" className="mt-10 flex w-48 items-center justify-center rounded-3xl bg-neutral-950 p-2 text-white">
                  Giriş Yap
                </button>
              </Form>
            </div>
          </Card>
          </Container>
        </div>
      </AnimateReveal>
    </>
  );
};

export default SignUp;
