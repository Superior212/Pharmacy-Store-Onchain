import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Providers } from "../../provider/providers";
import "@rainbow-me/rainbowkit/styles.css";
import ProductProvider from "@/provider/ProductProvider";
import StoreProvider from "@/provider/StoreProvider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PharmaX",
  description: "PharmaX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between min-h-screen`}>
        <Providers>
          <ProductProvider>
            <StoreProvider>
          <Navbar />
          <main className="flex container mx-auto justify-center xl:mx-auto xl:w-full px-4">
            {children}
          </main>
          <Footer />
          </StoreProvider>
          </ProductProvider>
          
        </Providers>
      </body>
    </html>
  );
}
