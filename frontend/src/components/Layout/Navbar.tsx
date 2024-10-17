"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo.svg";
import CustomConnectButton from "./ConnectButton";
import { useAccount } from "wagmi";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
    onClick={onClick}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isConnected } = useAccount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white sticky w-full top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center w-full justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="PharmaX Logo"
                className="h-24 w-24 sm:h-32 sm:w-32"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/stores">Stores</NavLink>
            {isConnected && (
              <Link href="/user-profile">
                <Image
                  src="/doctor-avatar.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full cursor-pointer"
                />
              </Link>
            )}
            <CustomConnectButton />
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 flex flex-col pt-2 pb-3  sm:px-3">
            <NavLink href="/about" onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink href="/stores" onClick={toggleMenu}>
              Stores
            </NavLink>
            <div className="flex items-center justify-between px-3 py-2">
              {isConnected && (
                <Image
                  src="/doctor-avatar.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full cursor-pointer"
                />
              )}
              <CustomConnectButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
