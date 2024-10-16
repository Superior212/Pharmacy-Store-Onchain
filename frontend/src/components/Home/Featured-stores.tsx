import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export default function FeaturedPharmacyStores() {
  return (
    <div className="bg-[#EFEFEF] my-10 p-6 md:p-12 rounded-3xl">
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
          <Link
            href="/stores"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            All Stores
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StoreCard
            callToActionLink="stores/1"
            storeAddress="Store Address"
            imageUrl="/product.svg"
            name="Bryon Medic Stores"
            rating={20}
          />
          <StoreCard
            storeAddress="Store Address"
            callToActionLink="stores/2"
            imageUrl="/product2.svg"
            name="McFeron Pharma"
            rating={20}
          />
          <StoreCard
            storeAddress="Store Address"
            callToActionLink="/stores/3"
            imageUrl="/product3.svg"
            name="Zygan Medics"
            rating={20}
          />
        </div>
      </div>
    </div>
  );
}

interface StoreCardProps {
  imageUrl: string;
  name: string;
  storeAddress: string;
  callToActionLink: string;
  rating: number;
}

export function StoreCard({
  imageUrl,
  name,
  rating,
  storeAddress,
  callToActionLink,
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
          <span className="text-sm text-gray-600">{storeAddress}</span>
          <Link
            href={callToActionLink}
            className="bg-[#1364FF] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            View Stores
          </Link>
        </div>
      </div>
    </div>
  );
}
