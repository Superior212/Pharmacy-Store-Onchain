import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as yup from "yup";
import CustomInput from "./Input";
import { useWriteContract } from 'wagmi'
import { UserManagementContract } from "@/constant";

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";



const Product = () => {

  const { isPending, isSuccess, isError, writeContract } = useWriteContract()

  const schema = yup
    .object()
    .shape({
      category: yup.string().required("Please enter category"),
      expiryDate: yup.number().required("Please enter expiry date"), 
      id: yup.number().required("Please enter id"),
      imageUrl: yup.string().required("Please enter image url"),
      isPrescriptionRequired: yup.boolean(),
      pricePerUnit: yup.number().required("Please enter price per product"),
      productName: yup.string().required("Please enter product name"),
      stockQuantity: yup.number().required("Please enter stock quantity for product"),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInfo>({
    resolver: yupResolver(schema),
  });


  const handleHealthOfficerSubmission = (data:UserInputs) => {
  
    writeContract({
      address: "0x798AA46f2caBdd946e0b0E7192dD973b276B8fAC",
      abi:UserManagementContract.abi,
      functionName: 'registerPatient',
      args: [data.firstName, data.lastName, data.dateOfBirth, data.description],
    })
    
    
    if(isSuccess) {
      reset();
    }
    
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
    <form onSubmit={handleSubmit((data) => console.log(data))} className="w-full flex flex-col gap-6">
    <div className="flex flex-col md:flex-row w-full gap-14">
      <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

      <div>
      <CustomInput
        validationProps={register("firstName")}
        className="w1/2"
        placeholder="Enter drug/product name"
      ></CustomInput>
      {errors && errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )}
    </div>

    <div>
      <CustomInput
        validationProps={register("lastName")}
        className="w1/2"
        placeholder="Category(OTC,Prescription,Wellness, Supplement)"
      ></CustomInput>
      {errors && errors.lastName && (
        <p className="text-red-500">{errors.lastName.message}</p>
      )}
    </div>

    <div>
      <CustomInput
        validationProps={register("description")}
        className="w1/2"
        placeholder="Enter brand/manufacturer name"
      ></CustomInput>
      {errors && errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
    </div>
      </section>
    
      <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">
      <div>
      <CustomInput
        validationProps={register("Enter price in ETH or local currency")}
        className="w1/2"
        placeholder="Years of Experience"
      ></CustomInput>
      {errors && errors.yearsOfExperience && (
        <p className="text-red-500">{errors.yearsOfExperience.message}</p>
      )}
    </div>

    <div>
      <Select>
        
      </Select>
      {/* <CustomInput
        validationProps={register("clinicName")}
        className="w1/2"
        placeholder="Clinic/Hospital Name"
      ></CustomInput> */}
      {errors && errors.clinicName && (
        <p className="text-red-500">{errors.clinicName.message}</p>
      )}
    </div>

    <div>
      <CustomInput
        validationProps={register("licenceNumber")}
        className="w1/2"
        placeholder="Enter quantity in stock"
      ></CustomInput>
      {errors && errors.licenceNumber && (
        <p className="text-red-500">{errors.licenceNumber.message}</p>
      )}
    </div> 

    <div>
      <CustomInput
        validationProps={{}}
        className="w1/2"
        placeholder="Expiry Date"
      ></CustomInput>
      {/* {errors && errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )} */}
    </div>

    <div>
      <CustomInput
        validationProps={{}}
        className="w1/2"
        placeholder="Price input"
      ></CustomInput>
      {/* {errors && errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )} */}
    </div>

    <div>
      <CustomInput
        validationProps={{}}
        className="w1/2"
        placeholder="Upload image"
      ></CustomInput>
      {/* {errors && errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )} */}
    </div>


    <div>
      <CustomInput
        validationProps={{}}
        className="w1/2"
        placeholder="Description"
      ></CustomInput>
      {/* {errors && errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )} */}
    </div>

      </section>

    <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

      <label htmlFor="isWalletVerified" className="text-sm text-gray-500 flex items-center gap-5">
        <input type="checkbox" required className="w-6 h-6" name="isWalletVerified" />
        I consent to the terms and conditions
      </label>

      <button type="submit" disabled={isPending} className="w-full md:w-[60%] lg:w-[93%] text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg">
        {isPending ? "Processing..." : "Submit"}
      </button>
    </div>
    </div>
  </form>
  )
}

export default Product
