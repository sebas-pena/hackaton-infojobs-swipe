'use client'
import React, { useEffect, useState } from 'react'
import Heading from '../text/Heading'
import TextArea from '../inputs/TextArea'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { saveSettings } from '@/store/features/worker-settings/workerSettingsSlice'
import { CountryInput, CountryValue } from '../inputs/CountryInput'
import Image from 'next/image'
import Link from 'next/link'

const WorkerSettingsForm = () => {
  const [presentation, setPresentation] = useState('')
  const [countries, setCountries] = useState<CountryValue[]>([])
  const dispatch = useAppDispatch()
  const settings = useAppSelector((state) => state.workerSettings)
  const [showTick, setShowTick] = useState(false)

  const handleSaveSettings = () => {
    dispatch(saveSettings({ presentation, countrysOfInterest: countries }))
    localStorage.setItem('workerSettings', JSON.stringify(settings))
    setShowTick(true)
    setTimeout(() => {
      setShowTick(false)
    }, 3000)
  }

  useEffect(() => {
    setPresentation(settings.presentation)
    setCountries(settings.countrysOfInterest)
  }, [settings])

  return (
    <div className='flex-1 flex items-center flex-col w-full max-w-lg'>
      <div className='text-center my-3'>
        <Heading level={2}>Ajustes</Heading>
      </div>
      <TextArea onChange={(e) => setPresentation(e.target.value)} value={presentation} label='Carta de Presentacion' placeholder='Demuestra tu entusiasmo y habilidades relevantes para {PUESTO} en {EMPRESA}.' />
      <p className='text-xs text-[#333] mt-1 mb-3'>
        Utiliza los marcadores de posición <span className='font-semibold'>{'{EMPRESA}'}</span> y <span className='font-semibold'> {'{PUESTO}'}</span> en tu carta de presentación.Estos serán reemplazados automáticamente por el nombre de la empresa y el puesto al momento de enviarla.{' '}
        <a
          href='https://orientacion-laboral.infojobs.net/que-debe-incluir-y-que-no-una-carta-de-presentacion'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary font-semibold'
        >
          Consejos
        </a>
      </p>
      <CountryInput
        label='Países de Interés'
        placeholder='Escribe un país...'
        values={countries}
        onChange={setCountries}
      />
      <button disabled={showTick} className={`text-white font-coolvetica py-2 px-4 mt-3 rounded duration-300 ${showTick ? 'bg-green-700' : 'bg-primary hover:bg-primary-700'}`} onClick={handleSaveSettings}>
        {!showTick && 'Guardar Cambios'}
        {showTick && <Image src='/svg/tick.svg' width={20} height={20} alt='' />}
      </button>
      <Link href='/worker/offers' className='mt-3'>
        Ver ofertas de empleo
      </Link>
    </div>
  )
}

export default WorkerSettingsForm
