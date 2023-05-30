'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Spinner from '../ui/Spinner'
import { login } from '@/store/features/user/userSlice'
import { useAppDispatch } from '@/store/hooks'
import { loggedAsWorker } from '@/store/features/app/appSlice'

const InfoJobsOAuthExchange = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const searchParams = useSearchParams()
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    const code = searchParams.get('code')
    if (code != null) {
      fetch('/api/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      })
        .then(async res => await res.json())
        .then(async () =>
          await fetch('/api/me')
        )
        .then(async res => await res.json())
        .then(data => {
          dispatch(login(data))
          dispatch(loggedAsWorker())
          const redirect = localStorage.getItem('oauth-redirect')
          if (redirect != null) {
            router.replace(`/${redirect}/settings`)
          } else {
            router.replace('/')
          }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <div className='flex-1 flex items-center justify-center'>
      {loading && <Spinner width={50} height={50} fill='#167db7' />}
      {error && <p className='text-red-500'>Error</p>}
    </div>
  )
}

export default InfoJobsOAuthExchange
