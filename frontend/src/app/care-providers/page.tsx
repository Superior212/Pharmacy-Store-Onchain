'use client';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

const ProfileSetup: React.FC = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    category: '',
    quantity: '',
    brand: '',
    expiryDate: '',
    drugType: '',
    priceInput: '',
    prescriptionRequired: '',
    image: null as File | null,
    description: '',
    connectWallet: false
  });

  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Care Providers');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };  

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab !== 'CareProfile') {
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

        <form>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
            <input type="text" placeholder="Store Name" onChange={handleInputChange} className="mt-1 block w-full bg-gray-100 rounded-md outline-none shadow-sm p-2" />
          </div>
          <div>
            <input type="text" placeholder="Store Address" onChange={handleInputChange} className="mt-1 block w-full outline-none bg-gray-100 rounded-md shadow-sm p-2" />
          </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input type="text" placeholder="Business Number" onChange={handleInputChange} className="mt-1 block w-full outline-none bg-gray-100 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <input type="text" placeholder="Clinic/Hospital Name" onChange={handleInputChange} className="mt-1 block outline-none w-full bg-gray-100 rounded-md shadow-sm p-2" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
        <div className='col-span-2'>
            <input type="text" placeholder="Owner/Manager Full Name" onChange={handleInputChange} className="mt-1 block w-full bg-gray-100 rounded-md shadow-sm p-2" />
          </div>
          <div className='col-span-2 flex items-center gap-5 bg-gray-100 p-2 rounded-md'>
          <span className="flex-grow">Business Number Certificate</span>
          <label htmlFor="imageUpload" className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </label>
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="flex items-center gap-4 col-span-2 bg-gray-100">
          <span className="text-gray-700 p-4 justify-between">Connect Wallet to Verify</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="connectWallet"
                className="mr-2 border rounded-md text-blue-500 focus:ring-blue-500"
                checked={formData.connectWallet}
                onChange={handleInputChange}
              />
            </label>  
          </div>
          <div className='col-span-2 flex items-center gap-5 bg-gray-100 p-2 rounded-md'>
          <span className="flex-grow">Pharmacy License Number Certificate</span>
          <label htmlFor="imageUpload" className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </label>
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
          </div>
          </div>

          <div className="flex items-center mb-4">
          <input type="checkbox" className="h-6 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label className="ml-2 block text-md text-gray-900">
            I consent to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          className="w-100 bg-blue-500 text-white p-5 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
          Submit
        </button>
            </form>
          </div>
        
    
  )
}

export default ProfileSetup