import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import Button from "../../components/common/Button";
import InstitutionalSignUp from "../../components/SignUp/InstitutionalSignUp";

type Props = {};

const Register = (props: Props) => {
  const [status, setStatus] = React.useState("kurumsal");
  return (
    <div>
      <div className="flex mt-40 mx-auto justify-center items-center gap-x-5">
        <Button onClick={() => setStatus("kurumsal")}>KURUMSAL</Button>
        <Button onClick={() => setStatus("bireysel")}>BİREYSEL</Button>
      </div>
      {
        status === "kurumsal" ? <SignUp /> : <InstitutionalSignUp/>
      }
      
    </div>
  );
};

export default Register;
