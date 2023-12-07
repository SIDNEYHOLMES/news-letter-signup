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
    <div className='h-screen md:h-96'>
      <main className='bg-white flex flex-col py-20 h-full p-10 justify-between md:items-center'>
        <div className='py-5 space-y-5'>
        <Image
        className='pb-10'
        priority
        src={successIcon}
        alt='dtIcon'/>
        <div>

        <h1 className='text-5xl md:text-6xl font-bold text-black md:pb-24'>Thanks For Subscribing!</h1>
        <p className='word-break'>
          A confirmation email has been sent to <b>{submittedEmail}</b>.
          Please open it and click the button inside to confirm your subscription
        </p>
        </div>
        </div>
        <button className=''>Dismiss Message</button>
      </main>
    </div>
  );
};

export default Success;
