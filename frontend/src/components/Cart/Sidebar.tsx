'use client'
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface ICartRoute {
    name: string;
    route: string;
}
const cartRoutes: ICartRoute[] = [
    {
        name: "Cart List",
        route: "/cart"
    },
    {
        name: "Pending",
        route: "/cart/pending"
    },
    {
        name: "Order History",
        route: "/cart/#"
    },
    {
        name: "Cancelled Order",
        route: "/cart/#"
    },
    {
        name: "Update Orders  Status",
        route: "/cart/update-order"
    }

]

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <aside className=" w-full overflow-x-auto lg:w-[11.312rem] flex-none flex lg:flex-col gap-2 md:gap-5 bg-[#EFEFEF] border border-[#D3D3D3] px-[5px] py-2 rounded-[1.25rem]">

    {cartRoutes.map((item) => (
        <Button key={item.name} className={`w-[10.37rem] h-[2.25rem] ${pathname === item.route && "bg-[#1364FF] text-white" }  border-none shadow-none rounded-xl flex justify-start text-sm font-normal`}><Link href={item.route}>{item.name}</Link></Button>
    ))}
 

</aside>
  )
}

export default Sidebar