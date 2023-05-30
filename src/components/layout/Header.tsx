'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@/store/hooks'
import LogoutButton from '../ui/buttons/LogoutButton'

const Header = () => {
  const user = useAppSelector((state) => state.user)
  const app = useAppSelector((state) => state.app)
  const username = (user != null) ? `${user.name} ${user.surname1}` : 'Invitado'
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  const photo = (user != null && user?.hasPhoto) ? user.photo : '/img/default-user.png'
  const isUserLogged = app.loggedIn && !app.guest

  return (
    <header className='w-full bg-white border-b border-[#e6e6e6]'>
      <div className='w-full max-w-4xl px-3 mx-auto flex items-center justify-between h-[85px]'>
        <div className='w-0 flex-1 hidden sm:block' />
        <Link href='/' className='min-w-max'>
          <h1 className='flex gap-2 h-full justify-center items-center'>
            <Image src='/svg/icon.svg' width={36} height={26} alt='InfoJobs Swipe' />
            <p className='font-coolvetica font-semibold text-primary text-3xl'>Swipe</p>
          </h1>
        </Link>
        <div className='w-0 flex-1 flex justify-end items-center gap-2'>
          {
            isUserLogged && (
              <>
                <Link href='/worker/settings' className='flex items-center justify-end gap-3 h-full'>
                  <p className='text-lg font-coolvetica font-semibold text-[#797a7a]'>{username}</p>
                  <div className='rounded-full overflow-hidden'>
                    <Image src={photo} width={28} height={28} alt='User' />
                  </div>
                </Link>
                <LogoutButton />
              </>
            )
          }
          {
            !isUserLogged &&
              <Link href='/worker' className='flex items-center justify-end gap-3 h-full'>
                <p className='text-sm font-rubic font-semibold text-[#797a7a]'>Iniciar sesión</p>
              </Link>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
