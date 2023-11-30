import Image from 'next/image'
import signupMobile from '../../public/signup-mobile.svg';
import signupDesktop from '../../public/signup-desktop.svg';
import Fourm from '@/components/Fourm'

export default function Home() {
  return (
    <main className="bg-white flex flex-col h-screen my-auto items-center md:flex md:flex-row-reverse md:justify-center">
        <Image
        className='md:hidden'
        priority
        src={signupMobile}
        alt='dtIcon'/>
        <Image
          className='invisibile md:visible'
          priority
          src={signupDesktop}
          alt='dtIcon'/>
        <Fourm/>
    </main>
  )
}
