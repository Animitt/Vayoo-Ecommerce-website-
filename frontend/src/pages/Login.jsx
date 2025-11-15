import React from 'react'
import Logo from '../assets/vcartlogo.png'
import googlelogo from '../assets/googlelogo.png'
import { useNavigate } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

function Login() {
  const navigate = useNavigate();
  let [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]
    flex flex-col items-center justify-start'>
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px]
       cursor-pointer' onClick={() => navigate('/')}>
        <img className='w-[40px]' src={Logo} alt="" />
        <h1 className='text-[24px] font-bold'>Vayoo</h1>
      </div>
      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[30px] font-semibold'>LogIn to your Account </span>
        <span className='text-[15px] '>Welcome to Vayoo, please LogIn to place your order!</span>
      </div>

      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] 
      border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
        <form action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
          <div className='w-[95%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center
              gap-[10px] py-[20px] cursor-pointer'>
            <img src={googlelogo} alt='google logo' className='w-[22px]' />LogIn using Google Account
          </div>
          <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#96969675]'></div>
            <span className='text-[14px]'>OR</span>
            <div className='w-[40%] h-[1px] bg-[#96969675]'></div>
            <div className=''></div>
          </div>
          <div className='w-[90%] h-[400px] flex flex-col items-center  justify-cemter gap-[15px] relative '>
            <input type='text' className='w-[100%] h-[50px] border-[2px] border-[#96969675] backdrop:blur-sm rounded-lg
                shadown-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' placeholder='Email' required />
            <input type={showPassword?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969675] backdrop:blur-sm rounded-lg
                shadown-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold ' placeholder='Password' required />
            {!showPassword && < IoEyeOutline className='w-[17px] h-[17px] cursor-pointer absolute right-[3%] bottom-[70%]' onClick={()=>setShowPassword(prev=>!prev)} />}
            { showPassword && <IoEye className='w-[17px] h-[17px] cursor-pointer absolute right-[3%] bottom-[70%]' onClick={()=>setShowPassword(prev=>!prev)}/>}
            <button type='text' className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex-items-center justify-center
                mt-[20px] text-[17px] font-semibold' required >LogIn</button>
            <p className='flex gap-[10px]'>Do not have an account?
              <span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={() => navigate('/signup')}>Create New Account</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
