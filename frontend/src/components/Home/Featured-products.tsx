import Image from "next/image";
import { Star } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <div className="bg-[#202E48] text-white p-6 md:p-12 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a
            href="#"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            All Products
          </a>
        </div>
        <p className="text-gray-300 mb-8 max-w-xl">
          Discover health care products to elevate your well-being and bring you
          closer to a healthier future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            imageUrl="/product.svg"
            name="Acetaminophen Pills"
            rating={20}
            priceEth={0.002}
            priceUsd={12}
          />
          <ProductCard
            imageUrl="/product2.svg"
            name="Acetaminophen Pills"
            rating={20}
            priceEth={0.002}
            priceUsd={12}
          />
          <ProductCard
            imageUrl="/product3.svg"
            name="Acetaminophen Pills"
            rating={20}
            priceEth={0.002}
            priceUsd={12}
          />
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  imageUrl: string;
  name: string;
  rating: number;
  priceEth: number;
  priceUsd: number;
}

function ProductCard({
  imageUrl,
  name,
  rating,
  priceEth,
  priceUsd,
}: ProductCardProps) {
  return (
    <div className="bg-[#2A3A59] rounded-2xl overflow-hidden">
      <div className="relative h-48 md:h-64">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">
            {priceEth} ETH / ${priceUsd}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
