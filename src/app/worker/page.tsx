import LoginAsGuestButton from '@/components/ui/buttons/LoginAsGuestButton'
import OAuthLink from '@/components/ui/links/OAuthLink'
import Heading from '@/components/ui/text/Heading'
import React from 'react'

const page = () => {
  return (
    <div className='pt-3 flex flex-col justify-center items-center sm:justify-start gap-3'>
      <Heading level={2}>Antes de empezar...</Heading>
      <div className='max-w-[440px] text-center'>
        <p>
          Ingresa con tu cuenta para potenciar tu experiencia en Swipe!.
        </p>
        <p>
          Encuentra oportunidades laborales que se ajusten a tu perfil y aplica a ellas en segundos sin complicaciones.
        </p>
      </div>
      <OAuthLink worker />
      <p>o</p>
      <LoginAsGuestButton />
    </div>
  )
}

export default page
