'use client'
import { loggedAsGuest } from '@/store/features/app/appSlice'
import { cleanUserState } from '@/store/features/user/userSlice'
import { useAppDispatch } from '@/store/hooks'
import React from 'react'

const LoginAsGuestButton = () => {
  const dispatch = useAppDispatch()
  const handleChange = () => {
    dispatch(cleanUserState())
    dispatch(loggedAsGuest())
  }

  return (
    <button className='text-primary' onClick={handleChange}>
      Continuar como sin iniciar sesión
    </button>
  )
}

export default LoginAsGuestButton
