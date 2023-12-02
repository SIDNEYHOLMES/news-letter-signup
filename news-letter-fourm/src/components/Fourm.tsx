'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import listCheck from '../../public/list-check-icon.svg'

const Fourm = () => {
  
  const checkEmailSyntax = (event: any) => {
    event.preventDefault()
    const emailInput = event.target.email.value
    var validationRegx = /\S+@\S+\.\S+/;
    if(validationRegx.test(emailInput)) {
      console.log(true)
      //if validation pass send email to database
    }
    else {
      console.log(false)
      // if validation false return "valid email is required"
    }
  }
  
  return (
    <main className='static flex flex-col items-center h-full p-12'>
      <h1 className=' text-4xl md:text-6xl font-bold text-indigo-900 md:pt-12'>Stay updated!</h1>
      <p className='py-8'>Join 60,000+ product managers reciving monthy updates on:</p>
      <ul className='space-y-5 '>
        <li className='flex items-center'>
        <Image
        className='mx-4'
        priority
        src={listCheck}
        alt='login-check-icon'/>
          <p>Product discovery and building what matters</p>
        </li>
        <li className='flex items-center'>
          <Image
          className='mx-4'
          priority
          src={listCheck}
          alt='login-check-icon'/>
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className='flex items-center'>
          <Image
          className='mx-4'
          priority
          src={listCheck}
          alt='login-check-icon'/>
          <p>And much more!</p>
        </li>
        <form onSubmit={checkEmailSyntax} className='flex flex-col'>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Email address</label>
          <input type='email' id='email' className='bg-gray-50 border-solid border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='you@signupmail.com'></input>
          <button type='submit' className='mt-10 p-3 rounded-md bg-blue-950 text-white'>Subscribe to monthly newsletter</button>
        </form>
      </ul>
    </main>
  )
}

export default Fourm