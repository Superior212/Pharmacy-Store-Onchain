"use client";
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const StoreListing = ({ searchText }: { searchText: string }) => {
    return (
        <section className='w-full mt-[5.6rem] '>
            {!searchText && (<h4 className='font-semibold text-4xl'>All Stores</h4>)}
            <div className="bg-[#EFEFEF] hsection my-10 p-6 md:p-12 rounded-3xl">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <StoreCard
                            imageUrl="/product.svg"
                            name="Bryon Medic Stores"
                            rating={20}
                            address='Store Address'
                        />
                        <StoreCard
                            imageUrl="/product2.svg"
                            name="McFeron Pharma"
                            rating={20}
                            address='Store Address'
                        />
                        <StoreCard
                            imageUrl="/product3.svg"
                            name="Zygan Medics"
                            rating={20}
                            address='Store Address'
                        />
                        <StoreCard
                            imageUrl="/product.svg"
                            name="Bryon Medic Stores"
                            rating={20}
                            address='Store Address'
                        />
                        <StoreCard
                            imageUrl="/product2.svg"
                            name="McFeron Pharma"
                            rating={20}
                            address='Store Address'
                        />
                        <StoreCard
                            imageUrl="/product3.svg"
                            name="Zygan Medics"
                            rating={20}
                           address='Store Address'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoreListing

interface StoreCardProps {
    imageUrl: string;
    name: string;
    rating: number;
    address:string;
}

function StoreCard({
    imageUrl,
    name,
    rating,
    address,
}: StoreCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48 md:h-64">
                <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <div className='flex justify-between'>
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-gray-600">{rating}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                        {address} 
                    </span>
                    <button className="bg-[#1364FF] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}