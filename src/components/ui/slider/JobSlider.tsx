'use client'
import React, { useState, useEffect } from 'react'
// import { mockedJobsResponse } from './savedApiResponse'
import { InfoJobsDetailedOfferResponse } from '@/lib/infojobs/types'
import { JobOfferDisplay } from '../offers/JobOffers'
import { clientGetJobOfferDetails, clientGetJobOffers } from '@/lib/infojobs/client/consumer'
import { useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import Spinner from '../Spinner'
const JobSlider = () => {
  const [actualOffer, setActualOffer] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [offers, setOffers] = useState<InfoJobsDetailedOfferResponse[]>([])
  const [page, setPage] = useState(1)
  const [currentAmountOfOfferLoad, setCurrentAmountOfOfferLoad] = useState(0)
  const countrysOfInterest = useAppSelector((state) => state.workerSettings.countrysOfInterest)

  const getOffers = async () => {
    setLoading(true)
    const res = await clientGetJobOffers({ page, countries: countrysOfInterest.map((country) => country.key) })
    const offers = []
    try {
      for (const offerId of res.items) {
        const offer = await clientGetJobOfferDetails(offerId)
        offers.push(offer)
        setOffers(offers)
        setCurrentAmountOfOfferLoad(amount => amount + 1)
        setTotalResults(res.totalResults)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void getOffers()
  }, [])
  const showNextOffer = () => {
    setActualOffer(actualOffer + 1)
  }

  const showPreviousOffer = () => {
    if (actualOffer !== 0) {
      setActualOffer(actualOffer - 1)
    }
  }

  return (
    <div className='relative flex-1 flex w-full'>
      <button
        className='absolute left-0 translate-x-[-0.75rem] h-full bg-primary-200 hover:bg-primary-300 duration-300 disabled:invisible'
        onClick={showPreviousOffer}
        disabled={actualOffer === 0}
      >
        <Image width={20} height={20} src='/svg/arrow.svg' alt='' />
      </button>
      <div className={`flex-1 px-3 sm:px-12 ${(loading && currentAmountOfOfferLoad === 0) ? 'flex items-center justify-center' : ''}`}>
        {
          (currentAmountOfOfferLoad > actualOffer) && <JobOfferDisplay offer={offers[actualOffer]} />
        }
        {
          (loading && currentAmountOfOfferLoad === 0) && <Spinner width={50} height={50} fill='#167DB7' />
        }
        {
          (!loading && totalResults === 0) && <p className='text-center text-lg text-neutral-600'>No hay ofertas para tus filtros.</p>
        }
      </div>
      <button
        className='absolute right-0 h-full translate-x-3 bg-primary-200 hover:bg-primary-300 duration-300 disabled:invisible'
        onClick={showNextOffer}
        disabled={actualOffer === offers.length - 1 || offers.length === 0}
      >
        <Image width={20} height={20} src='/svg/arrow.svg' alt='' className='rotate-180' />
      </button>
    </div>
  )
}

export default JobSlider
