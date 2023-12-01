import React from 'react'
import Image from 'next/image'
import listCheck from '../../public/list-check-icon.svg'

const Fourm = () => {
  return (
    <main className='flex flex-col h-full p-12'>
      <h1 className='text-6xl font-bold text-indigo-900 pt-12'>Stay updated!</h1>
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
        <form className='pt-12'>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Email address</label>
          <input type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'></input>
          <button>Subscribe to monthly newsletter</button>
        </form>
      </ul>
    </main>
  )
}

export default Fourm