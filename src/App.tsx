import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <Header />
    </div>
    <div className="main">
      <Routes>
          <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
