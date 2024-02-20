import { Link } from "react-router-dom";
import "./HeroPages.scss";

interface HeroPagesProps {
  name: string;
}

const HeroPages: React.FC<HeroPagesProps> = ({ name }) => {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            {/* <h3>CarRentex İletişim</h3> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPages;
