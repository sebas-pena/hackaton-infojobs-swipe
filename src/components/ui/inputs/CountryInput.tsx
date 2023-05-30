'use client'
import React, { useState, useRef, useEffect } from 'react'
import COUNTRIES from '@/lib/infojobs/dictionary/countries'

export interface CountryValue {
  name: string
  key: string
}

interface CountryInputProps {
  values: CountryValue[]
  label: string
  onChange: (selectedCountryId: CountryValue[]) => void
  placeholder?: string
}

export const CountryInput = ({ onChange, values, label, placeholder }: CountryInputProps) => {
  const [showList, setShowList] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if ((containerRef.current != null) && !containerRef.current.contains(e.target as Node)) {
        setShowList(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [containerRef])

  const handleChange = (country: CountryValue) => {
    setShowList(false)
    setSearch('')
    onChange([...values, country])
  }

  const handleRemove = (countryKey: string) => {
    onChange(values.filter((value) => value.key !== countryKey))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
    setShowList(true)
  }

  const normalizedSearch = search.toLowerCase()
  const filteredCountries = COUNTRIES.filter((country) => country.value.toLowerCase().includes(normalizedSearch) && !values.some((value) => value.key === country.key))
  return (
    <div className='w-full'>
      <p className='text-lg mb-3 font-semibold text-[#333]'>{label}</p>
      <div>
        <div ref={containerRef} className='relative mb-3 pb-1'>
          <input
            className='border border-solid border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:outline-none rounded-md px-3 py-1 w-full'
            value={search}
            placeholder={placeholder}
            onChange={handleInputChange}
            onFocus={
              () => {
                setShowList(true)
              }
            }
          />
          <ul className={`absolute z-10 border border-gray-300 ${showList ? 'flex flex-col top-full w-full max-h-36 overflow-auto bg-white rounded-md' : 'hidden'}`}>
            {
              filteredCountries.map((country) => (
                <button
                  className='w-full py-1 text-center hover:bg-gray-200 border-b border-[#fefefe]'
                  key={country.id}
                  onClick={() => handleChange({
                    name: country.value,
                    key: country.key
                  })}
                >
                  {country.value}
                </button>
              )
              )
            }
          </ul>
        </div>
        <div>
          {
            values.map((value) => (
              <button key={value.key} onClick={() => handleRemove(value.key)} className='relative group rounded-md px-6 py-1 mr-3 mb-2 items-center justify-between bg-blue-50 text-blue-400 font-semibold'>
                <span className='absolute left-3 group-hover:text-red-500 text-transparent'>
                  x
                </span>
                <p>{value.name}</p>
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}
