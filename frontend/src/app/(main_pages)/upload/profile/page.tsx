"use client"

import { FormHeader, Patient, HealthOfficers, CareProviders } from "@/components/forms"
import { useState } from "react"


const ProfileSetup = () => {

  const [ form, setForm] = useState("Patient")

  const handleFormDisplay = (name: string) => {
    setForm(name)
  }

  const pages =  ["Patient", "Health Officers", "Care Providers"];

  const active = "bg-[#1364FF] text-gray-100 bg-blue-600 transition-colors";


  return (
    <div className="px-4 md:px-0">
      <header className="mt-8">
        <FormHeader title="Profile Setup">
          <nav className="flex gap-4">
            {pages.map((page) => (
              <button key={page} className={`px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors ${form === page ? active : "text-gray-500"}`} onClick={() => handleFormDisplay(page)}>{page}</button>
            ))}
          </nav>
        </FormHeader>
      </header>

      <main className="mt-8">
        {form === "Patient" ? <Patient /> : form === "Health Officers" ? <HealthOfficers /> : <CareProviders />}
      </main>
    </div>
  )
}

export default ProfileSetup
