import { useEffect, useState } from 'react'
import HighlightsCard from './highlightsCard'
import { controller } from '@/services/controller'

const Highlights = () => {
  const [highlights, setHighlights] = useState(null)

  async function fetchHighlights () {
    try {
      let apiResponse = await controller.FetchHighlights()
      // setHighlights(apiResponse)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchHighlights()
  }, [])

  return (
    <section className='flex gap-y-6 w-full max-w-[71rem] mt-10 mb-20 flex-col px-4 sm:px-0'>
      <h3 className='text-base text-dark font-bold'>Highlights</h3>
      <HighlightsCard
        src={'/images/article.png'}
        title={'Surfing'}
        description={'Best Hawaiian islands for surfing.'}
      />
    </section>
  )
}

export default Highlights
