'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';




interface CardProps {
    title: string;
    value: string | number;
  }

  const Card: React.FC<CardProps> = ({ title, value }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
  
  

  const StoreOverview: React.FC = () => {
const tabs = [
    { name: 'General', path: '/general-card' },
    { name: 'Product Management', path: '/management' },
    { name: 'Wallets & Transactions  ', path: '/trans' },
    { name: 'Customers Reviews  ', path: '/customer' },
    { name: 'Notifications  ', path: '/notme' },
  ];
  const [activeTab, setActiveTab] = useState('/general-card');

  return (
    <div className="w-full  p-6 mt-14 bg-white shadow-sm rounded-lg">
      <div className='p-6'>
      <div className="flex  items-center justify-between mb-6">
       <main className='flex items-center space-x-6'>
       <div className="">
          <Image
            src="/Ellipse1.svg"
            alt='Ellipse'
            width={100}
            height={100}
            className="rounded-full w-28 h-28 mr-4"
          />
      
        </div>
        <div>
        <h1 className="text-2xl font-bold">Berachi Reynolds</h1>
          <div className='flex items-center space-x-3'>
            <Image src="/star.png" alt='star' width={100} className='h-4 w-4' height={100}/>
            <Image src="/star.png" alt='star' width={100} className='h-4 w-4' height={100}/>

            <Image src="/star.png" alt='star' width={100} className='h-4 w-4' height={100}/>

            <Image src="/star.png" alt='star' width={100} className='h-4 w-4' height={100}/>

          </div>
        </div>
       </main>
        <div className="flex items-center">
            <Bell className="w-6 h-6 mr-2 text-gray-500" />
            <Button variant="outline" className="mr-2">Edit</Button>
            
          </div>
      </div>
      <p className="text-gray-600 mb-6">
      I’m your friendly pharmacist with a passion for making medication advice so fun. <br />
       When I’m not whipping up prescriptions, I’m  likely preparing  smoothies
        </p>
       </div>
      <div className="flex space-x-4 mb-6 overflow-x-auto border-b pb-3">
        {tabs.map((tab) => (
          <Link 
            href={tab.path} 
            key={tab.path}
            className={`px-4 py-2 whitespace-nowrap ${
              activeTab === tab.path
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            } rounded-full transition-colors`}
            onClick={() => setActiveTab(tab.path)}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="p-6 bg-[#FAFAFA]">
      <h1 className="text-2xl font-bold mb-6">Store Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Status" value="Care Provider" />
        <Card title="Number of Sales" value={234} />
        <Card title="Total Revenue" value="$456" />
        <Card title="Out of Stock" value={56} />
        <Card title="Total Users" value={65} />
        <Card title="Registered Doctors" value={10} />
        <Card title="Registered Pharmacists" value={5} />
        <Card title="Registered Patients" value={50} />
      </div>
    </div>
      </div>
  )}
  export default StoreOverview