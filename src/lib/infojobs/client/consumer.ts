import { InfoJobsDetailedOfferResponse, InfoJobsOfferResponse } from '../types'

async function api<T> (url: string, config?: RequestInit): Promise<T> {
  return await fetch(url, config)
    .then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return await (response.json() as Promise<T>)
    })
}

export const clientGetJobOffers = async ({
  countries = [],
  page = 1
}: {
  countries: string[]
  page: number
}) => {
  let url = '/api/infojobs/work-offers'
  url += `?page=${page}`
  if (countries.length > 0) {
    url += `&countries=${countries.join(',')}`
  }
  return await api<InfoJobsOfferResponse>(url)
}

export const clientGetJobOfferDetails = async (id: string) => {
  return await api<InfoJobsDetailedOfferResponse>(`/api/infojobs/work-offers/${id}`)
}
