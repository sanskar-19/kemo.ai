import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Header = () => {
  return (
    <section className=' flex w-full bg-white px-6 py-5 rounded-xl max-w-[71rem]  justify-between'>
      <div className='flex justify-between gap-x-20 items-center'>
        <img
          src={'images/logo.png'}
          alt="Couldn't load image"
          className='w-[5.875rem] h-[2.25rem] object-contain'
        />
        <nav className='flex text-base text-dark gap-x-10'>
          <Link href='/'>Home</Link>
          <Link href='/'>Surfing</Link>
          <Link href='/'>Hula</Link>
          <Link href='/'>Vulcano</Link>
        </nav>
      </div>
      <Button label='Book a trip' />
    </section>
  )
}

export default Header
