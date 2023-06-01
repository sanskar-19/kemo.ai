import Header from '@/components/Header'
import Link from 'next/link'

export interface HighlightDetailProps {
  highlightDetails: any
}
const HighlightDetail = ({ highlightDetails }: HighlightDetailProps) => {
  console.log(highlightDetails)
  return (
    <section
      className='w-full flex-grow bg-lightgreen
'
    >
      <Header />
      <div className='flex gap-y-4 flex-grow bg-lightgreen max-w-[71rem] mx-auto gap-x-2 py-8 flex-wrap '>
        <div className='flex gap-x-4 w-full flex-shrink-0 mt-[4.75rem] sm:mt-0 px-4 sm:p-0'>
          <Link href={'/'} className='font-semibold'>
            Home
          </Link>
          {'>'}
          <Link
            href={`/highlights/${highlightDetails?.name}`}
            className='font-semibold text-green'
          >
            {highlightDetails?.name}
          </Link>
        </div>
        <div className='flex gap-x-4 flex-col sm:flex-row'>
          <div className='flex flex-col w-full sm:w-1/2 gap-y-4  overflow-hidden justify-start items-start flex-shrink-0'>
            <img
              src={highlightDetails?.image}
              className='h-full object-cover object-center rounded-lg
'
            />
          </div>
          <div className='flex flex-col w-full sm:w-1/2 gap-y-4 p-4 sm:p-0'>
            <h2 className='text-green text-3xl font-bold'>
              {highlightDetails?.name}
            </h2>
            <h3 className='text'>{highlightDetails?.description}</h3>
            {highlightDetails?.activities?.map(
              (activity: any, index: number) => (
                <div
                  className='p-2 sm:p-6 bg-white shadow-highlights-card rounded-lg flex gap-x-2 items-center'
                  key={index}
                >
                  <div className='rounded-[50%] flex-shrink-0 bg-lightgreen text-green w-10 h-10 flex justify-center items-center font-bold'>
                    {index + 1}
                  </div>
                  {activity.name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightDetail

export async function getServerSideProps (context: any) {
  let highlightDetails = await fetch(
    `https://web-dev.dev.kimo.ai/v1/activities/${context.params.id}`
  )

  let highlightsJson = await highlightDetails.json()
  console.log(highlightDetails.status)
  if (highlightDetails.status === 422) {
    return {
      redirect: {
        destination: `/${highlightDetails.status}`,
        permanent: false
      }
    }
  }

  return {
    props: {
      highlightDetails: highlightsJson
    }
  }
}
