import Button from '@/components/Button'
import CategoryModal from './CategoryModal'
export interface CategoryProps {
  categories: Array<any>
}
const CategoryWrapper = ({ categories }: CategoryProps) => {
  return (
    <section className='w-full bg-lightgreen'>
      <section className='flex pt-10 pb-20 max-w-[71rem] mx-auto gap-x-8 flex-col px-4 sm:px-0 sm:flex-row gap-y-10'>
        <div className='w-full sm:w-1/2 flex flex-col gap-y-4'>
          <h3 className='text-base text-dark font-bold'>Categories</h3>

          <div className='flex flex-col gap-y-2 w-full'>
            {categories?.map((category, index) => (
              <CategoryModal
                title={category.name}
                link={category.link ?? '/'}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className='w-full sm:w-1/2 flex flex-col gap-y-4'>
          <h3 className='text-base text-dark font-bold'>Travel Guide</h3>
          <div className='flex justify-between p-6 rounded-lg shadow-highlights-card bg-white'>
            <div className='flex flex-col'>
              <h2 className='text-2xl leading-5 font-bold'>Hadwin Malone</h2>
              <h2 className='text-base leading-5 font-normal mt-2'>
                Guide since 2012
              </h2>
              <div className='relative mt-10'>
                <Button label='Contact' variant='secondary' />
              </div>
            </div>
            <img
              src='images/avatar.webp'
              alt=''
              className='w-[4.625rem] h-[4.625rem] sm:h-[8rem] sm:w-[8rem] object-contain'
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default CategoryWrapper
