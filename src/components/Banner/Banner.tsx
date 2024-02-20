import "./Styles/_index.scss"
type Props = {}

const Banner = (props: Props) => {
  return (
    <>
    <section className="banner-section clear-filter" filter-color="blue">
      <div className="container">
        <div className="banner-content">
          <div className="banner-content__text" >
            <h2>CarRentex İle Bütçe Dostu Kiralama</h2>
            <p>
                En İyi Havalimanları. Yerel Tedarikçiler. <span>7/24</span> Destek.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Banner