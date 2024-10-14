import MemoConsulatation from "@/icons/Consulatation";
import MemoDelevery from "@/icons/Delevery";
import MemoDrugs1 from "@/icons/Drugs1";

export default function CareService() {
  return (
    <div className="bg-[#EFEFEF] my-10 p-6 md:p-12 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Comprehensive Care Services
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Tailored healthcare solutions designed to meet all your needs,
          ensuring quality, accessibility, and peace of mind at every step
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative sm:top-10">
            <ServiceCard
              imageUrl={<MemoDrugs1 className="w-full h-full" />}
              title="Prescription Filling"
            />
          </div>
          <ServiceCard
            imageUrl={<MemoDelevery className="w-full h-full" />}
            title="Home Delivery"
          />
          <div className="relative sm:top-10">
            <ServiceCard
              imageUrl={
                <MemoConsulatation className="w-full h-full relative" />
              }
              title="Health Consultations"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  imageUrl: React.ReactNode;
  title: string;
}

function ServiceCard({ imageUrl, title }: ServiceCardProps) {
  return (
    <div className={`rounded-2xl overflow-hidden`}>
      <div className="relative h-52">{imageUrl}</div>
      <div className="p-4">
        <h3 className="text-xl font-[600] text-center">{title}</h3>
      </div>
    </div>
  );
}
