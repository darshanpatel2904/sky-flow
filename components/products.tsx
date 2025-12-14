"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Eye } from "lucide-react";
import { products, categories } from "@/data/products";
import Link from "next/link";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const getPriceRange = (product: (typeof products)[0]) => {
    const prices = product.sizes.map((s) => s.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return `$${min.toFixed(2)} - $${max.toFixed(2)}`;
  };

  const getBagQty = (product: (typeof products)[0]) => {
    const qtys = product.sizes.map((s) => s.bagQty);
    const min = Math.min(...qtys);
    const max = Math.max(...qtys);
    return min === max ? `${min} pcs/bag` : `${min}-${max} pcs/bag`;
  };

  const handleWhatsAppInquiry = (productName: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${productName}. Please share more details.`
    );
    window.open(`https://wa.me/919913044830?text=${message}`, "_blank");
  };

  const handlePhoneInquiry = () => {
    window.location.href = "tel:+919913044830";
  };

  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Premium <span className="text-gradient">UPVC Fittings</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive range of high-quality UPVC pipes and
            fittings, designed for durability and performance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-linear-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/50" />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground">
                      New
                    </Badge>
                  )}
                  {product.isBestSeller && (
                    <Badge className="bg-primary text-primary-foreground">
                      Best Seller
                    </Badge>
                  )}
                </div>

                {/* Quick View - Links to Product Detail */}
                <Link
                  href={`/product/${product.slug}`}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Button variant="secondary" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <Link
                  href={`/product/${product.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                </Link>

                {/* Sizes */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.sizes.slice(0, 4).map((sizeItem, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
                    >
                      {sizeItem.size}
                    </span>
                  ))}
                  {product.sizes.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                      +{product.sizes.length - 4}
                    </span>
                  )}
                </div>

                {/* Price & Quantity */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-lg font-bold text-primary">
                      {getPriceRange(product)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {getBagQty(product)}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="whatsapp"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleWhatsAppInquiry(product.name)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePhoneInquiry}
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
