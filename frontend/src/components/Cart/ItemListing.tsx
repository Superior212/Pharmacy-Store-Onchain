import MemoBucket from '@/icons/Bucket'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const ItemListing = () => {
    return ( 
        <div className='w-[38.9rem] h-[7.56rem] py-4 px-[1.87rem] border-b border-b-[#D9D9D98F] shadow-cartItem flex gap-[4.43rem] mb-[1.5rem]'> 
            <div className='flex'>
                <Image className='mr-2' src="/cartdrug.svg" alt="drugs" width={88} height={88} />
                <div>
                    <h6 className='text-lg font-semibold text-[#313131]'>Acetaminophen Pills</h6>
                    <div>
                        <span className='text-sm font-medium text-[#6C6C6C]'>Store:</span> <span className='text-[#2D2D2D] text-sm font-medium'>McFeron Pharma</span> <span className='text-sm font-medium text-[#6C6C6C]'>Brand:</span> <span className='text-[#2D2D2D] text-sm font-medium'>GSK</span>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <MemoBucket />
                        <span className='text-sm font-normal text-black'> Delete</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[11.83px] mt-[0.5rem] '>
                <h6>0.002ETH</h6>
                <Button className='bg-[#1364FF] text-white rounded-[6.25rem] w-[6.68rem] h-[2rem] flex items-center justify-center'>Purchase</Button>
            </div>
        </div>
    )
}

export default ItemListing