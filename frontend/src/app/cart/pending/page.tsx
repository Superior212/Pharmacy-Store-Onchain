import CartContent from "@/components/Cart/CartContent"
import OrderHistory from "@/components/Cart/OrderHistory"

const page = () => {
  return (
    <main className="flex gap-[3.37rem] pt-5">
      <div>
      <CartContent/>
      </div>
       <OrderHistory/>
    </main>
  )
}

export default page