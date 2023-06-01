import EmployerOffer, { IEmployerOffer } from '@/components/ui/cards/EmployerOffer'
import Heading from '@/components/ui/text/Heading'
import React from 'react'

const offers: IEmployerOffer[] = [
  {
    title: 'ANDROID DEVELOPER BILBAO',
    image: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/bd/bd8cb061-d84d-426d-81e6-1a041d87a5dd?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDE1NDU5ODMsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy9iZC9iZDhjYjA2MS1kODRkLTQyNmQtODFlNi0xYTA0MWQ4N2E1ZGQiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.W8Pofvqk4yn2Ld4iVpgalBtz4n5eWwUYlrPbU9QtMkG1ysgoTxwWk_oVm0_UEUoPiUm0wKKL98irlRpEnFMIyt3-vyJANcgA_cy0fOj7PgOk24MNl6bQrEpdOpHoL75bctgP9HQSLxqBHPwei7hzHgpPx_Dl4oB4UglXAXsW5qKY2MINLNY5vv1Lu8G8FIAOpiicT5zhapP_rIYQ7fIJJmKr9yocW0SxtSoiOK-NyW3kWYCvlBvnum2jP6k9bJ6twaqC0NLrfF0or8vbocKBjASYPRbC8N8LXv89BcQgBTJGRmKaAc4n9lypzqs76fMguFpyeP-ndSTYgELz4dWGyg&AccessKeyId=d724d9a53d95a810',
    province: 'Vizcaya/Bizkaia',
    journey: 'Jornada completa',
    vacancies: 1,
    skills: [
      'Android',
      'Java',
      'Kotlin'
    ],
    description: 'Buscamos un/a desarrollador/a Android para incorporarse a nuestro equipo de desarrollo de Bilbao. Se requiere experiencia en desarrollo de aplicaciones nativas con Java y Kotlin.'
  },
  {
    title: 'Full Stack Developer',
    image: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/bd/bd8cb061-d84d-426d-81e6-1a041d87a5dd?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDE1NDU5ODMsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy9iZC9iZDhjYjA2MS1kODRkLTQyNmQtODFlNi0xYTA0MWQ4N2E1ZGQiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.W8Pofvqk4yn2Ld4iVpgalBtz4n5eWwUYlrPbU9QtMkG1ysgoTxwWk_oVm0_UEUoPiUm0wKKL98irlRpEnFMIyt3-vyJANcgA_cy0fOj7PgOk24MNl6bQrEpdOpHoL75bctgP9HQSLxqBHPwei7hzHgpPx_Dl4oB4UglXAXsW5qKY2MINLNY5vv1Lu8G8FIAOpiicT5zhapP_rIYQ7fIJJmKr9yocW0SxtSoiOK-NyW3kWYCvlBvnum2jP6k9bJ6twaqC0NLrfF0or8vbocKBjASYPRbC8N8LXv89BcQgBTJGRmKaAc4n9lypzqs76fMguFpyeP-ndSTYgELz4dWGyg&AccessKeyId=d724d9a53d95a810',
    province: 'Barcelona',
    journey: 'Jornada completa',
    vacancies: 2,
    skills: [
      'React',
      'NodeJS',
      'MongoDB'
    ],
    description: 'Buscamos un/a desarrollador/a Full Stack para incorporarse a nuestro equipo de desarrollo de Barcelona. Se requiere experiencia en desarrollo con React, NodeJS y MongoDB.'
  },
  {
    title: 'HR Manager',
    image: 'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/bd/bd8cb061-d84d-426d-81e6-1a041d87a5dd?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDE1NDU5ODMsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy9iZC9iZDhjYjA2MS1kODRkLTQyNmQtODFlNi0xYTA0MWQ4N2E1ZGQiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.W8Pofvqk4yn2Ld4iVpgalBtz4n5eWwUYlrPbU9QtMkG1ysgoTxwWk_oVm0_UEUoPiUm0wKKL98irlRpEnFMIyt3-vyJANcgA_cy0fOj7PgOk24MNl6bQrEpdOpHoL75bctgP9HQSLxqBHPwei7hzHgpPx_Dl4oB4UglXAXsW5qKY2MINLNY5vv1Lu8G8FIAOpiicT5zhapP_rIYQ7fIJJmKr9yocW0SxtSoiOK-NyW3kWYCvlBvnum2jP6k9bJ6twaqC0NLrfF0or8vbocKBjASYPRbC8N8LXv89BcQgBTJGRmKaAc4n9lypzqs76fMguFpyeP-ndSTYgELz4dWGyg&AccessKeyId=d724d9a53d95a810',
    province: 'Madrid',
    journey: 'Jornada completa',
    vacancies: 1,
    skills: [
      'Recursos Humanos',
      'Selección de personal',
      'Entrevistas'
    ],
    description: 'Buscamos un/a HR Manager para incorporarse a nuestro equipo de desarrollo. Se requiere experiencia en selección de personal, entrevistas y gestión de recursos humanos.'
  }
]

const page = () => {
  return (
    <div className='pt-3 flex flex-col items-center sm:justify-start gap-3'>
      <Heading level={2}>Encuentra a tu próximo compañero de equipo</Heading>
      <div className='max-w-[600px] text-center'>
        <p>
          Encontramos estas ofertas en tu perfil, ¿para cuál deseas comenzar a buscar candidatos?
        </p>
        <ul className='flex flex-col gap-4 pt-3'>
          {
            offers.map((offer, index) => (
              <li key={index}>
                <EmployerOffer {...offer} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default page
