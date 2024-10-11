import React from 'react'
import { StoreCard } from '../Home/Featured-stores'

const ProductListing = ({searchText}:{searchText: string}) => {
  return (

    <section className='w-full mt-[5.6rem] '>
    {!searchText &&( <h4 className='font-semibold text-4xl'>All Products</h4>)}   
        <div className="bg-[#EFEFEF] hsection my-10 p-6 md:p-12 rounded-3xl">
  <div className="max-w-6xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StoreCard
        imageUrl="/product.svg"
        name="Bryon Medic Stores"
        rating={20}
        priceEth={0.002}
        priceUsd={12}
      />
      <StoreCard
        imageUrl="/product2.svg"
        name="McFeron Pharma"
        rating={20}
        priceEth={0.002}
        priceUsd={12}
      />
      <StoreCard
        imageUrl="/product3.svg"
        name="Zygan Medics"
        rating={20}
        priceEth={0.002}
        priceUsd={12}
      />
         <StoreCard
        imageUrl="/product.svg"
        name="Bryon Medic Stores"
        rating={20}
        priceEth={0.002}
        priceUsd={12}
      />
      <StoreCard
        imageUrl="/product2.svg"
        name="McFeron Pharma"
        rating={20}
        priceEth={0.002}
        priceUsd={12}
      />
      <StoreCard
        imageUrl="/product3.svg"
        name="Zygan Medics"
        rating={20}
        priceEth={0.002}
        priceUsd={12}
      />
    </div>
  </div>
</div>
    </section>
  )
}

export default ProductListing