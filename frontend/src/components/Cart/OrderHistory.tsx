import MemoCheck from '@/icons/Check'
import MemoTriangle from '@/icons/Traingle'
import React from 'react'

const OrderHistory = () => {
  return (
    <div className="w-[17.81rem] rounded-[0.625rem] bg-[#EFEFEF] pt-[1.43rem] px-[1.43rem] h-[17.12rem]">
    <h5 className="font-medium text-xl text-[#22212E] mb-[1.62rem]">Tracking history</h5>
    <div className="flex flex-col gap-[1.12rem]">
    <div className="w-full h-[2.12rem] flex items-center gap-[1.12rem]">
      <MemoCheck/>
      <div className="flex flex-col gap-[0.125rem]">
        <h6 className="font-medium text-sm text-[#22212E]">Delivered</h6>
        <p className="text-[#797979] text-xs font-normal">23 October 2024</p> 
      </div>
    </div>
    <div className="w-full h-[2.12rem] flex items-center gap-[1.12rem]">
      <MemoCheck/>
      <div className="flex flex-col gap-[0.125rem]">
        <h6 className="font-medium text-sm text-[#22212E]">Delivered</h6>
        <p className="text-[#797979] text-xs font-normal">23 October 2024</p> 
      </div>
    </div>
    <div className="w-full h-[2.12rem] flex items-center gap-[1.12rem]">
      <MemoTriangle/>
      <div className="flex flex-col gap-[0.125rem]">
        <h6 className="font-medium text-sm text-[#22212E]">Payment</h6>
        <p className="text-[#797979] text-xs font-normal">23 October 2024</p> 
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default OrderHistory