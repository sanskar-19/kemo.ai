import React from 'react'

export interface LayoutProps {
  children: React.ReactElement
}
const RootLayout = ({ children }: LayoutProps) => {
  return <main className='flex flex-col min-h-screen bg-white'>{children}</main>
}

export default RootLayout
