'use client'
import { logout } from '@/store/features/app/appSlice'
import { cleanUserState } from '@/store/features/user/userSlice'
import { useAppDispatch } from '@/store/hooks'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleLogout = () => {
    localStorage.removeItem('oauth-redirect')
    localStorage.removeItem('workerSettings')
    void fetch('/api/logout', { method: 'POST' })
      .then(() => {
        dispatch(logout())
        dispatch(cleanUserState())
        router.replace('/')
      })
  }
  return (
    <button onClick={handleLogout} className='aspect-square h-7 p-1 flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-lg'>
      <Image src='/svg/exit.svg' width={20} height={20} alt='exit' />
    </button>
  )
}

export default LogoutButton
