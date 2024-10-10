import CareService from "@/components/Home/Care-services";
import CommitmentToQuality from "@/components/Home/Commitment-to-quality";
import Feature from "@/components/Home/Feature-list";
import FeaturedProducts from "@/components/Home/Featured-products";
import FeaturedPharmacyStores from "@/components/Home/Featured-stores";
import Hero from "@/components/Home/Hero";

const page = () => {
  return (
    <div className="mt-20">
      <Hero />
      <Feature />
      <CareService />
      <FeaturedProducts />
      <FeaturedPharmacyStores />
      <CommitmentToQuality />
    </div>
  );
};

export default page;
