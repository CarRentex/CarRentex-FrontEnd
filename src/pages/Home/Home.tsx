import Hero from '../../components/Hero/Hero'
import SignUp from '../../components/SıgnUp/SıgnUp'
import Header from '../../components/Header/Header'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Header/>
    <SignUp />
    <Hero />
    </>

  )
}

export default Home