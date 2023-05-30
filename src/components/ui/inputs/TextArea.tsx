import React from 'react'

interface TextAreaProps {
  label: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
}

const TextArea = ({ label, ...props }: TextAreaProps) => {
  return (
    <label className='w-full'>
      <p className='text-lg mb-3 font-semibold text-[#333]'>{label}</p>
      <textarea {...props} className='h-48 resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:ring-1' />
    </label>
  )
}

export default TextArea
