"use client";
import Image from "next/image";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { MarketPlaceContract } from "@/constant";
import { useReadContract } from "wagmi";
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

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const { data, isLoading } = useReadContract({
    abi: MarketPlaceContract.abi,
    address: MarketPlaceContract.address as `0x${string}`,
    functionName: "getMedicationDetails",
    args: [medicationId],
  });

  if (isLoading) {
    return <p>Loading medication details...</p>;
  }

  if (!data) {
    return <p>No medication details found.</p>;
  }

  const medicationDetails = data as unknown as MedicationDetails;
  console.log("Medication Details:", medicationDetails);

  // Helper function to safely display the price
  const displayPrice = () => {
    if (medicationDetails.price === undefined) {
      return "Price not available";
    }
    try {
      return `${medicationDetails.price.toString()} ETH`;
    } catch (error) {
      console.error("Error converting price:", error);
      return "Error displaying price";
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
        <button className="p-2 rounded-full border border-gray-300 mr-4">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <p className="text-sm text-gray-500">Product Name:</p>
          <h1 className="text-2xl font-bold">
            {" "}
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
            className="w-96 h-96"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            {medicationDetails.productName}
          </h2>
          <div className="space-y-2 mb-6">
            <p>
              <span className="font-semibold">Store:</span>{" "}
              <span className="text-blue-600">McFeron Pharma</span>
            </p>
            <p>
              <span className="font-semibold">Brand:</span> GSK
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {medicationDetails.category}
            </p>
            <p>
              <span className="font-semibold">Type:</span> Syrup
            </p>
            <p>
              <span className="font-semibold">Prescription Required:</span>{" "}
              {medicationDetails.isPrescriptionRequired ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {displayPrice()} ETH{" "}
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
            <p className="text-gray-600">
              Acetaminophen is a widely used over-the-counter medication for
              relieving mild to moderate pain and reducing fever. It is commonly
              used to treat headaches, muscle aches, back pain, toothaches,
              menstrual cramps, arthritis, and the symptoms of colds and flu.
            </p>
            <p className="mt-4 text-gray-600">
              This product provides effective relief without irritating the
              stomach, making it a popular alternative to nonsteroidal
              anti-inflammatory drugs (NSAIDs). Each tablet contains 500mg of
              Acetaminophen, offering fast and lasting relief
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
