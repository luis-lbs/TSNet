import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SlooganImg from './public/tsnet-slogan.png'

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
        url: SlooganImg.src,
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
      <head>
        <meta
          name="google-site-verification"
          content="BhP-QwF9yfutdbH9OXwBIaCVcI5CtBRA7vFUkT9ig0M"
        />
      </head>
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
