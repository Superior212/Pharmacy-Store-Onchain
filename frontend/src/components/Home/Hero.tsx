import { Button } from "@/components/ui/button";
import MemoHeroCircle from "@/icons/HeroCircle";

export default function Hero() {
  return (
    <div className="bg-[#0169FE] hsection my-4 container text-white p-4 sm:p-8 md:p-16 rounded-3xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center sm:text-left">
          SMART PHARMACEUTICALS
        </h1>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-2/3 mb-6 sm:mb-0">
            <p className="text-base sm:text-lg md:text-xl mb-6 text-center sm:text-left">
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
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
            <MemoHeroCircle className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80" />
          </div>
        </div>
      </div>
    </div>
  );
}
