'use client'
import Link from 'next/link'
import React from 'react'

const OAUTH_BASE_URL = 'https://www.infojobs.net/api/oauth/user-authorize/index.xhtml'
const OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_INFOJOBS_CLIENT_ID ?? ''
const OAUTH_REDIRECT_URI = process.env.NEXT_PUBLIC_INFOJOBS_REDIRECT_URI ?? ''
const SCOPE = process.env.NEXT_PUBLIC_INFOJOBS_SCOPE ?? ''
const OAUTH_URL = `${OAUTH_BASE_URL}?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URI}&response_type=code&scope=${SCOPE}`

const OAuthLink = ({ worker }: { worker: boolean }) => {
  if (typeof window === 'undefined') return null
  localStorage.setItem('oauth-redirect', worker ? 'worker' : 'employer')
  return (
    <Link href={OAUTH_URL} className='flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-primary text-white text-center'>
      <p className='text-md height-[16px]'>Ingresar con <span className='font-semibold'>InfoJobs</span></p>
    </Link>
  )
}

export default OAuthLink
