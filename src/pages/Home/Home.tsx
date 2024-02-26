import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import RentalConditions from '../../components/RentalConditions/RentalConditions'
import Campaign from '../../components/Campaign/Campaign'
import SignIn from '../../components/SıgnIn/SıgnIn'
import BookingSection from '../../components/FilterCars/FilterCar'
import FilterReservation from '../../components/FilterReservation/FilterReservation'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Hero />
    <FilterReservation />

    <Campaign />
    {/* <SignIn /> */}
    <Banner />
    <RentalConditions />
    </>

  )
}

export default Home