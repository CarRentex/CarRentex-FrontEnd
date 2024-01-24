import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Model from "./pages/Model/Model";
import Footer from "./components/Footer/Footer";
import IndexNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    // <Layout>
    <div>
      <IndexNavbar />
      <div style={{minHeight:"100vh"}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/model" element={<Model />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>

    // </Layout>
  );
}

export default App;
