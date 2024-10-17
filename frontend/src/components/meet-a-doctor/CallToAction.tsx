import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className='flex flex-col justify-between md:h-[17rem] items-center w-full py-20'>
      <h1 className='text-4xl font-semibold md:w-[45%] text-center md:leading-12 mb-10'>Do you want to see health care officer?</h1>
      <Button className="bg-white text-white bg-[#202E48] rounded-full px-6 py-5 text-sm sm:text-base hover:pointer hover:bg-sky-800"
            size="lg">
              <Link href="/chat">Enter Secure Room</Link>
          </Button>
    </section>
  )
}

export default CallToAction
