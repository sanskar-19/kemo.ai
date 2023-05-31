const HighlightsCard = () => {
  return (
    <article className='flex flex-col w-[23rem] min-h-[21.25rem] rounded-lg shadow-highlights-card overflow-hidden'>
      <img
        src='/images/article.png'
        className='w-full h-[10.625rem] object-cover'
      />
      <div className='p-6 flex flex-col gap-y-4'>
        <h3 className='text-green text-2xl leading-5 font-bold'>Surfing</h3>
        <h3 className='text-dark text-base font-normal leading-5'>
          Best Hawaiian islands for surfing.
        </h3>

        <img
          src='/icons/arrow.png'
          className='h-10 w-10 object-contain mt-auto ml-auto cursor-pointer'
        />
      </div>
    </article>
  )
}

export default HighlightsCard
