import { Truck, CreditCard, User } from "lucide-react";

export default function Feature() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureItem
          icon={<Truck className="w-6 h-6 text-blue-500" />}
          title="Track Delivery"
          description="Track product delivery from purchase"
        />
        <FeatureItem
          icon={<CreditCard className="w-6 h-6 text-blue-500" />}
          title="Secure and Fast Payment"
          description="Using Blockchain to facilitate payment"
        />
        <FeatureItem
          icon={<User className="w-6 h-6 text-blue-500" />}
          title="24/7 Access"
          description="All round access to service"
        />
      </div>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex  items-center text-left space-x-4 p-4 bg-white rounded-lg ">
      <div className="mb-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
