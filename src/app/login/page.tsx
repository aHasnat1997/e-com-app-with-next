'use clint';

import Image from 'next/image';
import LoginFrom from './component/LoginFrom';

export default function Login() {
  return (
    <>
      <section className="h-screen flex">
        <div className='w-full h-full flex items-center justify-center'>
          <Image
            src='/login-bg.jpg'
            alt='Image'
            width={1000}
            height={1000}
            className='w-full h-full'
          />
        </div>
        <div className='w-full h-full bg-primary flex items-center justify-center'>
          <LoginFrom />
        </div>
      </section>
    </>
  )
}
