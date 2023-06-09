import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center fixed z-50 top-0 left-0 sm:relative mt-0 sm:mt-6 sm:flex'>
      <section className='flex w-full bg-white px-6 py-5 sm:rounded-xl max-w-[71rem]  justify-between'>
        <div className='w-full flex justify-between gap-x-20 items-center'>
          <Link href={'/'}>
            <img
              src={'/images/logo.webp'}
              alt="Couldn't load image"
              className='w-[5.875rem] h-[2.25rem] object-contain'
            />
          </Link>
          <input
            type='checkbox'
            className='peer invisible sm:hidden -z-0 absolute'
            id='menu-toggle'
          />
          <label
            htmlFor='menu-toggle'
            className='sm:hidden peer-checked:hidden flex top-0'
          >
            <img
              src='/icons/menu.png'
              className='w-10 h-10 object-contain z-20 fixed top-5 right-5 sm:hidden'
            />
          </label>
          <label
            htmlFor='menu-toggle'
            className='sm:hidden peer-checked:flex hidden top-0'
          >
            <img
              src='/icons/close.png'
              className='w-10 h-10 object-contain z-20 fixed top-5 right-5  sm:hidden flex-shrink-0'
            />
          </label>
          <nav className='flex fixed z-10 top-0 h-screen peer-checked:right-0 right-[-100%] sm:right-0 transition-all duration-300 bg-white flex-col text-base text-dark gap-x-10 sm:items-center sm:flex-row sm:relative w-[calc(100%-1.5rem)] pt-[7.5rem] sm:pt-0 sm:w-full sm:h-max p-10 gap-y-10 sm:p-0'>
            <Link href='/'>Home</Link>
            <Link href='/'>Surfing</Link>
            <Link href='/'>Hula</Link>
            <Link href='/'>Vulcano</Link>
            <span className='sm:ml-auto'>
              <Button label='Book a trip' />
            </span>
          </nav>
        </div>
      </section>
    </header>
  )
}

export default Header
