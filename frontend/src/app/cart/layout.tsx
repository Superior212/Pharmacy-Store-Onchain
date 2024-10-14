import Sidebar from "@/components/Cart/Sidebar"
import { Navbar } from "@/components/Layout"
import "../globals.css";



const CartLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <html>
             <body
        className={`antialiased flex flex-col justify-between min-h-screen`}>
        <Navbar />
        <main className="w-full lg:h-screen mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] rounded-[0.625rem]">
            <h3 className="font-bold text-[2.5rem] text-[#5C5B5C]  lg:mt-[2.81rem]">Cart</h3>
            <hr className="w-full h-[0.5px] bg-[#D3D3D3] border-b" />
            <section className="w-full flex flex-col lg:flex-row mt-[17px]">
                 <Sidebar/>
                <div className="lg:flex-1 lg:px-[3.43rem]">
                    {children}
                </div>
            </section>


        </main>
        </body>
        </html>
    )
}

export default CartLayout