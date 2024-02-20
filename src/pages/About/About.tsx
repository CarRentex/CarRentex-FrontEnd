import HeroPages from "../../components/HeroPages/HeroPages";
import "./About.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <section className="about-page">
        <HeroPages path="/images/hakkımızda.jpeg" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src="/images/about-main.jpg"
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>Şirket Hakkında</h3>
              <h2>Araç Kiralamada Yeni Dönem CarRentex ile Başlıyor!</h2>
              <p>
                Araç kiralamada artık uzun prosedürler, sınırlı sayıda seçenek,
                gizli ücret ve sınırlı hizmet ağıyla vedalaşmanın vakti geldi!
                Bundan böyle rent a car hizmetlerinden faydalanmak için firma
                araştırması ve fiyat kıyaslaması yapmaya gerek duymayacaksınız.
                İş,gezi ya da tatil amacıyla araç kiralama hizmetlerine
                ihtiyacınız olduğunda önceliğiniz CarRentex olacak.
                İstanbul merkezli olarak 2023 yılından bu yana faaliyet gösteren, aktif
                bir tempo ile sizlere hizmet sunmaktayız. Havaalanı
                lokasyonlarında da hizmet ağımız mevcut. Uçak seyahatlerinizin
                hemen ardından araba kiralama hizmeti kapsamında seçtiğiniz
                aracı havaalanında teslim alabilir ve yolculuğunuza keyifle
                devam edebilirsiniz. 
                
                Günlük, Aylık ve Uzun Dönem Araç Kiralama
                Hizmetleri | Yurt İçi ve Yurt Dışı Araç Kiralama Hizmetleri |
                Rent a car | Kiralık araç | Ucuz Kiralık Araç | İstanbul Rent a
                car
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  {/* <img src={Box1} alt="car-icon" /> */}
                  <span>
                    <h4>20</h4>
                    <p>Araç Tipi</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <img src={Box2} alt="car-icon" /> */}
                  <span>
                    <h4>11</h4>
                    <p>Kiralama Ofisi</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <img src={Box3} alt="car-icon" className="last-fk" /> */}
                  <span>
                    <h4>75</h4>
                    <p>Servis</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <PlanTrip /> */}
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Buradan Ulaşabilirsiniz</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(531) 561-0569</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
