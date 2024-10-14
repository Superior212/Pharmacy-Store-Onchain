'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';


const tabs = [
  { name: 'General', path: '/Reynolds-general' },
  { name: 'Earnings & Wallet', path: '/earning' },
  { name: 'Consultations', path: '/consultation' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Notifications  ', path: '/notifications' },
];

const UserProfile: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState('/Reynolds-general');

  return (
    <div className="w-full  p-6 mt-14 bg-white shadow-sm rounded-lg">
      <div className='p-6'>
      <div className="flex  items-center justify-between mb-6">
       <main className='flex items-center space-x-6'>
       <div className="">
          <Image
            src="/Ellipse.svg"
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
      ’m your friendly pharmacist with a passion for making medication advice so fun. <br />
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

      {/* Content area */}
      
      <div className="mt-6">
        {activeTab === '/Reynolds-general' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Date Joined</p>
              <p className="font-semibold">Friday, 21st October, 2024</p>
            </div>
            <div>
            <p className="text-gray-500">Number of Sessions</p>
            <p className="font-semibold">40</p>
            </div>
            <div>
            <p className="text-gray-500">Profession</p>
            <p className="font-semibold">Medical Doctor</p>
            </div>
            <div>
            <p className="text-gray-500">Status</p>
            <p className="font-semibold">Health Officer</p>
            </div>
          </div>
        )}
        
        {activeTab === '/earnings' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Wallet & Transactions</h2>
            <p>Your wallet and transaction details will be displayed here.</p>
          </div>
        )}
        {activeTab === '/consultations' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Consultation</h2>
            <p>Your upcoming and past consultations will be listed here.</p>
          </div>
        )}
        {activeTab === '/reviews' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <p>Your Reviews history and details will be shown here.</p>
          </div>
          
        )}
        {activeTab === '/notifications' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <p>Your Notifications will be shown here.</p>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default UserProfile;