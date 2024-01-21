'use client'

import logo from '@/app/public/logo.svg'
import { FilePenLine, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <header className="max-w-[1200px] w-full flex p-4 m-auto items-center justify-between">
      <Image
        src={logo.src}
        alt="TSNet logo"
        width={200}
        height={60}
        className="p-3 rounded-md"
      />

      {/* Ícone de menu para dispositivos móveis */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          className={`w-12 h-12 ${isMenuOpen ? 'text-accent' : 'text-primary'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Menu para dispositivos maiores ou menu aberto em dispositivos móveis */}
      <ul
        className={`${
          isMenuOpen
            ? ' transform translate-y-2 '
            : 'opacity-0 lg:flex pointer-events-none'
        }  z-50 top-20 right-0 md:pointer-events-auto md:opacity-100 flex flex-col absolute md:static md:flex-row gap-1 md:gap-6   text-lg font-bold items-center transition-all duration-200`}
      >
        <li className="md:bg-transparent bg-primary md:p-0 p-2 w-full md:w-fit h-full text-center md:text-text text-white">
          <Link
            onClick={toggleMenu}
            href="/"
            className="link transition duration-300"
          >
            HOME
          </Link>
        </li>
        <li className="md:bg-transparent bg-primary md:p-0 p-2 w-full md:w-fit h-full text-center md:text-text text-white">
          <Link
            onClick={toggleMenu}
            href="/a-empresa"
            className="link transition duration-300"
          >
            A EMPRESA
          </Link>
        </li>
        <li className="md:bg-transparent bg-primary md:p-0 p-2 w-full md:w-fit h-full text-center md:text-text text-white">
          <Link
            onClick={toggleMenu}
            href="/planos"
            className="link transition duration-300"
          >
            PLANOS
          </Link>
        </li>
        <li className="md:bg-transparent bg-primary md:p-0 p-2 w-full md:w-fit h-full text-center md:text-text text-white">
          <Link
            onClick={toggleMenu}
            href="/contato"
            className="link transition duration-300"
          >
            CONTATO
          </Link>
        </li>
        <li className="md:bg-transparent  md:p-0 p-2 w-full md:w-fit h-full text-center md:text-text text-white">
          <Link
            onClick={toggleMenu}
            target="_blank"
            href="https://www.tsnettelecom.com.br/contrato-scm.pdf"
            className="flex flex-row gap-2 bg-accent p-2 text-white rounded-2xl transition-opacity duration-200 hover:opacity-85"
          >
            <FilePenLine /> CONTRATO SCM
          </Link>
        </li>
        <li className="md:bg-transparent  md:p-0 p-2 w-full md:w-fit h-full text-center md:text-text text-white">
          <Link
            onClick={toggleMenu}
            target="_blank"
            href="https://tsnettelecom.sgp.net.br/accounts/central/login"
            className="flex flex-row gap-2 bg-accent p-2 text-white rounded-2xl transition-opacity duration-200 hover:opacity-85"
          >
            <User /> ÁREA DO CLIENTE
          </Link>
        </li>
      </ul>
    </header>
  )
}
