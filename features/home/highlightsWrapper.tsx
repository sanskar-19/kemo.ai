import Link from 'next/link'
import HighlightsCard from './highlightsCard'
export interface HighlightsProps {
  highlights: Array<any>
}

const Highlights = ({ highlights }: HighlightsProps) => {
  return (
    <section className='flex sm:gap-y-6 w-full max-w-[71rem] mt-10 mb-14 sm:mb-20 flex-col pl-4 sm:px-0'>
      <h3 className='text-base text-dark font-bold'>Highlights</h3>
      <div className='flex gap-4 sm:justify-center w-full overflow-x-scroll sm:flex-wrap py-6 sm:overflow-visible'>
        {highlights.map((highlight, index) => (
          <HighlightsCard
            src={highlight?.image}
            title={highlight?.title}
            description={highlight?.description}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Highlights
