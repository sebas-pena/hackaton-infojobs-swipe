import { getJobOfferDetails } from '@/lib/infojobs/server/consumer'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  req: NextRequest,
  params: { params: { id: string } }
) => {
  console.log(params)
  const { id } = params.params
  try {
    const response = await getJobOfferDetails(id)
    return NextResponse.json(response)
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: e }, { status: 500 })
  }
}
