import { useState } from "react";
// import { CiUser } from "react-icons/ci";
import Input from "./Input";


const CareProviders = () => {

  const [ formDetails, setFormDetails  ] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    description: "",
    isWalletVerified: false
  });


  // const [ inputStatus, setInputStatus ] = useState({
  //   error: false,
  //   success: true
  // })

  // let inputStatusStyle = "border-[1px] bg-gray-100 border-gray-300";

  // const handleInputState = () => {
  //   if (inputStatus.error) {
  //     return inputStatusStyle = 'border-[1px] bg-red-200 border-red-500'
  //   } else if (inputStatus.success) {
  //     return inputStatusStyle = 'border-[1px] bg-green-200 border-green-500'
  //   } else {
  //     return inputStatusStyle;
  //   }
  // }


  // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (formDetails.firstName === "" || formDetails.lastName === "" || formDetails.gender === "" || formDetails.description === "") {
  //     setInputStatus({error: true, success: false})
  //   }

  //   setFormDetails({firstName: "", lastName: "", gender: "", description: "", isWalletVerified: false})
  // }

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col md:flex-row w-full gap-14">
        <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

          <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} className="w1/2" placeholder="Your First Name"></Input> 

          <Input value={formDetails.lastName} onChange={(e) => setFormDetails({...formDetails, lastName: e.target.value})} placeholder="Your Last Name"></Input> 

          <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} placeholder="Describe Your Yourself"></Input> 

          <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} placeholder="Your First Name"></Input> 

        </section>

        <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

          <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} className="w1/2" placeholder="Your First Name"></Input> 

          <Input value={formDetails.lastName} onChange={(e) => setFormDetails({...formDetails, lastName: e.target.value})} placeholder="Your Last Name"></Input> 

          <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} placeholder="Describe Your Yourself"></Input> 

          <Input value={formDetails.firstName} onChange={(e) => setFormDetails({...formDetails, firstName: e.target.value})} placeholder="Your First Name"></Input> 

        </section>
      </div>

      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

        <label htmlFor="isWalletVerified" className="text-sm text-gray-500 flex items-center gap-5">
          <input type="checkbox" required className="w-6 h-6" name="isWalletVerified" />
          I consent to the terms and conditions
        </label>

        <button type="submit" className="w-full md:w-[60%] lg:w-[93%] text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg">Submit</button>
      </div>
      
    </div>
  )
}

export default CareProviders
