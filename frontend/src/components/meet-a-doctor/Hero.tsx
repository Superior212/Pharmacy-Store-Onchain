import React from 'react'
import { Button } from '../ui/button'


const Hero = () => {
  return (
    <div className={`flex bg-[#0169FE] w-full h-[28rem] lg:h-[28rem] rounded-3xl md:pl-[2.375rem] mb-[2.68rem] bg-none md:bg-[url('/portrait2.svg')] md:bg-contain md:bg-no-repeat md:bg-[10rem] lg:bg-[29rem] xl:bg-[40rem]`}>
      <section className="w-full md:w-2/3 flex flex-col items-center justify-evenly h-full px-5">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold md:text-left text-white">
          Doctor & Patient Connect
        </h1>
        <div className="text-center sm:text-left">
          <p className='text-white text-base sm:text-lg md:text-lg mb-10 md:w-3/4'>
            You’re just one step away from speaking with a doctor. Enjoy secure, private session to discuss your health concerns.
          </p>
          <Button
            className="bg-white text-blue-600 rounded-full px-8 py-2 text-sm sm:text-base"
            size="lg">
              Meet A Doctor
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Hero