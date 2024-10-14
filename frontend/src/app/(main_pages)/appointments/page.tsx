'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';




type Transaction = {
    id: string;
    date: string;
    Doctor: string;
    note: string;
    prescriptionId: string;
    status: 'Completed' | 'Ongoing' | 'canceled';
  };
  
  const transactions: Transaction[] = [
    {
      id: '456789356',
      date: 'Oct 10, 2024, 04:30pm',
      Doctor: '0x000000000000000',
      prescriptionId: '69087',
      note: '123',
      status: 'Ongoing',
    },
    {
      id: '456789356',
      date: 'Oct 14, 2024, 02:00pm',
      Doctor: '0x000000000000000',
      prescriptionId: '-',
      note: '-',
      status: 'canceled',
    },
    {
      id: '456789356',
      date: 'Oct 16, 2024, 08:00pm',
      Doctor: '0x000000000000000',
      prescriptionId: '78923',
      note: '564',
      status: 'Completed',
    },
    {
      id: '456789356',
      date: 'Oct 19, 2024, 05:30pm',
      Doctor: '0x000000000000000',
      prescriptionId: '90873',
      note: '1749',
      status: 'Completed',
    },
  ];
  
  const getStatusClass = (status: 'Completed' | 'Ongoing' | 'canceled') => {
    switch (status) {
      case 'Completed':
        return 'text-green-500 bg-green-100';
      case 'Ongoing':
        return 'text-yellow-500 bg-yellow-100';
      case 'canceled':
        return 'text-red-500 bg-red-100';
      default:
        return '';
    }
  };
  

const tabs = [
  { name: 'General', path: '/general'},
  { name: 'Wallet & Transactions', path: '/wallet' },
  { name: 'My Appointments', path: '/appointments' },
  { name: 'Product Purchase', path: '/purchases' },
];

const Appointments: React.FC = () => {

  const [activeTab, setActiveTab] = useState('/appointments');

  

  return (
    <div className="w-full  p-6 mt-14 bg-white shadow-sm rounded-lg">
      <div className='p-6'>
      <div className="flex  items-center justify-between mb-6">
       <main className='flex items-center space-x-6'>
       <div className="">
          <Image
            src="/user.svg"
            alt='name'
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
            <Button variant="outline" className="mr-4">See Doctor</Button>
            
          </div>
      </div>
      <p className="text-gray-600 mb-6">
          I'm your friendly pharmacist with a passion for making medication advice <br />
          so fun. When I'm not whipping up prescriptions, I'm likely preparing
          smoothies
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
      
      <div className="bg-white shadow-md rounded-lg w-full max-w-7xl overflow-x-auto">
      {activeTab === '/appointments' && (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Ref ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Date</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Doctor</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Prescription id</th>
              <th className="py-2 px-1 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">note</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.id}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.date}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.Doctor}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.prescriptionId  }</td>
                <td className="py-2 px-6 w-10 h-10 border-b rounded-sm border-gray-200">{transaction.note  }</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <span className={`inline-block px-3 py-1 rounded-full ${getStatusClass(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
        
    </div>
  );
};

export default Appointments;

      
       
        
      
  