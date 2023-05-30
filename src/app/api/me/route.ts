import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { getInfoJobsProfile } from '@/lib/infojobs/server/consumer'

export const GET = async (req: NextRequest) => {
  const accessToken = cookies().get('infojobs_access_token')
  if (accessToken != null) {
    try {
      const profile = await getInfoJobsProfile(accessToken.value)
      return NextResponse.json(profile, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error }, { status: 400 })
    }
  } else {
    return NextResponse.json({ error: 'No access token' }, { status: 400 })
  }
}
