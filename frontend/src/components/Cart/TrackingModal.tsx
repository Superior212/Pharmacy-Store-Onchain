import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import OrderHistory from "./OrderHistory"
import MemoCheck from "@/icons/Check"
import MemoTriangle from "@/icons/Traingle"

export function TrackingModal({isOpen, toggleIsOpen}:{isOpen:boolean, toggleIsOpen: () => void}) {
  return (
    <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
      <DialogContent className="w-[17.81rem] rounded-[0.625rem] bg-[#EFEFEF] pt-[1.43rem] px-[1.43rem] h-[17.12rem]">
       <DialogHeader>
       <h5 className="font-medium text-xl text-[#22212E] mb-[1.62rem]">Tracking history</h5>
       </DialogHeader>
       <DialogDescription>
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
    </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
