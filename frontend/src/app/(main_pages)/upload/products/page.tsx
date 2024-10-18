"use client"

import { FormHeader, Product } from "@/components/forms"
// import { useState } from "react"


const Products = () => {

  return (
    <div className="px-4 md:px-0">
      <header className="mt-8">
        <FormHeader title="Add Product" />
            
      </header>

      <main className="mt-8">
        <Product />
      </main>
    </div>
  )
}

export default Products
