import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import RentalConditions from '../../components/RentalConditions/RentalConditions'
import Login from '../Login/Login'
import Campaign from '../../components/Campaign/Campaign'
import AnaBilesen from '../../components/testModel/test'
import App from '../../App'
import Test from '../../components/testModel/test'
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