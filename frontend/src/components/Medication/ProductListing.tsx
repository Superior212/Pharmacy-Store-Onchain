import { useProduct } from "@/provider/ProductProvider";
import { ProductCard } from "../Home/Featured-products";
import {ethers} from "ethers"
const ProductListing = ({ searchText }: { searchText: string }) => {
  const {products, isFetching} = useProduct()
  return (
    <section className="w-full mt-[5.6rem] ">
      {!searchText && <h4 className="font-semibold text-4xl">{isFetching? "Fetching Available Products..." : "All Products"}</h4>}
      <div className="bg-[#EFEFEF] my-10 p-6 md:p-12 rounded-3xl">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              products.map((product)=>{
                return (
                  <ProductCard
                    key={product.id}
                    callToActionLink={`/medications/${product.id}`}
                    imageUrl="/product.svg"
                    name={product.productName}
                    rating={20}
                    priceEth={parseInt(ethers.formatEther(product.pricePerUnit))}
                    priceUsd={12} />
                );
              })
            }
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
