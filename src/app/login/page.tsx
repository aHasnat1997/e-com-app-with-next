'use clint';

import Lottie from 'lottie-react';
import LoginFrom from './component/LoginFrom';
import lottieLogin from "../../../public/login.json";

export default function Login() {
  return (
    <>
      <section className="h-screen flex">
        <div className='w-full h-full bg-primary/90 flex items-center justify-center'>
          {/* <Lottie animationData={lottieLogin} loop={true} className='w-3/4' /> */}
        </div>
        <div className='w-full h-full bg-primary flex items-center justify-center  shadow-[-10px_0px_50px_rgba(0,0,0,0.3)]'>
          {/* <LoginFrom /> */}
        </div>
      </section>
    </>
  )
}
