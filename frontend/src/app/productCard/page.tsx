import React from 'react';
import Image from 'next/image';
import group from "/public/Group6.png";

const ProductDetailPage: React.FC = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-4">
      <div className="flex items-center mb-6">
        <button className="text-gray-600 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div>
          <p className="text-sm text-gray-500">Product Name:</p>
          <h1 className="text-xl mb-4 font-bold">Acetaminophen Pills</h1>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative w-full h-96">
            <Image
              src={group}
              alt="Aspirin"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Acetaminophen Pills</h2>
          <div className="space-y-2 mb-4">
            <p><span className="font-semibold">Store:</span> <span className="text-blue-600">McFeron Pharma</span> </p>
            <p><span className="font-semibold">Brand:</span> GSK</p>
            <p><span className="font-semibold">Category:</span> Over The Counter (OTC)</p>
            <p><span className="font-semibold">Type:</span> Syrup</p>
            <p><span className="font-semibold">Prescription Required:</span> NO</p>
            <p><span className="font-semibold">Price:</span> 0.002 ETH (100 TABLETS)</p>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold">Order (qty):</span>
            <button className="px-2 py-1 border rounded">-</button>
            <span>2</span>
            <button className="px-2 py-1 border rounded">+</button>
          </div>
          
          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Provide Code" className="border outline-none rounded px-2 py-1 flex-grow" />
            <button className="bg-blue-600 text-white px-4 p-4 py-2 rounded-xl">Add to Cart</button>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm">
            Acetaminophen is a widely used over-the-counter medication for relieving mild to moderate pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, menstrual cramps, arthritis, and the symptoms of colds and flu.

This product provides effective relief without irritating the stomach, making it a popular alternative to nonsteroidal anti-inflammatory drugs (NSAIDs). Each tablet contains 500mg of Acetaminophen, offering fast and lasting relief
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;