import Image from 'next/image'
import Link from 'next/link'

const SelectRoleLink = ({worker, href} : {worker : boolean, href:string}) => {
  const IMG_SRC = worker ? "/svg/worker.svg" : "/svg/employer.svg"
  return (
    <Link href={href} className="group hover:scale-105 duration-100 w-full max-w-[400px] flex-1 relative rounded-md overflow-hidden">
      <Image src={IMG_SRC} width={600} height={330} alt="Employer" />
      <p className="absolute top-full duration-100 h-full group-hover:top-0 flex items-center justify-center font-semibold font-rubic text-white bg-black bg-opacity-25 w-full text-2xl">
        {worker ? "Candidato" : "Reclutador"}
      </p>
    </Link>
  )
}

export default SelectRoleLink