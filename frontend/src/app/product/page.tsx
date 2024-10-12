'use client';

import React,{ useState } from "react";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CustomDatePickerInput = React.forwardRef(({ value, onClick, placeholder, className }:any, ref:any) => (
  
  <div className="relative">
    <input
      ref={ref}
      className={`${className} pr-10`}
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      readOnly
    />
    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
  </div>
));

const AddProduct: React.FC = () => {
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
   const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  

  const inputClass = "bg-gray-100 p-3 rounded-md w-full text-black outline-none";
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

  return (
    <div className="md:w-3/4 w-full m-auto p-7">
      <main>
        <h2 className="text-3xl text-gray-600 ml-5 mt-20 pt-10  border-b pb-3 font-bold mb-10">Add Product</h2>
        
        <form className="space-y-7">
            <div className="grid gap-6 grid-cols-2">

          <input
            type="text"
            placeholder="Enter drug/product name"
            className={inputClass}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter price in ETH or local currency"
            className={inputClass}
            onChange={handleInputChange}
          />
            </div>
            <div className="grid gap-6 grid-cols-2">
          <div className="relative">
            <select className={`${inputClass} appearance-none`}>
              <option value="">Category (OTC, Prescription, Wellness, Supplement)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
          <input
            type="number"
            placeholder="Enter quantity in stock"
            className={inputClass}
            onChange={handleInputChange}
          />
          </div>
          <div className="grid gap-6 grid-cols-2">
          <div className="relative">
            <select className={`${inputClass} appearance-none`}>
              <option value="">Enter brand/manufacturer name</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
          <DatePicker
            selected={expiryDate}
            onChange={(date: Date | null) => setExpiryDate(date)}
            customInput={<CustomDatePickerInput className={inputClass} />}
            placeholderText="Expiry Date"
            dateFormat="MM/dd/yyyy"
          />
          </div>
          <div className="grid gap-6 grid-cols-2">
          <div className="relative">
          <input
            type="text"
            placeholder="drug type(Tablet, Syrup, Injection, Cream,)"
            className={inputClass}
            onChange={handleInputChange}
          />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
            </div>
            <input
            type="number"
            placeholder="Enter quantity in stock"
            className={inputClass}
            onChange={handleInputChange}
          />
            </div>
            <div className="grid gap-6 grid-cols-4">
            <div className="col-span-2 flex items-center gap-5 bg-gray-100 p-2 rounded-md">
            <span className="text-gray-700">Prescription Required</span>
            <div className="flex items-center">
              <label className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  name="prescriptionRequired"
                  value="yes"
                  className="mr-2 h-5 w-5 rounded-sm text-blue-500 focus:ring-blue-500"
                  
                  
                />
                <span className="text-gray-500">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="prescriptionRequired"
                  value="no"
                  className="mr-2 h-5 w-5 rounded-sm text-blue-500 focus:ring-blue-500"
                  
                />
                <span className="text-gray-500">No</span>
              </label>
            </div>
          </div>
    <div className="col-span-2 flex items-center gap-5 bg-gray-100 p-2 rounded-md">
          <span className="flex-grow">Upload image</span>
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
    <div className="col-span-4 grid grid-cols-4 gap-4">
          <div className="col-span-2 flex items-center gap-5 bg-gray-100 p-2 rounded-md">
            <span className="text-gray-700 p-4 justify-between">Connect Wallet to Verify</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="connectWallet"
                className="mr-2 border rounded-sm text-blue-500 focus:ring-blue-500"
                onChange={handleInputChange}
                checked={formData.connectWallet}
              />
            </label>
          </div>
          <div className="col-span-2 items-center gap-5 bg-gray-100 p-2 rounded-md">
            <textarea
              name="description"
              placeholder="Description"
              className=" h-full outline-none bg-gray-100 p-2 rounded-md resize-none"
              onChange={handleInputChange}
              
            ></textarea>
          </div>
        </div>
            <div className="col-span-2 flex items-center mt-2">
            <input
              type="checkbox"
              id="consent"
              className="mr-2 bg-gray-100"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">I consent to the terms and conditions</label>
            
          </div>
          <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 w-50 rounded-md">
          Add Product
        </button>
        </form>
      </main>
    </div>
  )
}

export default AddProduct;