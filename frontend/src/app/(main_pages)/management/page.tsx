'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';




type Transaction = {
    id: string;
    name: string;
    Qty: string,
    status: string;
    price: string;
    Action: 'Remove' | 'Remove' | 'confirm';
  };
  
  const transactions: Transaction[] = [
    {
      id: '456789356',
      name: 'Augmentin 625 Duo Tablet',
      Qty: '1',
      status: 'Good',
      price: '0.002ETH',
      Action: 'Remove',
    },
    {
      id: '456789356',
      name: 'Anapthaline Cite',
      Qty: '100',
      status: 'Good',
      price: '0.002ETH',
      Action: 'Remove',
    },
    {
        id: '456789356',
        name: 'Acetaminophen',
        Qty: '50',
        status: 'Good',
        price: '0.002ETH',
        Action: 'Remove',
    },
    {
        id: '456789356',
        name: 'Coughlin',
        Qty: '20',
        status: 'Good',
        price: '0.002ETH',
        Action: 'Remove',
    },
  ];
  
  const getActionClass = (Action: 'Remove' | 'Remove' | 'confirm') => {
    switch (Action) {
      case 'Remove':
        return 'text-green-500 bg-green-100';
      case 'Remove':
        return 'text-green-500 bg-green-100';
      case 'confirm':
        return 'text-blue-500 bg-red-100';
      default:
        return '';
    }
  };
  

  const tabs = [
    { name: 'General', path: '/general-card' },
    { name: 'Product Management', path: '/management' },
    { name: 'Wallets & Transactions  ', path: '/trans' },
    { name: 'Customers Reviews  ', path: '/customer' },
    { name: 'Notifications  ', path: '/notme' },
  ];

const TransactionTable: React.FC = () => {

  const [activeTab, setActiveTab] = useState('/management');

  

  return (
    <div className="w-full  p-6 mt-14 bg-white shadow-sm rounded-lg">
      <div className='p-6'>
      <div className="flex  items-center justify-between mb-6">
       <main className='flex items-center space-x-6'>
       <div className="">
          <Image
            src="/Ellipse1.svg"
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
          I'm your friendly pharmacist with a passion for making medication advice 
          so fun. <br /> When I'm not whipping up prescriptions, I'm likely preparing
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

      <div className="bg-white shadow-md rounded-lg w-full max-w-6xl overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Ref ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Qty</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Status</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Price</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.id}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.name}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.Qty}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.status}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.price}</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <span className={`inline-block px-3 py-1 rounded-full ${getActionClass(transaction.Action)}`}>
                    {transaction.Action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;

      
       
        
      
  