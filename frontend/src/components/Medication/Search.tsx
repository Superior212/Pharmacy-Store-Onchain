import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Search = ({searchText, setSearchText}:{searchText: string, setSearchText: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className='w-full   lg:w-[69.56rem] lg:mx-[2.7rem] h-[3.5rem]  relative '>
    <SearchIcon className='absolute left-[1.25rem] top-[50%] translate-y-[-50%] text-gray-400 -z-10' size={20}/>
    <Input value={searchText} onChange={(e) => setSearchText(e.target.value)}  className='w-full h-full border rounded-[6.2rem] border-[#0169FE52] px-[3rem] md:px-[3.5rem]' placeholder='Search for a drug by name, brand, or condition'/>
    <Button className="bg-[#0169FE] w-[5.5rem] md:w-[7.6rem] h-[3rem] text-white rounded-[6.2rem] absolute right-[0.56rem] translate-y-[-50%] top-[50%]">
        Search
      </Button>

</div>
  )
}

export default Search