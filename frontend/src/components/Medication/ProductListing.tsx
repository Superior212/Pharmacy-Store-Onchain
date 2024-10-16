import { ProductCard } from "../Home/Featured-products";

const ProductListing = ({ searchText }: { searchText: string }) => {
  return (
    <section className="w-full mt-[5.6rem] ">
      {!searchText && <h4 className="font-semibold text-4xl">All Products</h4>}
      <div className="bg-[#EFEFEF] my-10 p-6 md:p-12 rounded-3xl">
        {/* <div className="w-full mx-auto"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              callToActionLink="/medications/1"
              imageUrl="/product.svg"
              name="Acetaminophen Pills"
            rating={20}
            priceEth={0.002}
            priceUsd={12}
            />
            <ProductCard
              callToActionLink="/medications/2"
              imageUrl="/product2.svg"
              name="Acetaminophen Pills"
              rating={20}
              priceEth={0.002}
              priceUsd={12}
            />
            <ProductCard
              callToActionLink="/medications/3"
              imageUrl="/product3.svg"
              name="Acetaminophen Pills"
            rating={20}
            priceEth={0.002}
            priceUsd={12}
            />
            <ProductCard
              callToActionLink="/medications/4"
              imageUrl="/product.svg"
              name="Acetaminophen Pills"
              rating={20}
              priceEth={0.002}
              priceUsd={12}
            />
            <ProductCard
              callToActionLink="/medications/5"
              imageUrl="/product2.svg"
              name="Acetaminophen Pills"
            rating={20}
            priceEth={0.002}
            priceUsd={12}
            />
            <ProductCard
              callToActionLink="/medications/6"
              imageUrl="/product3.svg"
              name="Acetaminophen Pills"
              rating={20}
              priceEth={0.002}
              priceUsd={12}
            />
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default ProductListing;
