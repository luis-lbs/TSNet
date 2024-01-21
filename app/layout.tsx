import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BEM VINDO | TSNet',
  description: 'Internet em Campinas de Pirajá',
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
