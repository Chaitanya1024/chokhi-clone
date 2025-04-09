import Link from "next/link";
import { Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { name: "Search", href: "/search" },
  { name: "Shipping policy", href: "/policies/shipping-policy" },
  { name: "Terms of service", href: "/policies/terms-of-service" },
  { name: "Privacy policy", href: "/policies/privacy-policy" },
  { name: "Refund policy", href: "/policies/refund-policy" },
  { name: "Contact us", href: "/policies/contact-information" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-medium mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-base font-medium mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chokhi is an emerging size inclusive women's clothing brand<br />
              aiming to fulfil the gap for affordable fashion.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              we believe in<br />
              self-love, accepting our self-perceived flaws and aspire to redefine standards<br />
              of beauty, empowering every individual to feel confident.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              we are committed to make You feel the love and care that goes into every single<br />
              stitch.
            </p>
            <div className="flex items-center mt-4">
              <Link
                href="https://www.instagram.com/chokhi.in/?igsh=bjUyczkyc2d2YjVi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-chokhi-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-base font-medium mb-4">Subscribe to our emails</h3>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Email"
                className="border-gray-300 focus:border-chokhi-primary"
              />
              <Button type="submit" variant="outline">
                →
              </Button>
            </div>
            <div className="flex items-center mt-4">
              <Link
                href="https://www.instagram.com/chokhi.in/?igsh=bjUyczkyc2d2YjVi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-chokhi-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">
              Country/region
            </span>
            <span className="text-sm text-muted-foreground ml-2">
              Payment methods
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span>2025, </span>
            <Link href="/" className="hover:text-foreground">
              Chokhi by SWASTIK
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="https://www.shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Powered by Shopify
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
