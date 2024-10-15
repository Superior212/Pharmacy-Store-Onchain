import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Select } from "../ui/select";
import CustomInput from "./Input";



const Product = () => {

  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required("Please enter your first name"),
      lastName: yup.string().required("Please enter your last name"),
      description: yup.string().required("Please enter your description"),
      isWalletVerified: yup.boolean().required(),
      yearsOfExperience: yup.string().required("Please enter your experience"),
      clinicName: yup.string().required("Please enter your clinic name"),
      licenceNumber: yup.string().required("Please enter your licence number"),

    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HealthOfficerFormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="w-full flex flex-col gap-6">
    <div className="flex flex-col md:flex-row w-full gap-14">
      <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">

      <div>
      <CustomInput
        validationProps={register("firstName")}
        className="w1/2"
        placeholder="Your First Name"
      ></CustomInput>
      {errors && errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )}
    </div>

    <div>
      <CustomInput
        validationProps={register("lastName")}
        className="w1/2"
        placeholder="Your Last Name"
      ></CustomInput>
      {errors && errors.lastName && (
        <p className="text-red-500">{errors.lastName.message}</p>
      )}
    </div>

    <div>
      <CustomInput
        validationProps={register("description")}
        className="w1/2"
        placeholder="Your Description"
      ></CustomInput>
      {errors && errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
    </div>
      </section>
    
      <section className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">
      <div>
      <CustomInput
        validationProps={register("yearsOfExperience")}
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
        placeholder="Medical License Number"
      ></CustomInput>
      {errors && errors.licenceNumber && (
        <p className="text-red-500">{errors.licenceNumber.message}</p>
      )}
    </div> 

    <div>
      <CustomInput
        validationProps={{}}
        className="w1/2"
        placeholder="Upload Medical Certificate"
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

      <button type="submit" className="w-full md:w-[60%] lg:w-[93%] text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg">Submit</button>
    </div>
    </div>
  </form>
  )
}

export default Product
