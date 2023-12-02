import Image from 'next/image'
import signupMobile from '../../public/signup-mobile.svg';
import signupDesktop from '../../public/signup-desktop.svg';
import Fourm from '@/components/Fourm'

export default function Home() {
  return (
    <div className='md:h-screen md:flex md:items-center md:justify-center'>
    <main className="bg-white flex flex-col h-full items-center md:fixed md:flex md:flex-row-reverse md:justify-center md:h-5/6 md:w-[600] md:px-8 md:rounded-lg">
        <Image
        className='md:hidden'
        priority
        src={signupMobile}
        alt='dtIcon'/>
        <Image
          className='hidden md:block'
          priority
          src={signupDesktop}
          alt='dtIcon'/>
        <Fourm/>
    </main>
          </div>
  )
}
