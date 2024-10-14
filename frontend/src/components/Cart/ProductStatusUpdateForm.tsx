'use client'
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";

const ProductStatusUpdateForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full lg:w-[22.18rem]">
    <Input
      className="bg-[#F9F9F9] w-full h-[3.25rem] px-5 rounded-lg"
      placeholder="Name of personnel"
    />
    <Input
      className="bg-[#F9F9F9] w-full h-[3.25rem] px-5 rounded-lg"
      placeholder="Enter Code"
    />
    <Select>
      <SelectTrigger className="w-full h-[3.25rem] rounded-lg bg-[#F9F9F9] text-sm text-gray-500">
        <SelectValue className="" placeholder="Choose Status" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
       
        </SelectGroup>
      </SelectContent>
    </Select>
    <div className="flex items-center space-x-6">
<Checkbox className="w-6 h-6" id="terms" />
<label
  htmlFor="terms"
  className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
>
I agree that all information provided here are correct
</label>
</div>
<Button type="button" className="bg-[#4182F9] text-white flex items-center justify-center w-full h-12 rounded-lg ">Update</Button>
  </form>
  )
}

export default ProductStatusUpdateForm