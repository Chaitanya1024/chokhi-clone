import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  href: string;
  onSale?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  href,
  onSale = false,
}: ProductCardProps) {
  return (
    <Card className="product-card overflow-hidden rounded-none border-none shadow-none bg-transparent">
      <Link href={href} className="block">
        <div className="relative aspect-[3/4] overflow-hidden mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
          {onSale && (
            <div className="absolute top-4 left-4 sale-badge">
              Sale
            </div>
          )}
        </div>
      </Link>
      <div className="p-2">
        <h3 className="text-base font-medium mb-1">
          <Link href={href} className="hover:underline">
            {name}
          </Link>
        </h3>
        <div className="flex items-center">
          <span className="font-medium text-sm">
            {price}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm ml-2">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
