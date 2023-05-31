const CategoryWrapper = () => {
  return (
    <section className='w-full bg-lightgreen'>
      <section className='flex pt-10 pb-20 max-w-[71rem] mx-auto gap-x-8'>
        <div className='w-1/2 flex flex-col gap-y-4'>
          <h3 className='text-base text-dark font-bold'>Categories</h3>
        </div>
        <div className='w-1/2 flex flex-col gap-y-4'>
          <h3 className='text-base text-dark font-bold'>Travel Guide</h3>
        </div>
      </section>
    </section>
  )
}

export default CategoryWrapper
