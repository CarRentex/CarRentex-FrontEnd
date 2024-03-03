import { Route, Routes, redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import IndexNavbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contact/Contact";
import "./index.css";
import ReduxProvider from "./store/providers/ReduxProvider";
import Register from "./pages/Register/Register";
import SignIn from "./components/SıgnIn/SıgnIn";
import Model from "./pages/Model/Model";
import ProfilePage from "./components/User/UserProfile";
import Settings from "./components/User/deneme";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import AdminLayout from "./components/admin/AdminLayout";
import AddCar from "./pages/admin/AddCar";
import useToken from "./lib/useToken";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import RentalInfo from "./pages/Rental/Rental";
import Payment from "./components/Payment/Payment";
import RentalForm from "./components/Rental/RentalForm";
import Car from "./pages/admin/Car/Car";
import Brand from "./pages/admin/Brand/Brand";
function App() {
  const isOnAdminPage = window.location.pathname.indexOf('/admin') === 0;
  const location = useLocation();

  return (
    // <Layout>
    <div>
      <ReduxProvider>
        <ToastContainer />
        {!isOnAdminPage && <IndexNavbar /> }
        <div style={{ minHeight: "100vh" }}>
        {isOnAdminPage  ? (
            <AdminLayout>
              <Routes>
                <Route path="/admin" element={<Dashboard />}></Route>
                <Route path="/admin/car" element={<Car />}></Route>
                <Route path="/admin/brand" element={<Brand />}></Route>
              </Routes>
            </AdminLayout>
          ):(
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/model" element={<Model />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="/user" element={<ProfilePage />}></Route>
            <Route path="/deneme" element={<Settings  />}></Route>
            <Route path="/rental" element={<RentalInfo  />}></Route>
            <Route path="/payment" element={<Payment  />}></Route>
            <Route path="/form" element={<RentalForm  />}></Route>
          </Routes>

          )}

       
        </div>
      {!isOnAdminPage && <Footer/>}   
      </ReduxProvider>
    </div>

  );
}

export default App;
