import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import RentalConditions from '../../components/RentalConditions/RentalConditions'
import Campaign from '../../components/Campaign/Campaign'
import SignIn from '../../components/SıgnIn/SıgnIn'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Hero />
    {/* <Header src = '/images/car/car4.jpeg'/> */}
    <Campaign />
    <SignIn />
    <Banner />
    <RentalConditions />
    </>

  )
}

export default Home