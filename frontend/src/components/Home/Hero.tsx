import { Button } from "@/components/ui/button";
import Image from "next/image";



export default function Hero() {
  return (
    <div className="bg-[#0169FE] my-4 text-white p-4 sm:p-8 md:p-16 rounded-3xl h-[28rem] lg:h-[34rem] overflow-hidden">
      <div className="flex flex-col justify-evenly bg-none md:bg-[url('/Logo.svg')] md:bg-cover md:bg-[18rem] lg:bg-[29rem] xl:bg-[43rem] h-full bg-no-repeat bg-[#0169FE ]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold mb-4 sm:text-left">
          SMART PHARMACEUTICALS
        </h1>
        <div className="w-full flex flex-col items-center md:items-start justify-center sm:w-2/3 mb-6 sm:mb-0">
          <Image src="/HeroLogo.svg" alt="Logo" width={0} height={0} className="w-[10rem] md:w-0 lg:w-0" />
          <p className="text-base sm:text-lg md:text-2xl mb-6 text-center sm:text-left w-full md:w-3/4">
            Discover a decentralized pharmacy that secures your health
            records, ensures transparent sourcing of medications, and offers
            seamless crypto transactions.
          </p>
          <div className="text-center sm:text-left">
            <Button
              className="bg-white text-black rounded-full px-6 py-2 text-sm sm:text-base"
              size="lg">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
