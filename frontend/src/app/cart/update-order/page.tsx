import ProductStatusUpdateForm from "@/components/Cart/ProductStatusUpdateForm";



const page = () => {
  return (
    <main className="flex justify-center lg:justify-start pt-5 lg:px-3 ">
      <div className="">
        <h4 className="text-base md:text-xl font-medium text-[#22212E] mb-[1.34rem]">
          Update Product Status Tracking history
        </h4>
       <ProductStatusUpdateForm />
      </div>
    </main>
  );
};

export default page;
