import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tsnet.vercel.app'),
  title: 'BEM VINDO | TSNet',
  description: 'Internet em Campinas de Pirajá',
  openGraph: {
    title: 'BEM VINDO | TSNet',
    description: 'Internet em Campinas de Pirajá',
    url: 'https://tsnet.vercel.app/',
    siteName: 'TSNet',
    images: [
      {
        url: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-1.4e46ec89.jpg&w=1920&q=75',
        width: 1200,
        height: 600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}
