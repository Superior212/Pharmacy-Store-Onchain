"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as yup from "yup";
import CustomInput from "./Input";
import { useWriteContract } from 'wagmi'
import { UserManagementContract } from "@/constant";

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


const Patient = () => {

  const { isPending, isSuccess, isError, writeContract } = useWriteContract()

  
  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required("Please enter your first name"),
      lastName: yup.string().required("Please enter your last name"),
      dateOfBirth: yup.string().required("Please enter your date of birth"),
      description: yup.string().required("Please enter your description"),
      isInAgreement: yup.boolean().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserInputs>({
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
    <form
      onSubmit={handleSubmit((data) => handleHealthOfficerSubmission(data))}
      className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6"
    >
      <div>
        <CustomInput
          validationProps={register("firstName")}
          className={`border-[2px] ${errors.firstName ? "border-red-300 bg-red-50" : "border-transparent"}`}
          placeholder="Your First Name"
        ></CustomInput>
        {errors && errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <CustomInput
          validationProps={register("lastName")}
          placeholder="Your Last Name"
          className={`border-[2px] ${errors.lastName ? "border-red-300 bg-red-50" : "border-transparent"}`}
        ></CustomInput>
        {errors && errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <CustomInput
          validationProps={register("dateOfBirth")}
          placeholder="Your Date of Birth"
          className={`border-[2px] ${errors.dateOfBirth ? "border-red-300 bg-red-50" : "border-transparent"}`}
        ></CustomInput>
        {errors && errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth.message}</p>
        )}
      </div>

      <div>
        <CustomInput
          validationProps={register("description")}
          placeholder="Describe Your Yourself"
          className={`border-[2px] ${errors.description ? "border-red-300 bg-red-50" : "border-transparent"}`}
        ></CustomInput>
        {errors && errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <label
        htmlFor="isInAgreement"
        className="text-sm text-gray-500 flex items-center gap-5"
      >
        <input
          {...register("isInAgreement")}
          type="checkbox"
          
          className="w-6 h-6"
          name="isInAgreement"
          required
        />
        I consent to the terms and conditions
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="w-full text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg hover:bg-blue-400 transition-colors"
      >
        {isPending ? "Processing..." : "Submit"}
      </button>

    </form>
  );
};

export default Patient;
