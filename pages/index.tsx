import Header from '@/components/Header'
import CategoryWrapper from '@/features/home/Category'
import Highlights from '@/features/home/highlightsWrapper'

export default function Home () {
  return (
    <main className='w-full flex flex-col items-center'>
      {/* Header */}
      <section className='w-full bg-island-background h-[30rem] bg-fixed sm:h-[35rem] bg-cover bg-center bg-no-repeat flex items-center flex-col gap-y-[4.5rem] justify-center sm:justify-start'>
        <header className='relative w-full hidden justify-center items-center mt-6 sm:flex'>
          <Header />
        </header>
        <h1 className='font-bold text-[4rem] leading-[3.75rem] sm:text-[8.75rem] text-center hero-gradient-text sm:leading-[8.25rem] tracking-[-23%]'>
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
