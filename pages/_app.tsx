import RootLayout from '@/components/Layout'
import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
export interface AppProps {
  Component?: any
  pageProps?: any
}

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
