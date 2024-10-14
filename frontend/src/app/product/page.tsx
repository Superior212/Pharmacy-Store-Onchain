'use client';

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import Image from 'next/image'; // Next.js Image component
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerInputProps {
  value: string;
  onClick: () => void;
  placeholder: string;
  className: string;
}

const CustomDatePickerInput = React.forwardRef<HTMLInputElement, CustomDatePickerInputProps>(
  ({ value, onClick, placeholder, className }, ref) => (
    <div className="relative">
      <input
        ref={ref}
        className={`${className} pr-10`}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        readOnly
      />
      <Calendar
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
    </div>
  )
);

CustomDatePickerInput.displayName = 'CustomDatePickerInput';

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
    connectWallet: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const inputClass = 'bg-gray-100 p-3 rounded-md w-full text-black outline-none';

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
        <h2 className="text-3xl text-gray-600 ml-5 mt-20 pt-10 border-b pb-3 font-bold mb-10">
          Add Product
        </h2>

        <form className="space-y-7">
          <div className="grid gap-6 grid-cols-2">
          <input
  type="text"
  name="productName"
  value={formData.productName}
  placeholder="Enter drug/product name"
  className={inputClass}
  onChange={handleInputChange}
/>
            <input
              type="text"
              placeholder="Enter price in ETH or local currency"
              className={inputClass}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <div className="grid gap-6 grid-cols-2">
            <div className="relative">
              <select
                className={`${inputClass} appearance-none`}
                onChange={handleInputChange}
                name="category"
              >
                <option value="">Category (OTC, Prescription, Wellness, Supplement)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <input
              type="number"
              placeholder="Enter quantity in stock"
              className={inputClass}
              onChange={handleInputChange}
              name="quantity"
            />
          </div>

          <div className="grid gap-6 grid-cols-2">
            <div className="relative">
              <select
                className={`${inputClass} appearance-none`}
                onChange={handleInputChange}
                name="brand"
              >
                <option value="">Enter brand/manufacturer name</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <DatePicker
  selected={expiryDate}
  onChange={(date: Date | null) => setExpiryDate(date)}
  customInput={
    <CustomDatePickerInput
      value={expiryDate ? expiryDate.toLocaleDateString() : ''}
      onClick={() => {}}
      placeholder="Expiry Date"
      className={inputClass}
    />
  }
  placeholderText="Expiry Date"
  dateFormat="MM/dd/yyyy"
/>
          </div>

          <div className="grid gap-6 grid-cols-2">
            <input
              type="text"
              placeholder="Drug type (Tablet, Syrup, Injection, Cream)"
              className={inputClass}
              onChange={handleInputChange}
              name="drugType"
            />
            <input
              type="number"
              placeholder="Enter quantity in stock"
              className={inputClass}
              onChange={handleInputChange}
              name="quantity"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1">
            {imagePreview && (
              <div className="relative">
                <Image
                  src={imagePreview}
                  alt="Product Preview"
                  width={300}
                  height={300}
                  className="object-cover rounded-md"
                />
              </div>
            )}

            <textarea
              className={`${inputClass} p-4`}
              placeholder="Description"
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="grid gap-6 grid-cols-2">
            <input
              type="checkbox"
              id="connectWallet"
              className="mr-2 h-5 w-5 rounded-sm text-blue-500 focus:ring-blue-500"
              onChange={handleInputChange}
              name="connectWallet"
            />
            <label htmlFor="connectWallet" className="text-gray-500">
              Connect Wallet
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 rounded-md w-full mt-5"
          >
            Add Product
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddProduct;
