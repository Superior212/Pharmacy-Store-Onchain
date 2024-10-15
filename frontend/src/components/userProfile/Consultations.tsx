'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';




type Transaction = {
    id: string;
    date: string;
    patient: string;
    prescriptionId: string;
    note: string;
    status: 'Completed' | 'Ongoing' | 'missed';
  };
  
  const transactions: Transaction[] = [
    {
      id: '456789356',
      date: 'Oct 10, 2024, 04:30pm',
      patient: '0x000000000000000',
      note: '123',
      prescriptionId: '69087',
      status: 'Ongoing',
    },
    {
      id: '456789356',
      date: 'Oct 14, 2024, 02:00pm',
      patient: '0x000000000000000',
      note: '-',
      prescriptionId: '-',
      status: 'missed',
    },
    {
      id: '456789356',
      date: 'Oct 16, 2024, 08:00pm',
      patient: '0x000000000000000',
      note: '564',
      prescriptionId: '78923',
      status: 'Completed',
    },
    {
      id: '456789356',
      date: 'Oct 19, 2024, 05:30pm',
      patient: '0x000000000000000',
      note: '1749',
      prescriptionId: '90873',
      status: 'Completed',
    },
  ];
  
  const getStatusClass = (status: 'Completed' | 'Ongoing' | 'missed') => {
    switch (status) {
      case 'Completed':
        return 'text-green-500 bg-green-100';
      case 'Ongoing':
        return 'text-yellow-500 bg-yellow-100';
      case 'missed':
        return 'text-red-500 bg-red-100';
      default:
        return '';
    }
  };
  

const Consultations: React.FC = () => {

  const [activeTab, setActiveTab] = useState('/consultation');

  

  return (
    <div className="w-full">

      {/* Content area */}
      
      <div className="w-full max-w-7xl overflow-x-auto">
      {activeTab === '/consultation' && (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Ref ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Date</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Patient</th>
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
                <td className="py-3 px-4 border-b border-gray-200">{transaction.patient}</td>
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

export default Consultations;