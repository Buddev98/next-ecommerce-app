import ProductCard, { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products: Product[] = [
  {
    id: 1,
    name: "Oversized Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    image: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNew: true,
    slug: "oversized-cotton-tshirt",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 89.99,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "classic-denim-jacket",
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.2,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isSale: true,
    slug: "leather-crossbody-bag",
  },
  {
    id: 4,
    name: "Slim Fit Chino Pants",
    price: 49.99,
    rating: 4.0,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "slim-fit-chino-pants",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isSale: true,
    slug: "wireless-headphones",
  },
  {
    id: 6,
    name: "Minimalist Watch",
    price: 79.99,
    rating: 4.6,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNew: true,
    slug: "minimalist-watch",
  },
  {
    id: 7,
    name: "Running Sneakers",
    price: 119.99,
    rating: 4.3,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "running-sneakers",
  },
  {
    id: 8,
    name: "Polarized Sunglasses",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.1,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isSale: true,
    slug: "polarized-sunglasses",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <p className="text-muted-foreground">
            Handpicked products that you'll love
          </p>
        </div>
        <Button variant="outline" className="hidden sm:flex">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center sm:hidden">
        <Button>
          View All Products <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
