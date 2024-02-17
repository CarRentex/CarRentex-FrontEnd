import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About/About";
import Model from "./pages/Model/Model";
import Footer from "./components/Footer/Footer";
import IndexNavbar from "./components/Navbar/Navbar";
import Payment from "./pages/Payment/Payment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contact/Contact";
import "./index.css";
import ReduxProvider from "./redux/providers/ReduxProvider";
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
          </Routes>
        </div>
        <Footer />
      </ReduxProvider>
    </div>

    // </Layout>
  );
}

export default App;
