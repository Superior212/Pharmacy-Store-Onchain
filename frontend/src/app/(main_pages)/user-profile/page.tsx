"use client";

import { Button } from "@/components/ui/button";
import { General, Appointments, TransactionTable } from "@/components/userProfile";
import { Bell } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const UserProfile = () => {

  const [tabPage, setTabPage] = useState("General")

  const tabs = ['General', 'Wallet & Transactions', 'Consultations', 'Product Purchase'];

  const handleFormDisplay = (name: string) => {
    setTabPage(name)
  }

  const active = "bg-[#1364FF] text-gray-100 bg-blue-600 transition-colors";

  const averageStarRating = 4;

  const button = "w-[120px] h-[40px] rounded-full border-blue-600 border-[1px] text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors";

  return (
    <div className='w-full p-8 my-10 rounded-2xl bg-gray-100'>
            <div className='p-6 w-full'>
      <div className="flex items-center justify-between w-full">
       <main className='flex w-full space-x-6 mb-6'>
       <div className="">
          <Image
            src="/user.svg"
            alt='user'
            width={100}
            height={100}
            className="rounded-full w-28 h-28 mr-2"
          />
        </div>
        <div className='flex flex-col w-full gap-1'>
        <div className="flex w-full justify-between">
          <h1 className="text-2xl font-bold">Berachi Reynolds</h1>
          <div className="flex items-center">
            <Bell className="w-4 h-4 bg-gray-500 rounded-full p-4 mr-2 text-gray-50" />
            <Button variant="outline" className={`mr-4 ${button}`}>Edit</Button>
            <Button variant="outline" className={`mr-4 ${button}`}>See Doctor</Button>
            
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          {Array.from({ length: averageStarRating }, (_, i) => (
            <Image
              key={i}
              src="/star.png"
              alt='star'
              width={100}
              className='h-4 w-4'
              height={100}
            />
          ))}
        </div>
        <p className="text-gray-600 my-4">
          I'm your friendly pharmacist with a passion for making medication advice <br />
          so fun. When I'm not whipping up prescriptions, I'm likely preparing
          smoothies
        </p>
        </div>
       </main>

      </div>
        <nav className="flex gap-4 borber-b-[1px] border-white w-full ">
            {tabs.map((tab) => (
              <button key={tab} className={`px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors ${tabPage === tab ? active : "text-gray-500"}`} onClick={() => handleFormDisplay(tab)}>{tab}</button>
            ))}
          </nav>
       </div>
        <main className="">
         {tabPage === "Patient" ? <General /> : tabPage === "Wallet & Transactions" ? <TransactionTable /> : tabPage === "Consultations" ? <Appointments /> :  <General />}
        </main>
    </div>
  )
}

export default UserProfile
