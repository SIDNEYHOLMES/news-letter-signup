'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import successIcon from '../../../public/success-icon.svg'

const Success = () => {
  const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    // Retrieve the submitted email from localStorage
    const email = localStorage.getItem('submittedEmail');
    if (email) {
      setSubmittedEmail(email);
      localStorage.removeItem('submittedEmail');
    }
  }, []);

  return (
    <div className='h-screen md:static md:p-12 md:flex md:items-center md:justify-center md:h-screen'>
      <main className='bg-white flex flex-col py-20 h-full p-10 justify-between md:justify-center md:h-[35rem] md:w-[30rem] md:items-center md:rounded-lg'>
        <div className='flex flex-col py-5 space-y-5'>
        <Image
        className='pb-20 md:pb-5'
        priority
        src={successIcon}
        alt='dtIcon'/>
        <div className='flex flex-col space-y-6 w-96 place-self-center'>
        <h1 className='text-5xl md:text-6xl font-bold text-black'>Thanks For Subscribing!</h1>
        <p className='word-break'>
          A confirmation email has been sent to <b>{submittedEmail}</b>.
          Please open it and click the button inside to confirm your subscription
        </p>
        </div>
        </div>
        <button className='hover:bg-gradient-to-r from-red-500 to-orange-400 mt-10 p-3 rounded-md bg-blue-950 text-white w-full'>Dismiss Message</button>
      </main>
    </div>
  );
};

export default Success;
