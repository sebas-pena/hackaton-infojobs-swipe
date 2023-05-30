'use client'
import React, { useState, useEffect } from 'react'
// import { mockedJobsResponse } from './savedApiResponse'
import { JobOffer } from '@/lib/infojobs/types'
import { JobOfferDisplay } from '../offers/JobOffers'
import { clientGetJobOffers } from '@/lib/infojobs/client/consumer'
import { useAppSelector } from '@/store/hooks'
const JobSlider = () => {
  const [actualOffer, setActualOffer] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [swipe, setSwipe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [offers, setOffers] = useState<JobOffer[]>([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const countrysOfInterest = useAppSelector((state) => state.workerSettings.countrysOfInterest)
  useEffect(() => {
    setLoading(true)
    clientGetJobOffers({ page, countries: countrysOfInterest.map((country) => country.key) })
      .then((res) => {
        console.log(res)
        setOffers(res.offers)
        setTotalPages(res.totalPages)
        setTotalResults(res.totalResults)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => setLoading(false))
    /* setOffers(mockedJobsResponse.items)
    setTotalPages(1)
    setTotalResults(mockedJobsResponse.totalResults)
    setLoading(false)
    console.log('useEffect') */
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
        className='absolute left-0 h-full'
        onClick={showPreviousOffer}
      >
        pre
      </button>
      <div className='flex-1 px-3 sm:px-20'>
        {
          !loading && <JobOfferDisplay offer={offers[actualOffer]} />
        }
      </div>
      <button
        className='absolute right-0 h-full'
        onClick={showNextOffer}
      >
        next
      </button>
    </div>
  )
}

export default JobSlider
