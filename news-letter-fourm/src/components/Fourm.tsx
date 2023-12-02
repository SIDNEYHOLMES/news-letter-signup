'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import listCheck from '../../public/list-check-icon.svg'

const Fourm = () => {
  let [ emailValidate, setEmailValidate ] = useState(true)
  
  const checkEmailSyntax = (event: any) => {
    event.preventDefault()
    const emailInput = event.target.email.value
    var validationRegx = /\S+@\S+\.\S+/;
    if(emailInput === null) {
      setEmailValidate(false)
      return;
    }
    else if (validationRegx.test(emailInput)) {
      setEmailValidate(true)
      return;
    }
    else {
      setEmailValidate(false)
      return;
    }
  }
  
  return (
    <main className='static flex flex-col items-center h-full p-12'>
      <h1 className='truncate text-4xl md:text-6xl font-bold text-indigo-900 md:pt-12'>Stay updated!</h1>
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
          <div className='flex flex-row space-x-44 md:space-x-52'>
            <label htmlFor='submit' className='block mb-2 text-sm font-medium text-gray-900'>Email address</label>
            <p className={`${emailValidate ? 'hidden' : 'block'} text-sm text-red-400`}>Valid Email Required</p>
          </div>
          <input type='email' id='email' className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-solid border-2 ${emailValidate ? 'border-gray-400 text-gray-900' : 'border-red-400 text-red-700'}`} placeholder='you@signupmail.com'></input>
          <button type='submit' className='hover:bg-indigo-950 mt-10 p-3 rounded-md bg-blue-950 text-white'>Subscribe to monthly newsletter</button>
        </form>
      </ul>
    </main>
  )
}

export default Fourm