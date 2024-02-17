import Hero from '../../components/Hero/Hero'
import SignUp from '../../components/SıgnUp/SıgnUp'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Hero />
    <Header src = '/images/car/car4.jpeg'/>
    <SignUp />
    </>

  )
}

export default Home