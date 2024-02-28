import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const AdminAsideBar = () => {

  return (
    <div className="flex flex-col items-center w-full max-w-[300px]">
      <Button >Araba Ekle</Button>
    </div>
  );
};

export default AdminAsideBar;
