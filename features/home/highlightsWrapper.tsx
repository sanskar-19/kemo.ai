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
    <section className='flex gap-y-6 w-full max-w-[71rem] mt-10 mb-20 flex-col'>
      <h3 className='text-base text-dark font-bold'>Highlights</h3>
      <HighlightsCard />
    </section>
  )
}

export default Highlights
