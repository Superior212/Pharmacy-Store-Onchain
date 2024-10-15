import React from 'react'
import { Button } from '../ui/button'
import HeroImage from '../../assets'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex bg-[#0169FE] w-full h-[30rem] rounded-3xl pb-[3.813rem] pt-[7.063rem] px-5 md:pl-[2.375rem] mb-[2.68rem]'> 
      <section className='w-3/6'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left text-white">
          VERIFIED STORES
        </h1>
         <div className="text-center sm:text-left">
          <p className='text-white text-base sm:text-lg md:text-lg'>
           Explore our handpicked selection of trusted, verified stores offering authentic medications, ensuring a secure, reliable, and seamless shopping experience for all your healthcare needs
          </p>
          <Button
            className="bg-white text-blue-600 rounded-full px-8 py-2 text-sm sm:text-base"
            size="lg">
              Start Shopping
          </Button>
        </div>
      </section>
      <Image src="/portrait2.svg" alt="Hero" width={0} height={0} className='w-[30rem] h-[20rem]' />
    </div>   
  )
}

export default Hero