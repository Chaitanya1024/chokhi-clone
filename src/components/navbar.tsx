"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/collections/all" },
  { name: "Contact", href: "/contact" },
  { name: "Our story", href: "/our-story" },
];

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="border-b border-gray-200">
        <div className="container-custom py-2 text-center text-sm">
          Welcome to our store
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="mx-auto md:mx-0">
          <Link href="/" className="flex items-center">
            <Image
              src="https://chokhi.co.in/cdn/shop/files/IMG_0123.jpg"
              alt="Chokhi by SWASTIK"
              width={120}
              height={40}
              className="h-10 w-auto"
              unoptimized
            />
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] p-0">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <Image
                    src="https://chokhi.co.in/cdn/shop/files/IMG_0123.jpg"
                    alt="Chokhi by SWASTIK"
                    width={100}
                    height={32}
                    className="h-8 w-auto"
                    unoptimized
                  />
                </div>
              </div>
              <div className="py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-1 text-sm font-medium">United States</span>
            <span className="mr-1 text-sm font-medium">|</span>
            <span className="text-sm font-medium">INR ₹</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </nav>

      {/* Search bar */}
      {isSearchOpen && (
        <div className="container-custom pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border p-2 pr-10 rounded-md"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
