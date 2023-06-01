import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface IEmployerOffer {
  skills: string[]
  title: string
  image: string
  province: string
  journey: string
  vacancies: number
  description: string
}

const EmployerOffer = ({
  skills,
  title,
  image,
  province,
  journey,
  vacancies,
  description
}: IEmployerOffer) => {
  return (
    <Link href='/employer/offers' className='flex flex-col gap-2 p-4 rounded-lg border border-[#f5f5f5] text-start'>
      <div className='flex gap-4 items-center'>
        <Image src={image} width={60} height={60} alt='' className='rounded-full' />
        <div>
          <h3 className='text-lg font-coolvetica font-semibold text-[#444]'>{title}</h3>
          <ul className='flex gap-2'>
            {
                skills.map((skill, index) => (
                  <li key={index} className='px-2 bg-blue-400 text-white rounded-md text-center text-xs'>
                    {skill}
                  </li>
                ))
              }
          </ul>
        </div>
      </div>
      <p className='text-xs font-semibold text-neutral-500'>{description}</p>
      <ul className='flex gap-4'>
        <li className='flex gap-2 items-center text-md text-neutral-500'>
          <div className='flex items-center justify-center bg-gray-400 rounded-md h-6 w-6'>
            <Image src='/svg/journey.svg' width={22} height={22} alt='' />
          </div>
          {journey}
        </li>
        <li className='flex gap-2 items-center text-md text-neutral-500'>
          <div className='flex items-center justify-center bg-gray-400 rounded-md h-6 w-6'>
            <Image src='/svg/vacancies.svg' width={16} height={16} alt='' />
          </div>
          {vacancies} vacantes
        </li>
        <li className='flex gap-2 items-center text-md text-neutral-500'>
          <div className='flex items-center justify-center bg-gray-400 rounded-md h-6 w-6'>
            <Image src='/svg/location.svg' width={16} height={16} alt='' />
          </div>
          {province}
        </li>
      </ul>
    </Link>
  )
}

export default EmployerOffer
