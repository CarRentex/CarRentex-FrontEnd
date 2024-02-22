import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About/About";
import Model from "./pages/Model/Model";
import Footer from "./components/Footer/Footer";
import IndexNavbar from "./components/Navbar/Navbar";
import Payment from "./pages/Payment/Payment";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contact/Contact";
import "./index.css";
import ReduxProvider from "./store/providers/ReduxProvider";
import Register from "./pages/Register/Register";
import SignIn from "./components/SıgnIn/SıgnIn";
import testbrand from "./pages/test";
import Testbrand from "./pages/test";
function App() {
  return (
    // <Layout>
    <div>
      <ReduxProvider>
        <ToastContainer />
        <IndexNavbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/model" element={<Model />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<SignIn/>}></Route>
            <Route path="/test" element={<Testbrand/>}></Route>
          </Routes>
        </div>
        <Footer />
      </ReduxProvider>
    </div>

    // </Layout>
  );
}

export default App;
