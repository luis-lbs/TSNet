import { PhoneCall } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full h-64 md:h-48 bg-primary p-5">
      <div className=" grid grid-cols-1 md:grid-cols-3 bg-transparent h-full content-center  max-w-[1200px] m-auto">
        <div className="flex flex-col md:col-span-2 text-center md:text-left text-white">
          <p>Estrada de Campinas de Pirajá, N°27 Primeiro andar, sala 109</p>
          <p className="mt-2 md:m-0">Salvador / BA | CEP: 41270-000</p>
          <p className="flex flex-row mt-2 md:mt-5">
            <PhoneCall className="md:ml-[-10px]" width={40} /> 0800 225 5555 |
            (71)3014-3234 | (71)98395-6760 | (71)98807-7324 (WhatsApp)
          </p>
        </div>
        <div className="flex flex-col col-span-1 text-center mt-4 md:mt-0 md:text-right text-white">
          <p className="font-medium text-3xl italic">#Siga-nos</p>
        </div>
      </div>
    </footer>
  )
}
