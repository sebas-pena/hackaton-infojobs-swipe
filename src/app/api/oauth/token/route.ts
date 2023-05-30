import { getInfoJobsAccessToken } from '@/lib/infojobs/server/consumer'
import { NextRequest, NextResponse } from 'next/server'

interface IBody {
  code: string
}

export async function POST (request: NextRequest) {
  try {
    const { code }: IBody = await request.json()
    const oauthRes = await getInfoJobsAccessToken(code)

    const { access_token: accessToken, expires_in: expiresIn, refresh_token: refreshToken } = oauthRes
    const response = NextResponse.json({ accessToken })

    const expiresAt = new Date(Date.now() + expiresIn * 1000)

    response.cookies.set('infojobs_access_token', accessToken, {
      httpOnly: true,
      expires: expiresAt
    })

    response.cookies.set('infojobs_refresh_token', refreshToken, {
      httpOnly: true
    })

    response.cookies.set('infojobs_expires_at', expiresAt.toISOString(), {
      httpOnly: true
    })

    return response
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 400 })
  }
}
