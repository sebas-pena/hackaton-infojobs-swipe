import React from 'react'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

const Heading = ({ level, children }: HeadingProps) => {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Heading className='text-xl sm:text-2xl font-semibold text-primary'>
      {children}
    </Heading>
  )
}

export default Heading
