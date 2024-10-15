import OrderHistory from "@/components/Cart/OrderHistory";
import ProductStatusUpdateForm from "@/components/Cart/ProductStatusUpdateForm";



const page = () => {
  return (
    <main className="flex justify-between pt-5">
      <div>
        <h4 className="text-xl font-medium text-[#22212E] mb-[1.34rem]">
          Update Product StatusTracking history
        </h4>
       <ProductStatusUpdateForm />
      </div>
     
      <OrderHistory />
    </main>
  );
};

export default page;
