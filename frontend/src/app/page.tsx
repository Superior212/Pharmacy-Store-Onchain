import CareService from "@/components/Home/Care-services";
import Feature from "@/components/Home/Feature-list";
import Hero from "@/components/Home/Hero";

const page = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <CareService />
    </div>
  );
};

export default page;
