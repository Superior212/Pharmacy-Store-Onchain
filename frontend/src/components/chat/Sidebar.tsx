import Image from 'next/image';
import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="flex w-1/4 h-screen ">
          
            <div className=" bg-white w-full p-4">
                <h2 className="text-xl font-medium mb-4">PharmaX Records</h2>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-[#000000D9]">Access Medical Record</label>
                    <input
                        type="text"
                        placeholder="Enter code of Patient"
                        className="w-full px-4 py-2 border-gray-300 bg-[#F9F9F9]  focus:border focus:outline-none rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-[#000000D9]">Access Prescription</label>
                    <input
                        type="text"
                        placeholder="Enter code"
                        className="w-full px-4 py-2 border-gray-300 bg-[#F9F9F9]  focus:border focus:outline-none rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="font-medium mb-2 flex justify-between">
                        Create Prescription
                        <div className="flex bg-[#1565C01A] p-2 rounded">
                        <button className=" text-xs font-medium opacity-40 w-20 ">Add New</button>
                        <Image
                            width={20}
                            height={20}
                            src="/gg_add.png"
                            alt="out"
                        />
                        </div>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter code"
                        className="w-full px-4 py-2 border-gray-300 bg-[#F9F9F9]  focus:border focus:outline-none rounded"
                    />
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
