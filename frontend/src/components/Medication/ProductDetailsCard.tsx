"use client";

import Image from "next/image";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { MarketPlaceContract } from "@/constant";
import { useReadContract } from "wagmi";
import { useRouter } from "next/navigation";

interface MedicationDetails {
  productName: string;
  store: string;
  brand: string;
  category: string;
  medicationType: string;
  isPrescriptionRequired: boolean;
  price: bigint | undefined;
  description: string;
  imageUrl: string;
  expiryDate: string;
}

export default function ProductDetailsCard({
  medicationId,
}: {
  medicationId: string;
}) {
  const [quantity, setQuantity] = useState(2);
  const router = useRouter();

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleGoBack = () => {
    router.back();
  };

  const { data, isLoading } = useReadContract({
    abi: MarketPlaceContract.abi,
    address: MarketPlaceContract.address as `0x${string}`,
    functionName: "getMedicationDetails",
    args: [medicationId],
  });

  // Helper function to safely display the price
  const displayPrice = (price: bigint | undefined) => {
    if (price === undefined) {
      return "Price not available";
    }
    try {
      return `${price.toString()} ETH`;
    } catch (error) {
      console.error("Error converting price:", error);
      return "Error displaying price";
    }
  };

  const renderSkeleton = () => (
    <div className="w-full animate-pulse">
      <div className="mb-6 flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-48"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-lg h-96"></div>

        <div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-2 mb-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>

          <div className="flex items-center mb-4">
            <div className="h-8 bg-gray-200 rounded w-24 mr-4"></div>
            <div className="h-8 bg-gray-200 rounded-full w-8"></div>
            <div className="h-6 bg-gray-200 rounded w-8 mx-4"></div>
            <div className="h-8 bg-gray-200 rounded-full w-8"></div>
          </div>

          <div className="flex space-x-4 mb-6">
            <div className="h-10 bg-gray-200 rounded w-2/3"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>

          <div>
            <div className="h-6 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <div className="w-full px-4 py-8">{renderSkeleton()}</div>;
  }

  if (!data) {
    return (
      <p className="w-full h-[80vh] flex justify-center items-center px-4 py-8 sm:text-4xl">
        No medication details found.
      </p>
    );
  }

  const medicationDetails = data as unknown as MedicationDetails;

  return (
    <div className="w-full px-4 py-8">
      <div className="mb-6 flex items-center">
        <button
          className="p-2 rounded-full border border-gray-300 mr-4"
          onClick={handleGoBack}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <p className="text-sm text-gray-500">Product Name:</p>
          <h1 className="text-2xl font-bold">
            {medicationDetails.productName}
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden">
          <Image
            src={medicationDetails.imageUrl}
            alt="Product Image"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            {medicationDetails.productName}
          </h2>
          <div className="space-y-2 mb-6">
            <p>
              <span className="font-semibold">Store:</span>{" "}
              <span className="text-blue-600">{medicationDetails.store}</span>
            </p>
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {medicationDetails.brand}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {medicationDetails.category}
            </p>
            <p>
              <span className="font-semibold">Type:</span>{" "}
              {medicationDetails.medicationType}
            </p>
            <p>
              <span className="font-semibold">Prescription Required:</span>{" "}
              {medicationDetails.isPrescriptionRequired ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              {displayPrice(medicationDetails.price)}{" "}
              <span className="text-sm text-gray-500">(100 TABLETS)</span>
            </p>
          </div>

          <div className="flex items-center mb-4">
            <span className="mr-4 font-semibold">Order (Qty):</span>
            <button
              className="p-2 rounded-full border border-gray-300"
              onClick={decreaseQuantity}>
              <Minus className="w-4 h-4" />
            </button>
            <span className="mx-4 font-semibold">{quantity}</span>
            <button
              className="p-2 rounded-full border border-gray-300"
              onClick={increaseQuantity}>
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex space-x-4 mb-6">
            <input
              type="text"
              placeholder="Provide Code"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{medicationDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
