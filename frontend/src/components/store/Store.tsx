"use client";
import React, { useState } from 'react'
import Hero from './Hero'
import Search from './Search'
import StoreListing from './StoreListing'

const Store = () => {
    const [searchText, setSearchText] = useState("")
    return (
      <main className='max-w-[75rem] mx-auto pt-4 px-4 '>
          {!searchText && (<Hero/>)}
          <Search searchText={searchText} setSearchText={setSearchText}/>
          <StoreListing searchText={searchText}/>
      </main>
    )
}

export default Store
