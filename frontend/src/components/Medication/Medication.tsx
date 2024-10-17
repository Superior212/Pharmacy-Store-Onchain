"use client";
import { useState } from "react";
import Hero from "./Hero";
import Search from "./Search";
import ProductListing from "./ProductListing";


const Medication = () => {


  const [searchText, setSearchText] = useState("");
  return (
    <main className="w-full mx-auto pt-4">
      {!searchText && <Hero />}
      <Search searchText={searchText} setSearchText={setSearchText} />
      <ProductListing searchText={searchText} />
    </main>
  );
};

export default Medication;
