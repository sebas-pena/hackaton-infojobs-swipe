import { NextResponse } from 'next/server'

export async function POST () {
  try {
    const response = NextResponse.json({ message: 'Logout success' }, { status: 200 })
    response.cookies.set('infojobs_access_token', '', {
      httpOnly: true,
      maxAge: 0
    })

    response.cookies.set('infojobs_refresh_token', '', {
      httpOnly: true,
      maxAge: 0
    })

    response.cookies.set('infojobs_expires_at', '', {
      httpOnly: true,
      maxAge: 0
    })

    return response
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}
