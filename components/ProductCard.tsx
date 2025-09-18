"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  slug: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card
      className="group overflow-hidden transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <Link href={`/products/${product.slug}`}>
          <div className="relative overflow-hidden">
            <div
              className="aspect-[3/4] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            
            {(product.isNew || product.isSale) && (
              <div className="absolute left-2 top-2 flex flex-col gap-1">
                {product.isNew && (
                  <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
                )}
                {product.isSale && (
                  <Badge className="bg-red-500 hover:bg-red-600">
                    {discount}% Off
                  </Badge>
                )}
              </div>
            )}
            
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 flex justify-center gap-2 bg-background/90 p-2 backdrop-blur transition-transform",
                isHovered ? "translate-y-0" : "translate-y-full"
              )}
            >
              <Button size="sm" className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={cn("h-4 w-4", isFavorite && "fill-red-500 text-red-500")}
            />
          </Button>
        </div>
        <Link href={`/products/${product.slug}`} className="hover:underline">
          <h3 className="line-clamp-1 font-medium">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
