import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
