import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <div className="bg-[#202E48] hsection text-white p-6 md:p-12 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors">
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
    <div className="bg-navy-800 rounded-2xl overflow-hidden">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageUrl}
          className="rounded-3xl"
          alt={name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-2"></div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">
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
