import { useState } from "react";
// import { CiUser } from "react-icons/ci";
import Input from "./Input";



const Patient = () => {

  const [ formDetails, setFormDetails  ] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    description: "",
    isWalletVerified: false
  });


  const [ inputStatus, setInputStatus ] = useState({
    error: false,
    success: true
  })

  let inputStatusStyle;

  const handleInputState = () => {
    if (inputStatus.error) {
      return inputStatusStyle = 'border-[1px] bg-red-200 border-red-500'
    } else if (inputStatus.success) {
      return inputStatusStyle = 'border-[1px] bg-green-200 border-green-500'
    } else {
      return inputStatusStyle = 'border-[1px] bg-gray-100 border-gray-300'
    }
  }


  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formDetails.firstName === "" || formDetails.lastName === "" || formDetails.gender === "" || formDetails.description === "") {
      setInputStatus({error: true, success: false})
    }

    setFormDetails({firstName: "", lastName: "", gender: "", description: "", isWalletVerified: false})
  }

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">
    
      <Input value={formDetails.firstName} onBlur={handleInputState} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} className="w1/2" placeholder="Your First Name" children={""} /> 

      <Input value={formDetails.lastName} onChange={(e) => setFormDetails({...formDetails, lastName: e.target.value})} placeholder="Your Last Name" children={""} /> 

      <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} placeholder="Describe Your Yourself" children={""} /> 

      <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} placeholder="Your First Name" children={""} /> 

      <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} placeholder="Your First Name" children={""} /> 

      <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} label="First Name" children={""} /> 

      <label htmlFor="isWalletVerified" className="text-sm text-gray-500 flex items-center gap-5">
        <input type="checkbox" required className="w-6 h-6" name="isWalletVerified" />
        I consent to the terms and conditions
      </label>

      <button type="submit" className="w-full text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg" onClick={(e) => handleFormSubmit}>Submit</button>
      
    </div>
  )
}

export default Patient
