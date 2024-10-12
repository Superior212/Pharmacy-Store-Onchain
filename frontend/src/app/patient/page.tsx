'use client';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

const page: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [consent, setConsent] = useState(false);

    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Patient');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, description, walletConnected, consent });
      };
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        if (tab !== 'Patient') {
          router.push(`/${tab.toLowerCase().replace(' ', '-')}`);
        }
      };
    
     
  return (
    <div className="md:w-3/4 w-full m-auto p-7">
        <h1 className='text-4xl mt-20 text-gray-600 font-extrabold mb-10'>Profile Setup</h1>

        <div className="flex space-x-2 mb-6 pb-3 border-b">
          {['Patient', 'Health Officers', 'Care Providers'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Your First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Your Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
    
        </div>
        <div className="relative">
          <textarea
            placeholder="Describe Yourself"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
            rows={3}
          />
          
        </div>
        <div className="flex items-center gap-9  col-span-2 bg-gray-100">
          <span className="text-gray-700 p-4 justify-between">Connect Wallet to Verify</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="connectWallet"
                className="mr-2 border rounded-md text-blue-500 focus:ring-blue-500"
                onClick={() => setWalletConnected(!walletConnected)}
                
              />
            </label>  
          </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={() => setConsent(!consent)}
            className="h-6 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-600">I consent to the terms and conditions</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
        </div>
        </div>
        
  )
}

export default page