

interface InputProps  {
  // errorMessage?: string
  // label?: string
  placeholder?: string
  validationProps:object
  className?: string
  children?: React.ReactNode
}

const CustomInput = (props: InputProps) => {

  const { className, children, validationProps } = props

  return (
    <div className={`flex justify-between items-center gap-8 px-5 h-14 rounded-md bg-gray-100 ${className}`}>
  
      <input className="w-full h-8 outline-none bg-transparent" placeholder={props.placeholder} {...validationProps} />

    
      {children}
    </div>
  )
}

export default CustomInput
