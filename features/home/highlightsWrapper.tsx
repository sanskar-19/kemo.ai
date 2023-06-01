import Link from 'next/link'
import HighlightsCard from './highlightsCard'
export interface HighlightsProps {
  highlights: Array<any>
}

const Highlights = ({ highlights }: HighlightsProps) => {
  return (
    <section className='flex gap-y-6 w-full max-w-[71rem] mt-10 mb-20 flex-col px-4 sm:px-0'>
      <h3 className='text-base text-dark font-bold'>Highlights</h3>
      <div className='flex gap-x-4 w-full overflow-scroll'>
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
