'use client'
import { Londrina_Outline } from 'next/font/google'
import Image from 'next/image'
import slogan from '@/app/public/tsnet-slogan.png'

const londrina = Londrina_Outline({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Aempresa() {
  return (
    <>
      <main className="flex flex-col max-w-[1200px] w-full m-auto">
        <div className="flex flex-col w-fit mt-10 mx-auto">
          <h1 className="text-6xl font-black text-text m-auto">#A empresa</h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <p
              className={`leading-10 text-primary text-6xl text-right col-span-1 ${londrina.className}`}
            >
              conheça <br />
              nossa
            </p>
            <h2
              className={`self-end text-primary text-8xl text-right col-span-1 ${londrina.className}`}
            >
              História
            </h2>
          </div>
        </div>
        <div className="h-fit mt-10 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
          <p className="px-6 text-lg text-text text-justify  leading-7">
            A TSNetTelecom provedor de internet, é a empresa certa para resolver
            todas suas necessidades. Desde 2017 está no mercado muito mais que
            disponibilizar seu acesso á internet.
            <br />
            <br />
            Tudo o que há de mais avançado em provimento de banda larga, com
            total segurança e a tranquilidade que você precisa. nosso sistema é
            baseado em transmissão de dados via Internet fibra óptica, que lhe
            garante alta performance para envio e recebimento de dados.
          </p>
          <div className="relative w-full min-h-[224px]">
            <Image
              src={slogan.src}
              fill={true}
              style={{
                objectFit: 'contain',
              }}
              alt="Economize com qualidade! Internet ILIMITADA | TSNet"
            />
          </div>
        </div>
      </main>
    </>
  )
}
