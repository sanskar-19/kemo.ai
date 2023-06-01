import Link from 'next/link'

export interface CardProps {
  src: string
  title: string
  description: string
}
const HighlightsCard = ({ src, title, description }: CardProps) => {
  return (
    <Link href={`highlights/${title}`}>
      <article className='flex flex-col max-w-full w-[23rem] min-h-[21.25rem] rounded-lg shadow-highlights-card overflow-hidden transition-all cursor-pointer duration-300 hover:-translate-y-2'>
        <img src={src} className='w-full h-[10.625rem] object-cover' />
        <div className='p-6 flex flex-col gap-y-4 flex-grow'>
          <h3 className='text-green text-2xl leading-5 font-bold'>{title}</h3>
          <h3 className='text'>{description}</h3>

          <img
            src='/icons/arrow.png'
            className='h-10 w-10 object-contain mt-auto ml-auto cursor-pointer'
          />
        </div>
      </article>
    </Link>
  )
}

export default HighlightsCard
