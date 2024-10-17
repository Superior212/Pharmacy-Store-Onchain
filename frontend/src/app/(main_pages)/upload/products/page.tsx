"use client"

import { FormHeader } from "@/components/forms"
// import { useState } from "react"


const Products = () => {

  // const [ form, setForm] = useState("Patient")

  // const handleFormDisplay = (name: string) => {
  //   setForm(name)
  // }

  // const pages =  ["Patient", "Health Officers", "Care Providers"];

  // const active = "bg-[#1364FF] text-gray-100 bg-blue-700 transition-colors";

  // const defaultStyle = "text-gray-500 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors";


  return (
    <div className="px-4 md:px-0">
      <header className="mt-8">
        <FormHeader title="Add Product" />
            
      </header>

      <main className="mt-8">
        {/* <Product /> */}
      </main>
    </div>
  )
}

export default Products
