import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <span className="text-2xl font-bold">LUXE</span>
            </Link>
            <p className="mb-4 max-w-xs text-muted-foreground">
              Discover the latest trends in fashion, accessories, and lifestyle products.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Shop</h3>
            <ul className="space-y-2 text-sm">
              {["All Products", "New Arrivals", "Best Sellers", "Sale", "Clothing", "Accessories"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Careers", "Store Locations", "Our Blog", "Reviews", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              {["Help Center", "Track Order", "Returns & Exchanges", "Shipping Info", "Gift Cards", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} LUXE. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
