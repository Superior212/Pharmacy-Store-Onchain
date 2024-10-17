'use client'
import { config } from "@/config";
import { MarketPlaceContract, UserManagementContract } from "@/constant";
import { readContract } from '@wagmi/core';
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useReadContract } from "wagmi";

const StoreContext = createContext<{stores:object[], isFetching:boolean}>({stores:[],
  isFetching:false
});

export const useStore = () => useContext(StoreContext);


const StoreProvider = ({children}:{children:React.ReactNode}) => {

const [store, setStore] = useState<object[]>([]);
const {data:storeAddressesArray, error, isLoading} = useReadContract({
    abi: UserManagementContract.abi,
    address: UserManagementContract.address as `0x${string}`,
    functionName: "getAllPharmacies",
    args: [],
});
console.log({storeAddressesArray})

if(error) console.error("StoreProvider", error);
const storeAddresses = useMemo(() => storeAddressesArray as Array<number> || [], [storeAddressesArray])

  useEffect(() => {
    for (let index = 0; index < storeAddresses.length; index++) {
      readContract(config, {
         abi: MarketPlaceContract.abi,
         address: MarketPlaceContract.address as `0x${string}`,
         functionName: 'getAllPharmacies',
         args: [storeAddresses[index]],
       }).then((res)=> {
        console.log({res})
        setStore((prev) => [...prev, res as object]);
       
       }).catch((err)=> console.log("StoreProvider", err))
 }

  }, [storeAddresses])
  
  return (
    <StoreContext.Provider value={{stores: store, isFetching:isLoading}}>{children}</StoreContext.Provider>
  )
}

export default StoreProvider