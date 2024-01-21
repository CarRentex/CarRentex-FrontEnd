import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import SignUp from "./components/SıgnUp/SıgnUp";

function App() {
  return (
    <>
    <Navbar />
      <Header />
      <SignUp />
      <Routes>
          <Route path="/" element={<Home />}></Route>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
