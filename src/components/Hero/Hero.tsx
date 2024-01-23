import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Styles/_index.scss";
import { FaArrowUp} from 'react-icons/fa';


type Props = {}

const Hero = (props: Props) => {
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({ top: (0), behavior: "smooth" });
    };
  
    const bookBtn = () => {
        // tuşa basıldığında kullanışacak redux fonksiyonu
      
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
        <section id="home" className="hero-section">
          <div className="container">
            {/* <img src="../../images/back.jpeg"/> */}
            <div className="hero-content">
              <div className="hero-content__text">
                <h4>Plan your trip now</h4>
                <h1>
                  Save <span>big</span> with our car rental
                </h1>
                <p>
                  Rent the car of your dreams. Unbeatable prices, unlimited miles,
                  flexible pick-up options and much more.
                </p>
                <div className="hero-content__text__btns">
                  <Link
                    onClick={bookBtn}
                    className="hero-content__text__btns__book-ride"
                    to="/"
                  >
                    Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                  </Link>
                  <Link className="hero-content__text__btns__learn-more" to="/">
                    Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
  
              {/* img */}
              {/* <img
              src="../../images/car/car5.jpeg"
              alt="car-img"
              className="hero-content__car-img"
            /> */}
             
            </div>
          </div>
  
          {/* page up */}
          <div
            onClick={scrollToTop}
            className={`scroll-up ${goUp ? "show-scroll" : ""}`}
          >
            <FaArrowUp />
          </div>
        </section>
      </>
    );
  }
  
  export default Hero;
  