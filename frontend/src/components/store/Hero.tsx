import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    
     <section className='bg-[#0169FE]  w-full   rounded-3xl pb-[3.813rem] pt-[7.063rem] px-5 md:pl-[2.375rem] mb-[2.68rem]'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-[2.688rem] text-white">
            VERIFIED STORES
          </h1>
          <div className="text-center sm:text-left">
              <Button
                className="bg-white text-black rounded-full px-8 py-2 text-sm sm:text-base"
                size="lg">
                See All
              </Button>
            </div>
          </section>
       
  )
}

export default Hero