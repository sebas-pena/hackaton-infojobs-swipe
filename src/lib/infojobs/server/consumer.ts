import { InfoJobsOAuthResponse, InfoJobsCandidateResposne, InfoJobsOfferResponse } from '../types'

const INFOJOBS_BASIC_AUTH = process.env.INFOJOBS_BASIC_AUTH ?? ''
const CLIENT_SECRET = process.env.INFOJOBS_CLIENT_SECRET ?? ''
const CLIENT_ID = process.env.NEXT_PUBLIC_INFOJOBS_CLIENT_ID ?? ''
const REDIRECT_URI = process.env.NEXT_PUBLIC_INFOJOBS_REDIRECT_URI ?? ''

async function api<T> (url: string, config?: RequestInit): Promise<T> {
  return await fetch(url, config)
    .then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return await (response.json() as Promise<T>)
    })
}

export const getInfoJobsAccessToken = async (code: string) => await api<InfoJobsOAuthResponse>('https://www.infojobs.net/oauth/authorize', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: REDIRECT_URI
  })
})

export const getInfoJobsProfile = async (accessToken: string) => await api<InfoJobsCandidateResposne>(
  'https://api.infojobs.net/api/6/candidate',
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_BASIC_AUTH}, Bearer ${accessToken}`
    }
  }
)

export const getJobOffers = async (
  {
    countries = [],
    page = 1
  }: {
    countries: string[]
    page: number
  }
) => {
  const url = new URL('https://api.infojobs.net/api/9/offer')
  url.searchParams.append('page', page.toString())
  if (countries.length > 0) {
    url.searchParams.append('countries', countries.join(','))
  }
  return await api<InfoJobsOfferResponse>(
    url.toString(),
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${INFOJOBS_BASIC_AUTH}`
      }
    }
  )
}

export const getJobOfferDetails = async (id: string) => await api<InfoJobsOfferResponse>(
  `https://api.infojobs.net/api/7/offer/${id}`,
  {
    method: 'GET',
    headers: {
      Authorization: `Basic ${INFOJOBS_BASIC_AUTH}`
    }
  }
)
