import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { apiConnector } from '../../service/apiconnector';
import { auth } from '../../service/apis';


const EmailVerification = ({setIsLogin, setEmailVerify, setRegister}) => {
    const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful}} =  useForm();
    const [verified, setVerified] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true)
      }

      const submitHandler = async (data) => {
        try{
            toast.loading("Sending OTP")
            const response = await apiConnector("POST", auth.SEND_OTP, data)
            console.log(response)

            if(response.data.success === true){
                toast.dismiss()
                setEmailVerify(false)
                setRegister(true)
                toast.success("OTP Sent on the email")
            }

        } catch(error){
            console.log("Login Error", error)
            setErrorMsg(error.response.data.message)
        }   
        setTimeout(() => {toast.dismiss()},2500)
    }

    useEffect(() => {
        if(isSubmitSuccessful){
            reset({
                email: ""
            })
        }
    },[reset, isSubmitSuccessful])
  return (
    <div
    className=' flex flex-col gap-6  w-full justify-center items-center'
    >
        {/* Heading */}
        <h1
        className=' font-bold text-[1.3rem] tracking-wider'ś
        >Email Verification</h1>

        {/* For error display */}
        {
            errorMsg &&  <div className=' bg-richpink-10 text-socialMedia-reddit w-full font-bold p-1'>
                <p>{errorMsg}</p>
            </div>
        }

        <form
        className=' flex flex-col gap-6 w-full justify-center items-center'
        onSubmit={handleSubmit(submitHandler)}
        >
            {/* Email Address */}
             <div className='flex flex-col w-full gap-2'>
                <label className=' text-xs font-bold tracking-wide opacity-50 uppercase'>
                    Email Address
                </label>
                <input
                    className=' text-richblack-90 p-1 rounded-[4px] outline-none focus:border-2 focus:border-socialMedia-telegram'
                        type='email'
                        name='email'
                        required
                        id='email'
                        placeholder='Eg. abc@gmail.com'
                    {...register("email",{required:true})}
                />
            </div>

            <ReCAPTCHA
                className=' self-start'
                sitekey= "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
                theme={"dark"}
            />

            <button
            className='w-full text-richblack-90 font-bold bg-richyellow-40 rounded-lg p-2'
            disabled = {!verified}>
                Send OTP
            </button>

            <div>
                <p>Have an account?
                {" "}
                    <span
                        className=' text-richyellow-40 cursor-pointer'
                        onClick={() => {
                            setEmailVerify(false)
                            setIsLogin(true)
                        }}
                    >Login</span>
                </p>
            </div>
        </form>
    </div>
  )
}

export default EmailVerification