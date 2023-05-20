import SelectRoleLink from '@/components/ui/links/SelectRoleLink'

export default function Home () {
  return (
    <>
      <div className='max-w-2xl text-center text-[#2d3133]'>
        <h2 className='mb-4 mt-3 text-xl sm:text-2xl font-semibold'>Bienvenido/a a <span className='italic'>Swipe!</span></h2>
        <p className='mb-6 text-md sm:text-xl'>Aquí, podrás navegar sin esfuerzo entre perfiles y oportunidades, conectando a talentos con empleadores.</p>
      </div>
      <p className='mb-3 sm:mb-6 text-xl text-[#167db7] font-semibold'>¿Podrías indicarnos tu rol?</p>
      <div className='flex flex-col justify-center items-center sm:flex-row gap-3 w-full max-w-2xl animate-fade-in-up'>
        <SelectRoleLink worker href='/worker' />
        <SelectRoleLink worker={false} href='/employer' />
      </div>
    </>
  )
}
