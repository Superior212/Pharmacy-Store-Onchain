'use client'
import { StoreCard } from '@/components/Home/Featured-stores'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useDebounce from '@/hooks/useDebounce'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

const page = () => {
    
    const [searchText, setSearchText] = useState("")
  return (
    <main className='max-w-[75rem] mx-auto pt-4 px-4 '>
   {
    !searchText &&(<section className='bg-[#0169FE]  w-full   rounded-3xl pb-[3.813rem] pt-[7.063rem] px-5 md:pl-[2.375rem] mb-[2.68rem]'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-[2.688rem] text-white">
        Available Medications
      </h1>
      <p className="max-w-[23.31rem] text-base sm:text-lg md:text-xl mb-6 text-left text-white">
            Discover a decentralized pharmacy that secures your health
            records, ensures transparent sourcing of medications, and offers
            seamless crypto transactions.
          </p>
      </section>)
   } 
        <div className='w-full   lg:w-[69.56rem] lg:mx-[2.7rem] h-[3.5rem]  relative '>
            <SearchIcon className='absolute left-[1.25rem] top-[50%] translate-y-[-50%] text-gray-400 -z-10' size={20}/>
            <Input value={searchText} onChange={(e) => setSearchText(e.target.value)}  className='w-full h-full border rounded-[6.2rem] border-[#0169FE52] px-[3rem] md:px-[3.5rem]' placeholder='Search for a drug by name, brand, or condition'/>
            <Button className="bg-[#0169FE] w-[5.5rem] md:w-[7.6rem] h-[3rem] text-white rounded-[6.2rem] absolute right-[0.56rem] translate-y-[-50%] top-[50%]">
                Search
              </Button>

        </div>

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
        </main>
  
  )
}

export default page