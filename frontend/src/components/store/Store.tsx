"use client";
import React, { useState } from 'react'
import Hero from './Hero'
// import Search from './Search'
import StoreListing from './StoreListing'
import Search from '../Medication/Search';

const Store = () => {

    const [searchText, setSearchText] = useState("")
    
    return (
      <main className='w-full pt-4'>
          {!searchText && (<Hero/>)}
          <Search searchText={searchText} setSearchText={setSearchText}/>
          <StoreListing searchText={searchText}/>
      </main>
    )
}

export default Store
