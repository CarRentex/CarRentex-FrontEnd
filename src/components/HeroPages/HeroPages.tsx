import "./HeroPages.scss";

interface HeroPagesProps {
  path: string;
}

const HeroPages: React.FC<HeroPagesProps> = ({path }) => {
  return (
    <>
      <section className="hero-pages" style={{backgroundImage: `url(${path})`}}>
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            {/* <h1>Kiralık Araçlarımız</h1> */}
            {/* <h3>CarRentex İletişim</h3> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPages;
