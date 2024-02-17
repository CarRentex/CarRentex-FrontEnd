import "./_Banner.scss";
type Props = {}

const Banner = (props: Props) => {
  return (
    <>
    <section className="banner-section">
      <div className="container">
        <div className="banner-content">
          <div className="banner-content__text" >
            <h2>CarRentex İle Eşsiz Araç Kiralama Deneyimi</h2>
            <p>
              Top Airports. Local Suppliers. <span>24/7</span> Support.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Banner