// import { CiUser } from "react-icons/ci";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CustomInput from "./Input";


const Patient = () => {
  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required("Please enter your first name"),
      lastName: yup.string().required("Please enter your last name"),
      description: yup.string().required("Please enter your description"),
      isWalletVerified: yup.boolean().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6"
    >
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
          placeholder="Your Last Name"
        ></CustomInput>
        {errors && errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <CustomInput
          validationProps={register("description")}
          placeholder="Describe Your Yourself"
        ></CustomInput>
        {errors && errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <label
        htmlFor="isWalletVerified"
        className="text-sm text-gray-500 flex items-center gap-5"
      >
        <input
          {...register("isWalletVerified")}
          type="checkbox"
          
          className="w-6 h-6"
          name="isWalletVerified"
        />
        I consent to the terms and conditions
      </label>

      <button
        type="submit"
        className="w-full text-2xl text-center text-white bg-[#1364FF] py-3 rounded-lg hover:bg-blue-400 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default Patient;
