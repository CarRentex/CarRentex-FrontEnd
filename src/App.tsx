import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import About from "./pages/About/About";

function App() {
  return (
    <>
    <Navbar />
    <div style={{minHeight: "100vh"}}>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
