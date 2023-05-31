import { getJobOffers } from '@/lib/infojobs/server/consumer'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest
) => {
  const countries = req.nextUrl.searchParams.getAll('countries') ?? []
  const page = req.nextUrl.searchParams.get('page') ?? '1'
  return await getJobOffers({
    countries,
    page: parseInt(page)
  })
    .then(response => {
      const offersIds = response.items.map(offer => offer.id)
      return NextResponse.json(
        {
          items: offersIds,
          totalResults: response.totalResults,
          totalPages: response.totalPages
        })
    })
    .catch(error => {
      console.error(error)
      return NextResponse.json({ error }, { status: 500 })
    })
}
