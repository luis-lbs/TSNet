import { Smartphone, Wifi } from 'lucide-react'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface PlanCardProps extends HTMLAttributes<HTMLElement> {
  price: string
  megas: string
  slogans: string[]
  hasApps?: boolean
  apps?: string[]
}

export default function PlanCard({
  price,
  megas,
  className,
  slogans,
  hasApps,
  apps,
}: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col w-[300px] h-[600px] bg-transparent rounded-md border-2 border-primary box-border ${className}`}
    >
      <div className="flex w-32 h-8 bg-primary items-center justify-center text-white rounded-es-none rounded-md mt-[-1rem] ml-[-2px]">
        FIBRA ÓPTICA
      </div>
      <h1 className="self-center text-primary text-5xl font-black text-center flex flex-row mt-5">
        <Wifi className="mr-2" width={30} height={30} /> {megas}
        <p className="text-3xl self-end">MEGA</p>
      </h1>
      <div className="flex flex-col text-sm text-text w-full px-10 font-light mt-8 space-y-2">
        {slogans.map((slogan, i) => (
          <p key={i}>{slogan}</p>
        ))}
      </div>
      <h4 className="self-center mt-10 text-zinc-800 text-[1.785rem] font-medium">
        Por <a className="text-primary">R${price}</a>/mês
      </h4>
      <button className="w-60 bg-primary text-white text-lg font-bold self-center mt-4 rounded-sm p-2  ">
        EU QUERO
      </button>

      <div className="w-full grid grid-cols-5 mt-8 gap-4 px-3">
        <div className="flex w-full justify-end col-span-1 self-center">
          <Wifi className=" text-primary mt-[-20px]" width={30} height={30} />
        </div>
        <div className="col-span-4">
          <p className="text-zinc-800 font-extralight text-md">
            Internet Fibra {megas} Mbps
          </p>
          <p className="text-text text-sm font-medium">
            Com Wi-fi e instalação grátis
          </p>
        </div>

        <div className="flex w-full justify-end col-span-1 self-center">
          <Wifi className=" text-primary mt-[-20px]" width={30} height={30} />
        </div>
        <div className="col-span-4">
          <p className="text-zinc-800 font-extralight text-md">
            Download de até {megas} Mbps
          </p>
          <p className="text-text text-sm font-medium">
            Upload de até {megas} Mbps
          </p>
        </div>

        {hasApps && apps && (
          <>
            <div className="flex w-full justify-end col-span-1 self-center">
              <Smartphone
                className=" text-primary mt-[-20px]"
                width={30}
                height={30}
              />
            </div>
            <div className="col-span-4">
              <p className="text-zinc-800 font-extralight text-md">
                Apps inclusos no plano
              </p>
              <div className="grid grid-cols-2 items-center mt-2">
                <Image
                  src={apps[0]}
                  width={80}
                  height={50}
                  alt="app logo"
                  className="flex justify-self-center"
                />
                {apps.length > 1 && (
                  <Image
                    src={apps[1]}
                    width={80}
                    height={50}
                    alt="app logo"
                    className="flex justify-self-center"
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <p
        className="absolute
       text-text text-xs self-center bottom-2"
      >
        *consulte a viabilidade de promoções
      </p>
    </div>
  )
}
