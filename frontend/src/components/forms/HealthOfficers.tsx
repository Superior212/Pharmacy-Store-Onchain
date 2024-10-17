import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CustomInput from "./Input";
import { useWriteContract } from 'wagmi'
import { UserManagementContract } from "@/constant";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


const HealthOfficers = () => {

  const { isPending, isSuccess, isError, writeContract } = useWriteContract()

  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required("Please enter your first name"),
      lastName: yup.string().required("Please enter your last name"),
      description: yup.string().required("Please enter your description"),
      isInAgreement: yup.boolean().required(),
      yearsOfExperience: yup.number().required("Please enter your experience"),
      licenceNumber: yup.string().required("Please enter your licence number"),
      clinicName: yup.string().required("Please enter clinic of active service"),
      medicalCertificateHash: yup.string().required("Please enter Certification"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HealthOfficerFormInputs>({
    resolver: yupResolver(schema),
  });


  const handleSubmission = (data:HealthOfficerFormInputs) => {

    writeContract({
      address: "0x798AA46f2caBdd946e0b0E7192dD973b276B8fAC",
      abi:UserManagementContract.abi,
      functionName: 'registerDoctor',
      args: [data.firstName, data.lastName, data.description, data.yearsOfExperience, data.clinicName, data.licenceNumber, data.medicalCertificateHash]
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
  
  
  const error = "text-red-400";

  return (
    <form onSubmit={handleSubmit((data) => handleSubmission(data))} className="w-full flex flex-col gap-6">
      <div  className="flex flex-col md:flex-row w-full gap-6 md:gap-14">
        <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">
        <div>
        <CustomInput
          validationProps={register("firstName")}
          className={`w1/2 border-[2px] ${errors.firstName ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Your First Name"
        ></CustomInput>
        {errors && errors.firstName && (
          <p className={`${error}`}>{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <CustomInput
          validationProps={register("lastName")}
          className={`w1/2 border-[2px] ${errors.lastName ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Your Last Name"
        ></CustomInput>
        {errors && errors.lastName && (
          <p className={`${error}`}>{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <CustomInput
          validationProps={register("description")}
          className={`w1/2 border-[2px] ${errors.description ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Your Description"
        ></CustomInput>
        {errors && errors.description && (
          <p className={`${error}`}>{errors.description.message}</p>
        )}
      </div>

            <div>
        <CustomInput
          validationProps={register("clinicName")}
          className={`w1/2 border-[2px] ${errors.clinicName ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Clinic/Hospital Name"
        ></CustomInput>
        {errors && errors.clinicName && (
          <p className={`${error}`}>{errors.clinicName.message}</p>
        )}
      </div>
        </section>

        <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">
        <div>
        <CustomInput
          validationProps={register("yearsOfExperience")}
          className={`w1/2 border-[2px] ${errors.yearsOfExperience ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Years of Experience"
        ></CustomInput>
        {errors && errors.yearsOfExperience && (
          <p className={`${error}`}>{errors.yearsOfExperience.message}</p>
        )}
      </div>

      <div>
        <CustomInput
          validationProps={register("licenceNumber")}
          className={`w1/2 border-[2px] ${errors.licenceNumber ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Medical License Number"
        ></CustomInput>
        {errors && errors.licenceNumber && (
          <p className={`${error}`}>{errors.licenceNumber.message}</p>
        )}
      </div> 

      <div>
        <CustomInput
          validationProps={register("medicalCertificateHash")}
          className={`w1/2 border-[2px] ${errors.medicalCertificateHash ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Upload Medical Certificate"
        ></CustomInput>
        {errors && errors.medicalCertificateHash && (
          <p className={`${error}`}>{errors.medicalCertificateHash.message}</p>
        )}
      </div>

        </section>
      </div>

      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

        <label htmlFor="isInAgreement" className="text-sm text-gray-500 flex items-center gap-5">
          <input {...register("isInAgreement")} type="checkbox" className="w-6 h-6" name="isWalletVerified" required />
          I consent to the terms and conditions
        </label>

        <button type="submit" disabled={isPending} className="w-full md:w-[60%] lg:w-[93%] text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg hover:bg-blue-400 transition-colors">{isPending ? "Processing..." : "Submit"}</button>
      </div>
      
    </form>
  )
}

export default HealthOfficers
