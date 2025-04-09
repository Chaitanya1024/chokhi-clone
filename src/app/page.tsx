import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

// Sample products data based on the Chokhi website
const featuredProducts = [
  {
    id: "1",
    name: "Blue Anarkali with dupatta",
    price: "From Rs. 2,999.00",
    originalPrice: "Rs. 3,399.00",
    image: "https://chokhi.co.in/cdn/shop/files/54A9CA29-C946-42F0-989A-F3571F1E1B76.jpg?v=1715957716",
    href: "/products/blue-anarkali-with-dupatta",
    onSale: true,
  },
  {
    id: "2",
    name: "Black dress",
    price: "Rs. 2,199.00",
    image: "https://chokhi.co.in/cdn/shop/files/AB137658-5D3D-4CF0-B7D6-D20DF9B5A8D5.jpg?v=1715957958",
    href: "/products/black-dress",
    onSale: false,
  },
  {
    id: "3",
    name: "Sharara set",
    price: "Rs. 3,399.00",
    image: "https://chokhi.co.in/cdn/shop/files/9D341C0D-0C1E-4DF0-A9C6-18E12E1559E5.jpg?v=1715955815",
    href: "/products/sharara-set",
    onSale: false,
  },
  {
    id: "4",
    name: "Gathered skirt and blouse",
    price: "Rs. 1,999.00",
    image: "https://chokhi.co.in/cdn/shop/files/86C8D068-9452-4D8E-8F7B-D705DEF1EA52.jpg?v=1715957063",
    href: "/products/untitled-apr15_11-45",
    onSale: false,
  },
  {
    id: "5",
    name: "Angrakha set",
    price: "Rs. 2,899.00",
    originalPrice: "Rs. 3,299.00",
    image: "https://chokhi.co.in/cdn/shop/files/C40760EE-4B58-4626-B5DD-D56AF8FD9821.jpg?v=1715166855",
    href: "/products/angrakha-set",
    onSale: true,
  },
  {
    id: "6",
    name: "Coord set",
    price: "Rs. 2,199.00",
    image: "https://chokhi.co.in/cdn/shop/files/02BC3B9D-7A88-44F8-9514-B5F48248A565.jpg?v=1715239718",
    href: "/products/coord-set",
    onSale: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://chokhi.co.in/cdn/shop/files/54A9CA29-C946-42F0-989A-F3571F1E1B76.jpg?v=1715957716"
          alt="Chokhi Fashion"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </section>

      {/* Featured Collection */}
      <section className="py-16 container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium mb-6">Browse our latest products</h2>
          <Link href="/collections/all" className="text-sm underline">
            Shop all
          </Link>
        </div>

        <h3 className="text-xl font-medium mb-8">Featured collection</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              href={product.href}
              onSale={product.onSale}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/collections/all">
            <Button variant="outline" className="rounded-none">View all</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
