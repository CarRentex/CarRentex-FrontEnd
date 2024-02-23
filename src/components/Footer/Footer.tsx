import "./Styles/_index.scss";
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-auto'>
      <footer style={{
      background: `url("/images/backfooter.jpeg") center/cover no-repeat`,
      }}>

        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rentex
              </li>
              <li>
              Tüm sürüş ihtiyaçlarınız için geniş bir araç yelpazesi sunuyoruz. İhtiyaçlarınızı karşılayacak mükemmel bir araca sahibiz.
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Ofisler</li>
              <li>
                <a href="#home">Sabiha Gökçen Havalimanı</a>
              </li>
              <li>
                <a href="#home">İstanbul Havalimanı</a>
              </li>
              <li>
                <a href="#home">Beşiktaş Ofis</a>
              </li>
              <li>
                <a href="#home">Vadi İstanbul Ofis</a>
              </li>
              <li>
                <a href="#home">Kadıköy Ofis</a>
              </li>
              <li>
                <a href="#home">Yenikapı Ofis</a>
              </li>
              <li>
                <a href="#home">Ataşehir Ofis</a>
              </li>
              <li>
                <a href="#home">Beykoz Ofis</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Çalışma Saatlerimiz</li>
              <li>Pzt - Cuma: 9:00 - 19:00</li>
              <li>Cmt: 9:00AM - 16:00</li>
              <li>Pazar: Kapalı</li>
            </ul>

            <ul className="footer-content__2">
              <li>Abone Ol</li>
              <li>
                <p>Güncel Kampanyalardan haberdar olmak için abone olun.</p>
              </li>
              <li>
                <input type="email" placeholder="Email"></input>
              </li>
              <li>
                <button className="submit-email">Abone ol</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;