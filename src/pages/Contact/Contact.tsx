import React from 'react'
import AnimateReveal from '../../components/Animation/AnimateReveal'
import { useForm, SubmitHandler } from "react-hook-form";
import { FaMapMarker } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";



type InputType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = (formData) => {
    window.location.href = `mailto: sinavdocenti@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. This is my email address: ${formData.email}`;
    reset();
  };
  return (
    <div className="mt-40" id="contact">
    <AnimateReveal>
  
      <div className="text-blue-400flex flex-col items-center">
        <h5 className="mt-14 text-center text-2xl">Bize Ulaşın</h5>
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <BiLogoGmail size={24} />
            <p className="text-xl">sinavdocenti@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaMapMarker size={24} />{" "}
            <p className="text-xl">İstanbul / Turkiye</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-5 flex flex-col space-y-2"
        >
          <div className="text-blue-400 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              {...register("name")}
              className="contact-input w-full rounded-lg border-blue-400 p-2 placeholder:text-blue-400"
              placeholder="İsim"
              type="text"
            />
            <input
              {...register("email")}
              className="contact-input w-full border-blue-400 rounded-lg p-2 placeholder:text-blue-400"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contact-input rounded-lg border-blue-400 p-2 placeholder:text-blue-400"
            placeholder="Konu"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contact-input rounded-lg border-blue-400 p-2 placeholder:text-blue-400 resize-none"
            placeholder="Mesajınız"
          />

          <button
            type="submit"
            className="rounded-md  bg-indigo-900/70 px-4 py-2 font-bold text-white transition-all duration-200 hover:opacity-70 md:px-10 md:py-5"
          >
            Gönder
          </button>
        </form>
      </div>
    </AnimateReveal>
  </div>
  )
}

export default Contact