import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Women's Fashion",
    image: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "womens-fashion",
  },
  {
    name: "Men's Fashion",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "mens-fashion",
  },
  {
    name: "Accessories",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "accessories",
  },
  {
    name: "Footwear",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "footwear",
  },
];

const Categories = () => {
  return (
    <section className="container">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Shop by Category</h2>
        <p className="text-muted-foreground">
          Explore our wide range of products across different categories
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <div
                    className="aspect-square w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-medium">{category.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
