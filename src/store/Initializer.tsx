'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { login } from './features/user/userSlice'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { loggedAsWorker } from './features/app/appSlice'
import { saveSettings } from './features/worker-settings/workerSettingsSlice'

const Initializer = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname.startsWith('/callback')) {
      fetch('/api/me', {
        method: 'GET'
      })
        .then(async res => {
          const json = await res.json()
          return res.ok ? json : await Promise.reject(json)
        })
        .then(data => {
          console.log(data)
          dispatch(login(data))
          dispatch(loggedAsWorker())
          const workerSettings = localStorage.getItem('workerSettings')
          if (workerSettings != null) {
            const parsedWorkerSettings = JSON.parse(workerSettings)
            dispatch(saveSettings(parsedWorkerSettings))
          }
        })
        .catch(() => { })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <>
      {
        loading && (
          <div className='animate-pulse w-screen h-screen flex items-center justify-center'>
            <Image src='/svg/icon.svg' width={125} height={32} alt='InfoJobs Logo' />
          </div>
        )
      }
      {
        !loading && children
      }
    </>
  )
}

export default Initializer
