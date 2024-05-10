import Lottie from 'lottie-react';
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import registerl from "../../public/register.json"

const Register = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [successRegister, setSuccessRegister] = useState('')
  const {register,
    handleSubmit,
    formState: { errors },watch, } = useForm();
    const password = watch("Password");

  return (
    <div className='lg:px-24 md:py-16 md:flex justify-between bg-[#ffffff]'>
      <div className='bg-[#0047ab42] rounded-lg w-full flex flex-col items-center justify-center'>
        <h3 className='text-3xl font-bold'><span className='text-4xl'>Connect with us </span><br /> and share your experience</h3>
      <div >
    <Lottie loop={true} animationData={registerl} className="w-full" />
      </div>
      </div>
      <div className=' md:px-20 '>
        <h3 className='text-6xl font-bold'>Register !</h3>
        <p className='font-semibold py-3'>Please complete to create your account</p>
      <form data-aos="zoom-in"
        // onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl font-caption  rounded-xl py-2"
      >
        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Your Name:</h5>
          <input
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered  w-full max-w-xs"
          />
        </div>
        {errors.fullName && (
          <span className="text-red-700 font-bold">
            You must enter your name
          </span>
        )}

        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Photo Url:</h5>
          <input
            {...register("photoURL")}
            type="text"
            placeholder="Enter Your Photo Url"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Email:</h5>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Enter Your Email Address"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {errors.Email && (
          <span className="text-red-700 font-bold">
            You must enter your Email
          </span>
        )}
        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Password:</h5>
          <div className="relative">
          <input
            {...register("Password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
             
            })}
            type={showPassword? "text": "password"}
            placeholder="Enter Your Password"
            className="input input-bordered w-full max-w-xs"
          />
         <span className="cursor-pointer absolute top-[13px] text-[20px] z-10 right-4" onClick={()=> setShowPassword(!showPassword)}>
          {
          showPassword ? <IoIosEyeOff/> :<IoIosEye/>
        }
          </span>
          </div>
          {errors.Password && errors.Password.type === "pattern" && (
            <span className="text-red-700  font-bold max-w-[300px]">
             Password should be uppercase, <br />lowercase and 6 character long
            </span>
          )}
          <ToastContainer></ToastContainer>
        </div>
        <div className="mb-2 ">
          <h5 className="font-bold text-lg pl-2">Confirm Password:</h5>
          <input
            {...register("confirmPassword", {
              validate: (value) => value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Your Password"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.confirmPassword && (
            <span className="text-red-700 block font-bold">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#0047ab63] mt-5 text-white py-3 rounded-xl font-bold p-32"
        >
          Register
        </button>
        {
          registerError && (
            <span className="block text-red-600">{registerError}</span>
          )
        }
       {
          successRegister && (
            <span className="block text-green-600">{successRegister}</span>
          )
        }
        <p className="mt-4 text-[16px] text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-[#567aa4]">
            Log in
          </Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Register;