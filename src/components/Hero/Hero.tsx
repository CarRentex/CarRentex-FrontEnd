import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Styles/_hero.scss";
import AnimateReveal from '../Animation/AnimateReveal';



type Props = {}

const Hero = (props: Props) => {
    const [goUp, setGoUp] = useState(false);

/*     const scrollToTop = () => {
      window.scrollTo({ top: (0), behavior: "smooth" });
    }; */
  
    const details = () => {
      window.scrollTo({ top: (2600), behavior: "smooth" });
    };
  
    useEffect(() => {
      const onPageScroll = () => {
        if (window.pageYOffset > 600) {
          setGoUp(true);
        } else {
          setGoUp(false);
        }
      };
      window.addEventListener("scroll", onPageScroll);
  
      return () => {
        window.removeEventListener("scroll", onPageScroll);
      };
    }, []);
    return (
      <>
              <section
        id="home"
        className="hero-section clear-filter"
        style={{
          background: `url("/images/car/car4.jpeg") center/cover no-repeat`,
          height: "100vh",
        }}
        filter-color="blue"
        
        >
      <AnimateReveal direction="from-left" delay={100}>
          <div className="container " >
            <div className="hero-content " >
              <div className="hero-content__text">
                <h4>Seyahatinizi Şimdi Planlayın</h4>
                <h1>
                  Hey! <span>CarRentex</span> ile eşsiz bir yolculuğa hazır mısın?
                </h1>
                <p>
                Hayalinizdeki arabayı kiralayın. Rakipsiz fiyatlar, sınırsız mil, esnek teslim alma seçenekleri ve çok daha fazlası.
                </p>
                <div className="hero-content__text__btns">
                  <Link
                    className="hero-content__text__btns__book-ride"
                    to="/model"
                  >
                    Başla &nbsp; <i className="fa-solid fa-circle-check"></i>
                  </Link>
                  <Link className="hero-content__text__btns__learn-more" onClick={details} to="">
                    Detaylar &nbsp; <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  
          {/* <div
            onClick={scrollToTop}
            className={`scroll-up ${goUp ? "show-scroll" : ""}`}
          >
            <FaArrowUp />
          </div> */}
        </AnimateReveal>
        </section>
      </>
    );
  }
  
  export default Hero;
  