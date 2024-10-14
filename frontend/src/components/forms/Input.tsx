
import { useState } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  label?: string
  className?: string
  children?: React.ReactNode
}

const Input = (props: InputProps) => {

  const {errorMessage, label, type, className, children, ...rest } = props

  return (
    <div className={`flex justify-between items-center gap-8 px-5 h-14 rounded-md bg-gray-100 ${className}`}>
      <input className="w-full h-8 outline-none bg-transparent" required {...rest} />
      {children}
    </div>
  )
}

export default Input
