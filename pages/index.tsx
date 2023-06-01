import Header from '@/components/Header'
import CategoryWrapper from '@/features/home/Category'
import Highlights from '@/features/home/highlightsWrapper'

export interface HomeProps {
  highlights: any
  categories: any
}

export default function Home ({ highlights, categories }: HomeProps) {
  return (
    <main className='w-full flex flex-col items-center'>
      {/* Header */}
      <section className='w-full bg-island-background h-[30rem] bg-scroll sm:bg-fixed sm:h-[35rem] bg-cover bg-center bg-no-repeat flex items-center flex-col gap-y-[4.5rem] justify-center sm:justify-start'>
        <Header />
        <h1 className='font-bold text-[4rem] leading-[3.75rem] sm:text-[8.75rem] text-center hero-gradient-text sm:leading-[8.25rem] tracking-[-23%]'>
          Welcome
          <br /> to Hawaii
        </h1>
      </section>

      {/* Highlights */}
      <Highlights highlights={highlights} />

      {/* Category Wrapper */}
      <CategoryWrapper categories={categories} />
    </main>
  )
}

export async function getServerSideProps () {
  const highlights = await fetch('https://web-dev.dev.kimo.ai/v1/highlights')
  const categories = await fetch('https://web-dev.dev.kimo.ai/v1/categories')
  return {
    props: {
      highlights: await highlights.json(),
      categories: await categories.json()
    }
  }
}
