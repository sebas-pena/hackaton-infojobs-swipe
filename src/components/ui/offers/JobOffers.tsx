'use client'
import React from 'react'
import { InfoJobsDetailedOfferResponse } from '@/lib/infojobs/types'
import Image from 'next/image'
import { getRelativeDateTimeDifference } from '@/lib/date'
import { GoogleMap } from '../GoogleMap'

export const JobOfferDisplay = ({ offer }: { offer: InfoJobsDetailedOfferResponse }) => {
  console.log(offer)
  if (offer === undefined) return null
  const timeDiference = getRelativeDateTimeDifference(offer.creationDate)
  let timeDiferenceString = ''
  if (timeDiference.days > 0) {
    timeDiferenceString = `${timeDiference.days} días`
  } else if (timeDiference.hours > 0) {
    timeDiferenceString = `${timeDiference.hours} horas`
  } else if (timeDiference.minutes > 0) {
    timeDiferenceString = `${timeDiference.minutes} minutos`
  } else {
    timeDiferenceString = 'hace un momento'
  }
  return (
    <section>
      <header className='relative flex flex-col sm:gap-12 border border-[#f5f5f5] rounded-lg'>
        <div className='relative h-[100px] w-full bg-light-gradient rounded-lg'>
          {
          (offer.profile.logoUrl !== undefined) && (
            <Image key={offer.profile.logoUrl} src={offer.profile.logoUrl} width={100} height={100} alt='Logo' className='absolute top-[calc(100%_-_50px)] left-5 rounded-md bg-white border border-[#f5f5f5]' />
          )
        }
        </div>
        <div className='flex-col gap-2 sm:gap-5 pl-5 py-3 text-[#333]'>
          <h2 className='font-coolvetica font-semibold text-md sm:text-2xl'>{offer.title}</h2>
          <div className='flex gap-2'>
            <a
              href={offer.profile.url}
              target='_blank'
              rel='noreferrer'
              className='inline-flex gap-2 items-center text-neutral-600 font-semibold text-sm sm:text-lg hover:text-primary-600 duration-300'
            >
              <span>{offer.profile.name}</span>
              <Image src='/svg/link.svg' width={20} height={20} alt='' />
            </a>
            <div className='group relative inline-flex items-center'>
              <Image src='/svg/question.svg' width={21} height={21} alt='' />
              <div className='absolute translate-y-1/2 left-[40px] w-[500px] invisible group-hover:visible duration-300 bg-white border border-[#f5f5f5] rounded-lg p-3'>
                <p className='text-xs'>
                  {offer.profile.description}
                </p>
              </div>
            </div>
          </div>
          <p className='text-sm sm:text-md text-neutral-600'>
            {offer.province.value}, {offer.country.value} - {timeDiferenceString}
          </p>
        </div>
        <button className='absolute right-2 bottom-2 bg-blue-500 text-white hover:bg-blue-600 duration-300 font-semibold text-sm sm:text-lg py-2 px-5 rounded-lg'>
          Aplicar
        </button>
      </header>

      <div className='flex gap-5 mt-10'>
        <div className='flex-1 h-full px-5 py-4 rounded-lg border border-[#f5f5f5]'>
          <h3 className='font-semibold text-lg text-neutral-700 mb-2'>Descripcion:</h3>
          <p className='whitespace-break-spaces text-md mb-5'>
            {offer.description}
          </p>
          <h3 className='font-semibold text-lg text-neutral-700 mb-2'>Ubicacion:</h3>
          <GoogleMap address={offer.fiscalAddress} />
          <p className='text-xs font-semibold text-neutral-600 text-center mt-2'>
            {offer.fiscalAddress}
          </p>
        </div>

        <aside className='flex flex-col gap-4'>
          <div className='px-4 py-4 rounded-lg border border-[#f5f5f5] text-center'>
            <h3 className='font-semibold text-lg text-neutral-700'>
              {
                offer.showPay
                  ? (
                    <>
                      {offer.minPay?.amountValue}
                      {' - '}
                      {offer.maxPay?.amountValue}
                    </>
                    )
                  : offer.salaryDescription
              }
            </h3>
            <p className='text-md text-neutral-600'>
              {offer.minPay?.periodValue}
            </p>
          </div>
          <div className=' px-4 py-4 rounded-lg border border-[#f5f5f5]'>
            <h3 className='font-semibold text-center mb-3 text-lg text-neutral-700'>
              Detalles
            </h3>
            <ul className='font-coolvetica flex flex-col gap-2'>
              {
              offer.vacancies > 0 && (
                <li className='flex gap-2 items-center'>
                  <div className='flex items-center justify-center bg-gray-400 rounded-md h-10 w-10'>
                    <Image src='/svg/vacancies.svg' width={22} height={22} alt='' />
                  </div>
                  <div className='flex-1 flex leading-none flex-col'>
                    <p className='text-neutral-700 text-md'>Vacantes</p>
                    <p className='font-sans font-semibold text-sm text-neutral-600'>{offer.vacancies}</p>
                  </div>
                </li>
              )
            }
              {
              offer.contractType.id > 0 && (
                <li className='flex gap-2 items-center'>
                  <div className='flex items-center justify-center bg-gray-400 rounded-md h-10 w-10'>
                    <Image src='/svg/contract-time.svg' width={22} height={22} alt='' />
                  </div>
                  <div className='flex-1 flex leading-none flex-col'>
                    <p className='text-neutral-700 text-md'>Tipo de Contrato</p>
                    <p className='font-sans font-semibold text-sm text-neutral-600'>{offer.contractType.value}</p>
                  </div>
                </li>
              )
            }
              <li className='flex gap-2 items-center'>
                <div className='flex items-center justify-center bg-gray-400 rounded-md h-10 w-10'>
                  <Image src='/svg/cv.svg' width={22} height={22} alt='' />
                </div>
                <div className='flex-1 flex leading-none flex-col'>
                  <p className='text-neutral-700 text-md'>Experiencia Requerida</p>
                  <p className='font-sans font-semibold text-sm text-neutral-600'>{offer.experienceMin.value}</p>
                </div>
              </li>
              <li className='flex gap-2 items-center'>
                <div className='flex items-center justify-center bg-gray-400 rounded-md h-10 w-10'>
                  <Image src='/svg/journey.svg' width={24} height={24} alt='' />
                </div>
                <div className='flex-1 flex leading-none flex-col'>
                  <p className='text-neutral-700 text-md'>Tipo de Jornada</p>
                  <p className='font-sans font-semibold text-sm text-neutral-600'>{offer.journey.value}</p>
                </div>
              </li>
              <li className='flex gap-2 items-center'>
                <div className='flex items-center justify-center bg-gray-400 rounded-md h-10 w-10'>
                  <Image src='/svg/study.svg' width={22} height={22} alt='' />
                </div>
                <div className='flex-1 flex leading-none flex-col'>
                  <p className='text-neutral-700 text-md'>Estudios Necesarios </p>
                  <p className='font-sans font-semibold text-sm text-neutral-600'>{offer.studiesMin.value}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className='px-4 py-4 rounded-lg border border-[#f5f5f5]'>
            <h3 className='font-semibold text-center mb-3 text-lg text-neutral-700'>
              Habilidades
            </h3>
            <ul className='flex flex-col gap-2'>
              {
              offer.skillsList.map((skill) => (
                <li key={skill.skill} className='w-full py-1 px-2 bg-blue-400 text-white rounded-md text-center text-md'>
                  {skill.skill}
                </li>
              ))
            }
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
