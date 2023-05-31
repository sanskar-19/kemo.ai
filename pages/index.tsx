import Header from '@/components/Header'
import CategoryWrapper from '@/features/home/Category'
import Highlights from '@/features/home/highlightsWrapper'

export default function Home () {
  return (
    <main className='w-full flex flex-col items-center'>
      {/* Header */}
      <section className='w-full bg-island-background h-[35rem] bg-cover bg-center bg-no-repeat flex items-center flex-col gap-y-[4.5rem]'>
        <header className='relative w-full flex justify-center items-center mt-6'>
          <Header />
        </header>
        <h1 className='font-bold text-[8.75rem] text-center hero-gradient-text leading-[8.25rem] tracking-[-23%]'>
          Welcome
          <br /> to Hawaii
        </h1>
      </section>

      {/* Highlights */}
      <Highlights />

      {/* Category Wrapper */}
      <CategoryWrapper />
    </main>
  )
}
