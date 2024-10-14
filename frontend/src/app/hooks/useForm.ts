import { useState } from "react";


export const useForm = () => {

  const [ formDetails, setFormDetails  ] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    description: "",
    isWalletVerified: false
  });

  return {formDetails, setFormDetails}

}