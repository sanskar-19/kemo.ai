import Link from 'next/link'

export interface ModalProps {
  title: string
  link: string
}
const CategoryModal = ({ title, link }: ModalProps) => {
  return (
    <Link href={link}>
      <div className='relative w-full shadow-highlights-card rounded-lg bg-white flex justify-between items-center p-6'>
        <h2 className='text'>{title}</h2>
        <img
          src='/icons/transparent-arrow.png'
          className='w-4 h-4 object-contain'
        />
      </div>
    </Link>
  )
}

export default CategoryModal
