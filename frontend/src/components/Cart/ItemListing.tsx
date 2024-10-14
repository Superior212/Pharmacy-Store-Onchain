'use client'
import MemoBucket from '@/icons/Bucket'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { TrackingModal } from './TrackingModal'
import { Link1Icon } from '@radix-ui/react-icons'

const ItemListing = () => {
    const [showTracking, setShowTracking] = useState(false)
    const toggleIsOpen = () => setShowTracking(!showTracking)
    return ( 
        <>
        <div  className='w-full md:w-[38.9rem] h-[7.56rem] py-4 px-[1.87rem] border-b border-b-[#D9D9D98F] shadow-cartItem flex gap-[4.43rem] mb-[1.5rem] '> 
            <div className='flex'>
                <Image className='mr-2 w-12 h-12 md:w-[88px] md:h-[88px]' src="/cartdrug.svg" alt="drugs" width={88} height={88}/>
                <div>
                    <h6 className='text-lg font-semibold text-[#313131]'>Acetaminophen Pills</h6>
                    <div>
                        <span className='text-sm font-medium text-[#6C6C6C]'>Store:</span> <span className='text-[#2D2D2D] text-sm font-medium'>McFeron Pharma</span> <span className='text-sm font-medium text-[#6C6C6C]'>Brand:</span> <span className='text-[#2D2D2D] text-sm font-medium'>GSK</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                    {/* <div className='flex items-center cursor-pointer'>
                        <MemoBucket />
                        <span className='text-sm font-normal text-black'> Delete</span>
                    </div> */}
                    <div onClick={toggleIsOpen} className='flex items-center cursor-pointer gap-1'>
                        <Link1Icon width={20} height={20} />
                        <span className='text-sm font-normal text-black'>track </span>
                    </div>
                    </div>
                  
                </div>
            </div>

            <div className='flex flex-col gap-[11.83px] mt-[0.5rem] '>
                <h6>0.002ETH</h6>
                <Button disabled className='bg-[#1364FF] text-white rounded-[6.25rem] w-[6.68rem] h-[2rem] flex items-center justify-center'>Pending</Button>
            </div>
        </div>
        <TrackingModal isOpen={showTracking} toggleIsOpen={() => setShowTracking(!showTracking)}/>
        </>
    )
}

export default ItemListing