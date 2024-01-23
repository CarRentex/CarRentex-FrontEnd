import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex flex-col gap-y-5">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
