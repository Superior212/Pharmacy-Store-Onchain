import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CustomInput from "./Input";
import { useWriteContract } from 'wagmi'
import { UserManagementContract } from "@/constant";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


const CareProviders = () => {

  const { isPending, isSuccess, isError, writeContract } = useWriteContract()

  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required("Please enter store owner's name"),
      lastName: yup.string().required("Please enter your store's name"),
      description: yup.string().required("Please enter description to store location"),
      isInAgreement: yup.boolean().required(),
      businessNumber: yup.number().required("Please enter your business number"),
      licenseNumberCertificateHash: yup.string().required("Please enter your licence number"),
      businessNumberCertificate: yup.string().required("Please enter your business certification"),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareProvidersFormInputs>({
    resolver: yupResolver(schema),
  });


  const handleSubmission = (data:CareProvidersFormInputs) => {
    console.log(data);

    writeContract({
      address: "0x798AA46f2caBdd946e0b0E7192dD973b276B8fAC",
      abi:UserManagementContract.abi,
      functionName: 'registerPharmacy',
      args: [data.lastName, data.businessNumber, data.firstName, data.description, data.businessNumberCertificate, data.licenseNumberCertificateHash]
    })
    
    
    isSuccess ? reset() : null;
    
  }
  
  useEffect(() => {
    if (isSuccess) {
      toast.success("Account Registration Successful!!");
    }
    
    if (isError) {
      toast.error("Account Registration Failed!!")
    }
    
  }, [isSuccess, isError]);
  


  return (
    <form onSubmit={handleSubmit((data) => handleSubmission(data))} className="w-full flex flex-col gap-6">
      <div className="flex flex-col w-full gap-6 md:gap-14">
        <div className="flex gap-6 md:gap-14 flex-col md:flex-row">
        <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

        <div>
          <CustomInput
            validationProps={register("firstName")}
            className={`w1/2 border-[2px] ${errors.firstName ? "border-red-300 bg-red-50" : "border-transparent"}`}
            placeholder="Pharmacy Owner's Name"
          ></CustomInput>
          {errors && errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <CustomInput
            validationProps={register("lastName")}
            className={`w1/2 border-[2px] ${errors.lastName ? "border-red-300 bg-red-50" : "border-transparent"}`}
            placeholder="Your Store's Name"
          ></CustomInput>
          {errors && errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <CustomInput
            validationProps={register("description")}
            className={`w1/2 border-[2px] ${errors.description ? "border-red-300 bg-red-50" : "border-transparent"}`}
            placeholder="Your Store Location"
          ></CustomInput>
          {errors && errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        </section>

        <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">
        <div>
          <CustomInput
            validationProps={register("businessNumber")}
            className={`w1/2 border-[2px] ${errors.businessNumber ? "border-red-300 bg-red-50" : "border-transparent"}`}
            placeholder="Enter Your Business Number"
          ></CustomInput>
          {errors && errors.businessNumber && (
            <p className="text-red-500">{errors.businessNumber.message}</p>
          )}
        </div>

        <div>
          <CustomInput
            validationProps={register("licenseNumberCertificateHash")}
            className={`w1/2 border-[2px] ${errors.licenseNumberCertificateHash ? "border-red-300 bg-red-50" : "border-transparent"}`}
            placeholder="Medical License Number"
          ></CustomInput>
          {errors && errors.licenseNumberCertificateHash && (
            <p className="text-red-500">{errors.licenseNumberCertificateHash.message}</p>
          )}
        </div> 

        <div>
          <CustomInput
            validationProps={register("businessNumberCertificate")  }
            className={`w1/2 border-[2px] ${errors.businessNumberCertificate ? "border-red-300 bg-red-50" : "border-transparent"}`}
            placeholder="Upload Medical Certificate"
          ></CustomInput>
          {errors && errors.businessNumberCertificate && (
            <p className="text-red-500">{errors.businessNumberCertificate.message}</p>
          )}
        </div>

        </section>

        </div>
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

        <label htmlFor="isInAgreement" className="text-sm text-gray-500 flex items-center gap-5">
          <input type="checkbox" {...register("isInAgreement")} className="w-6 h-6" name="isInAgreement" required />
          I consent to the terms and conditions
        </label>

        <button type="submit" className="w-full md:w-[60%] lg:w-[93%] text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg hover:bg-blue-400 transition-colors">{isPending ? "Processing..." : "Submit"}</button>
      </div>
      </div>
    </form>
  )
}

export default CareProviders
