import React from 'react'

interface FormHeaderProps {
  title: string
  children?: React.ReactNode
}

const FormHeader = (props: FormHeaderProps) => {

  const { title, children } = props;

  return (
    <div className='border-b-[1px] border-gray-200'>
      <h1 className='text-5xl font-bold pb-5'>
        {title}
      </h1>

      {children != null && children ? <div className='py-2'>{children}</div> : null}
      
    </div>
  )
}

export default FormHeader
