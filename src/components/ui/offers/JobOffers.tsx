'use client'
import React from 'react'
import { JobOffer } from '@/lib/infojobs/types'
import Image from 'next/image'
import { provinces } from '@/lib/infojobs/dictionary/provinces'
import countries from '@/lib/infojobs/dictionary/countries'
import { getRelativeDateTimeDifference } from '@/lib/date'

export const JobOfferDisplay = ({ offer }: { offer: JobOffer }) => {
  console.log(offer)
  if (offer === undefined) return null
  const countryId = provinces.find(province => province.id === offer.province.id)
  const country = (countryId != null) ? countries.find(country => country.id === countryId.parent)?.value : ''
  const timeDiference = getRelativeDateTimeDifference(offer.published)
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
      <header className='flex flex-col sm:gap-12 rounded-lg overflow-hidden border border-[#f5f5f5]'>
        <div className='relative h-[100px] w-full bg-light-gradient'>
          {
          (offer.author.logoUrl !== undefined) && (
            <Image key={offer.author.logoUrl} src={offer.author.logoUrl} width={100} height={100} alt='Logo' className='absolute top-[calc(100%_-_50px)] left-5 rounded-md bg-white border border-[#f5f5f5]' />
          )
        }
        </div>
        <div className='flex-col gap-2 sm:gap-5 pl-5 py-3 text-[#333]'>
          <h2 className='font-coolvetica font-semibold text-md sm:text-2xl'>{offer.title}</h2>
          <a
            href={offer.author.uri}
            target='_blank'
            rel='noreferrer'
            className='inline-flex gap-2 items-center text-neutral-600 font-semibold text-sm sm:text-lg hover:text-primary-600 duration-300'
          >
            <span>{offer.author.name}</span>
            <Image src='/svg/link.svg' width={20} height={20} alt='' />
          </a>
          <p className='text-sm sm:text-md text-neutral-600'>
            {offer.province.value}, {country} - {timeDiferenceString}
          </p>
        </div>
      </header>

      <div className='flex gap-5 mt-10'>
        <div className='flex-1  px-5 py-4 rounded-lg border border-[#f5f5f5]'>
          <h3 className='font-semibold text-lg text-neutral-700 mb-2'>Requisitos:</h3>
          <p className='whitespace-break-spaces text-md'>
            {offer.requirementMin}
          </p>

        </div>

        <div className='px-5 py-4 rounded-lg border border-[#f5f5f5]'>
          <h3 className='font-semibold text-lg text-neutral-700 mb-2'>
            {offer.salaryDescription}
          </h3>
        </div>
      </div>
    </section>
  )
}
