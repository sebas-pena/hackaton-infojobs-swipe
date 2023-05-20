import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full h-[85px] bg-white border-b border-[#e6e6e6]">
      <h1 className="flex h-full flex-col justify-center items-center">
        <div className="flex gap-2 justify-center items-start">
          <Image src="/svg/icon.svg" width={36} height={26} alt="InfoJobs Swipe" />
          <Image src="/svg/logo.svg" width={125} height={32} alt="InfoJobs Logo" />
        </div>
        <p className="text-xl font-rubic italic font-semibold text-[#797a7a]">Swipe</p>
      </h1>
    </header>
  )
}

export default Header