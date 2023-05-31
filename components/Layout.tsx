import React from 'react'
import Footer from './Footer'

export interface LayoutProps {
  children: React.ReactElement
}
const RootLayout = ({ children }: LayoutProps) => {
  return (
    <main className='flex flex-col min-h-screen bg-white'>
      {children}
      <Footer />
    </main>
  )
}

export default RootLayout
