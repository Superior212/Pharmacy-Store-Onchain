import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <div className="bg-[#202E48] text-white p-6 md:p-12 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link
            href="/medications"
            className="text-sm text-gray-300 hover:text-white transition-colors">
            All Products
          </Link>
        </div>
        <p className="text-gray-300 mb-8 max-w-xl">
          Discover health care products to elevate your well-being and bring you
          closer to a healthier future
        </p>
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
  callToActionTitle?: string;
  callToActionLink: string;
}

export function ProductCard({
  imageUrl,
  name,
  rating,
  priceEth,
  priceUsd,
  callToActionLink,
  callToActionTitle = "Add to Cart",
}: ProductCardProps) {
  return (
    <div className="bg-navy-800 rounded-2xl overflow-hidden">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageUrl}
          className="rounded-xl h-full w-full object-cover"
          alt={name}
          width={300}
          height={200}
        />
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
          <Link href={callToActionLink} className="bg-[#1364FF] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">
           {callToActionTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}
