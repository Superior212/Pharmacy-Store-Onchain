'use client'
import { MarketPlaceContract } from "@/constant";
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useReadContract } from "wagmi";
import { readContract } from '@wagmi/core'
import { config } from "@/config";

const ProductContext = createContext<{products:ProductInfo[] | [], isFetching:boolean}>({products:[],
  isFetching:false
});

export const useProduct = () => useContext(ProductContext);


const ProductProvider = ({children}:{children:React.ReactNode}) => {

const [products, setProducts] = useState<ProductInfo[]>([]);
const {data:medicationIdsArray, error, isLoading} = useReadContract({
    abi: MarketPlaceContract.abi,
    address: MarketPlaceContract.address as `0x${string}`,
    functionName: "getMedications",
    args: [],
});

if(error) console.error("ProductProvider", error);
const medicationIds = useMemo(() => medicationIdsArray as Array<number> || [], [medicationIdsArray])

  useEffect(() => {
    for (let index = 0; index < medicationIds.length; index++) {
      readContract(config, {
         abi: MarketPlaceContract.abi,
         address: MarketPlaceContract.address as `0x${string}`,
         functionName: 'getMedicationDetails',
         args: [medicationIds[index]],
       }).then((res)=> {
       setProducts((prev) => [...prev, res as ProductInfo]);
       
       }).catch((err)=> console.log("ProductProvider", err))
 }

  }, [medicationIds])
  
  return (
    <ProductContext.Provider value={{products: products, isFetching:isLoading}}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider