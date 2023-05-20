import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center py-4 bg-gray-900'>
      <div className='inline-flex justify-center items-center font-semibold'>
        <p className='text-white'>
          <a href='https://github.com/sebas-pena/'>
            <span>sebas-pena</span>
          </a>
        </p>
      </div>
      <p className='text-white'>
        <a href='https://developer.infojobs.net/' className='font-semibold' target='_blank' rel='noreferrer'>
          InfoJobs API
        </a>
        {' - '}
        <a href='https://nextjs.org/' className='font-semibold' target='_blank' rel='noreferrer'>
          Next.js
        </a>
        {' - '}
        <a href='https://tailwindcss.com/' className='font-semibold' target='_blank' rel='noreferrer'>
          Tailwind CSS
        </a>
      </p>
    </footer>
  )
}

export default Footer
