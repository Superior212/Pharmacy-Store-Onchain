import Image from "next/image";
import { Star } from "lucide-react";

export default function FeaturedPharmacyStores() {
  return (
    <div className="bg-[#EFEFEF] hsection my-10 p-6 md:p-12 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Featured
              <br />
              Pharmacy Stores
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet
              suscipit nulla. Nullam vitae sit tempus diam.
            </p>
          </div>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            All Stores
          </a>
        </div>
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
        </div>
      </div>
    </div>
  );
}

interface StoreCardProps {
  imageUrl: string;
  name: string;
  rating: number;
  priceEth: number;
  priceUsd: number;
}

function StoreCard({
  imageUrl,
  name,
  rating,
  priceEth,
  priceUsd,
}: StoreCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-48 md:h-64">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-gray-600">{rating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            {priceEth} ETH / ${priceUsd}
          </span>
          <button className="bg-[#1364FF] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
