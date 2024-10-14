import Image from "next/image";
import MemoTransparency from "@/icons/Transparency";
import MemoSecure from "@/icons/Secure";
import MemoRecords from "@/icons/Records";

export default function CommitmentToQuality() {
  return (
    <div className="bg-white my-7 p-6 md:p-12 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Commitment to Quality
            </h2>
            <div className="space-y-6">
              <FeatureItem
                icon={<MemoTransparency className="w-10 h-10 text-white" />}
                title="Transparency / Quality Assurance"
                description="All medications are sourced from trusted suppliers, verified on-chain for authenticity and transparency"
              />
              <FeatureItem
                icon={<MemoSecure className="w-10 h-10 text-white" />}
                title="Secure Payments"
                description="Every transaction is protected by smart contracts, ensuring that you're in control of your purchase with full security"
              />
              <FeatureItem
                icon={<MemoRecords className="w-10 h-10 text-white" />}
                title="Decentralized Medical Records"
                description="Your health information is stored securely on decentralized networks, giving you complete privacy and control"
              />
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="/shake.svg"
              alt="Hands clasped together"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
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
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
