'use client'

import Carousel from '../components/Carousel'
import { NotebookPen, UserRoundSearch, Wallet } from 'lucide-react'
import { Londrina_Outline } from 'next/font/google'
import PlanCard from '../components/PlanCard'
import useWindowDimensions from '../utils/useWindowDimensions'
import { useEffect, useState } from 'react'

import hbomax from '@/app/public/apps-logo/hbomax.png'
import deezer from '@/app/public/apps-logo/deezer.png'
import loke from '@/app/public/apps-logo/looke.png'
import conexoes from '@/app/public/conexoes.png'
import Image from 'next/image'
import Link from 'next/link'

const londrina = Londrina_Outline({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  const { width } = useWindowDimensions()
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (width) width <= 950 ? setIsMobile(true) : setIsMobile(false)
  }, [width, setIsMobile])

  return (
    <>
      <main className="flex flex-col max-w-[1200px] w-full m-auto">
        <Carousel className=" max-h-[550px] w-full aspect-video mt-4 mx-auto" />

        <div className="flex flex-col w-full mt-16 relative">
          <h1 className="flex m-auto self-center text-6xl font-bold text-text">
            #CONTRATOU
          </h1>
          <h1
            className={`flex m-auto self- text-7xl font-bold text-primary mt-[-24px] relative mr-[calc(50%-${
              isMobile ? '110px' : '220px'
            })] ${londrina.className}`}
          >
            INSTALOU!
          </h1>
        </div>

        <div className="grid grid-rows-1 md:grid-cols-4 w-full mt-16 gap-14 px-4 md:px-0">
          <h1 className="text-5xl font-bold text-text text-center ">
            Clicou, Conectou,{' '}
            <a className="text-accent">
              Sem
              <br /> Mistérios
            </a>
            .
          </h1>
          <div className="flex flex-col text-center self-end items-center ">
            <Wallet size={60} className="text-primary" />
            <h4 className="text-2xl text-text mt-6 leading-8">
              <a className="text-3xl font-bold text-primary">
                SEM
                <br />
              </a>
              Comprovação de renda
            </h4>
          </div>

          <div className="flex flex-col text-center self-end items-center ">
            <NotebookPen size={60} className="text-primary" />
            <h4 className="text-2xl text-text mt-6 leading-8">
              <a className="text-3xl font-bold text-primary">
                SEM
                <br />
              </a>
              Ánalise de crédito
            </h4>
          </div>

          <div className="flex flex-col text-center self-end items-center ">
            <UserRoundSearch size={60} className="text-primary" />
            <h4 className="text-2xl text-text mt-6 leading-8">
              <a className="text-3xl font-bold text-primary">
                SEM
                <br />
              </a>
              Consulta ao spc/serasa
            </h4>
          </div>
        </div>

        <Carousel
          slidesPerView={isMobile ? 1 : 3}
          className={`max-h-[620px] max-w-[1200px] w-full mt-32 mx-auto gap-1`}
          items={[
            <PlanCard
              megas="70"
              price="65,99"
              key={'70-familia-65'}
              className={`mt-5 ${isMobile ? 'ml-[calc(50%-150px)]' : 'ml-0'}`}
              slogans={['Assista suas séries e filmes favoritos em familia']}
            />,
            <PlanCard
              megas="200"
              price="111,99"
              key={'200-games-111'}
              className={`mt-5 ${isMobile ? 'ml-[calc(50%-150px)]' : 'ml-0'}`}
              slogans={[
                'Mais velocidade para jogar online seus games preferidos',
              ]}
              hasApps={true}
              apps={[loke.src, deezer.src]}
            />,
            <PlanCard
              megas="400"
              price="154,99"
              key={'400-casa-154'}
              className={`mt-5 ${isMobile ? 'ml-[calc(50%-150px)]' : 'ml-0'}`}
              slogans={[
                'Perfeito para ter sua casa conectada e mais inteligente',
                '+ HBOMAX incluso',
              ]}
              hasApps={true}
              apps={[hbomax.src, deezer.src]}
            />,
          ]}
        />
      </main>
      <div className="flex flex-col relative w-full h-[300px] mt-20">
        <div className="w-full h-full z-10 absolute bg-black opacity-60"></div>
        <Image
          src={conexoes.src}
          fill={true}
          alt="conexoes image"
          className="blur-sm"
        />
        <div className="w-full h-[300px] z-20 absolute grid grid-cols-1 md:grid-cols-2 content-center">
          <h1 className="p-12 text-[1.8rem] md:text-5xl font-bold text-white text-center md:text-left col-span-1 m-auto">
            Teste a velocidade da <br />{' '}
            <a className="text-accent">sua internet</a>!
          </h1>
          <Link
            className="duration-200 transition-all hover:scale-110 font-bold text-2xl md:text-4xl text-white bg-accent md:w-[350px] w-[250px] h-[50px] md:h-[100px] rounded-xl flex text-center items-center justify-center m-auto"
            href="https://www.speedtest.net/pt"
            target="_blank"
          >
            FAZER TESTE
          </Link>
        </div>
      </div>
    </>
  )
}
