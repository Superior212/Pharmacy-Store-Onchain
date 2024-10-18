import { FormHeader, Product } from "@/components/forms"
import { ToastContainer } from "react-toastify"


const Products = () => {

  return (
    <div className="px-4 md:px-0">
      <header className="mt-8">
        <FormHeader title="Add Product" />
            
      </header>

      <main className="mt-8">
        <Product />
      </main>

      <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  )
}

export default Products
