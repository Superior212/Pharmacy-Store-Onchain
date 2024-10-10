import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#202E48] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">Copyright © 2024 Pharmacy Store</div>
          <nav className="flex flex-wrap justify-center space-x-4">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog & News
            </Link>
          </nav>
          <div className="flex space-x-4 text-sm">
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
