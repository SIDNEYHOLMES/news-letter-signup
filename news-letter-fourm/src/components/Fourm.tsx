import React from 'react'

const Fourm = () => {
  return (
    <main className='flex flex-col'>
      <h1 className='text-6xl'>Stay Updated</h1>
      <p>Join 60,000+ product managers reciving monthy updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
        <form>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Email address</label>
          <input type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'></input>
          <button>Subscribe to monthly newsletter</button>
        </form>
      </ul>
    </main>
  )
}

export default Fourm