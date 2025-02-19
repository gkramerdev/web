import Image from 'next/image'
import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl ">Ranking de indicações</h2>
      <div className="space-y-4">
        <div className="relative roudend-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Giancarlo Kramer
          </span>
          <span className="font-heading font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative roudend-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2</span> | João Fulano
          </span>
          <span className="font-heading font-semibold text-gray-200 leading-none">
            957
          </span>
          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative roudend-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Mario Beltrano
          </span>
          <span className="font-heading font-semibold text-gray-200 leading-none">
            814
          </span>
          <Image src={cooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
