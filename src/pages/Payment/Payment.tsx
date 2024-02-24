import React from "react";
import BrandService from "../../services/BrandService";
import AddCarModal from "../../components/modals/AddCarModal";
import Button from "../../components/common/Button";

type Props = {};

const Payment = (props: Props) => {
  const [addParameterPopupOpen, setAddParameterPopupOpen] =
    React.useState(false);

  return (
    <div>
      <Button className="mt-40 ml-10" onClick={() => setAddParameterPopupOpen(true)}>asdsadas</Button>
      <AddCarModal
        open={addParameterPopupOpen}
        setOpen={setAddParameterPopupOpen}
      />
    </div>
  );
};

export default Payment;
