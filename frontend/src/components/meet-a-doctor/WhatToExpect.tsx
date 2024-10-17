import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
// import DoctorSection from "/public";

const WhatToExpect = () => {

  const sectionList = ['Private, secure session with a verified healthcare professional.', 
    'Real-time communication and personalized advice.', 
    'Confidential medical records and history securely handled.']

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-10 md:p-20 bg-[#EFEFEF] rounded-2xl w-full mx-auto h-[42rem] md:h-[22rem]">
      <div>
        <h1 className="text-[36px] font-semibold mb-4">What to Expect</h1>
        <div>
          {sectionList.map((list, index) => (
            <div className="flex items-center gap-3 mb-2" key={index}>
              <FaCircleCheck className="text-black" />
              <p className="text-[#5C5B5C]">{list}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image src={"/pharmaX/Ellipse690.svg"} alt="doctor" width={0} height={0} className="w-80 md:w-full md:h-full" />
      </div>
    </section>
  )
}

export default WhatToExpect
