import HeroPages from "../../components/HeroPages/HeroPages";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages path= '/images/sahil.jpeg' />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>CarRentex </h2>
              <p>
                -------------Yazılacak-----------
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (531) 561-0569
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carRentex@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; İstanbul
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  İsim Soyisim <b>*</b>
                </label>
                <input type="text" placeholder='"İsim Soyisim"' />

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="carRentex@gmail.com" />

                <label>
                  Açıklama <b>*</b>
                </label>
                <textarea placeholder="Yazınız..."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Mesaj
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Buradan Ulaşabilirsiniz</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(531) 562-0569</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;













































/* import React from 'react'
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

export default Contact */