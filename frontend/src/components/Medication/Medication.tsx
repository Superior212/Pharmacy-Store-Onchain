"use client";
import { useState } from "react";
import Hero from "./Hero";
import Search from "./Search";
import ProductListing from "./ProductListing";
// import { useReadContract } from "wagmi";
// import { MarketPlaceContract } from "@/constant";
// import MarketplaceAbi from "../../Abi/Marketplace.json";

const Medication = () => {
  // const medicationId = 3;

  // console.log("Medication ID:", medicationId);
  // const { data: medicationDetails } = useReadContract({
  //   abi: MarketplaceAbi,
  //   address: MarketPlaceContract.address as `0x${string}`,
  //   functionName: "getMedicationDetails",
  //   args: [medicationId],
  // });
  // console.log("Medication Details:", medicationDetails);

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
