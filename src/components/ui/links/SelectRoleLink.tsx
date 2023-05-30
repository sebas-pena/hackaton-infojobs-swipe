'use client'
import { useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import Link from 'next/link'

const SelectRoleLink = ({ worker, href }: { worker: boolean, href: string }) => {
  const app = useAppSelector((state) => state.app)
  const IMG_SRC = worker ? '/svg/worker.svg' : '/svg/employer.svg'

  if (app.loggedIn) {
    if (app.guest) {
      href = '/worker/offers'
    } else {
      href = 'worker/settings'
    }
  }

  return (
    <Link href={href} className='group hover:scale-105 duration-100 w-full max-w-[400px] flex-1 relative rounded-md overflow-hidden'>
      <Image src={IMG_SRC} width={600} height={330} alt='Employer' />
      <div className='absolute top-full duration-100 h-full group-hover:top-0 flex items-center justify-center font-semibold font-rubic text-white bg-black bg-opacity-25 w-full text-2xl'>
        <p>{worker ? 'Candidato' : 'Reclutador'}</p>
        {
          !worker && (
            <div className='absolute bottom-0 w-full bg-black bg-opacity-25'>
              <p className='text-xs mx-auto text-center max-w-[200px]'>
                Solo una prueba de concepto, debido a limitaciones de la API.
              </p>
            </div>
          )
        }
      </div>
    </Link>
  )
}

export default SelectRoleLink
