import { getJobOfferDetails } from '@/lib/infojobs/server/consumer'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  params: { id: string }
) => {
  const { id } = params
  try {
    const response = getJobOfferDetails(id)
    return NextResponse.json(await response)
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: e }, { status: 500 })
  }
}
