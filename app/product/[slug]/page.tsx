"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  ArrowLeft,
  Package,
  CheckCircle,
} from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/#products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${product.name}. Please share more details and pricing.`
    );
    window.open(`https://wa.me/919913044830?text=${message}`, "_blank");
  };

  const handlePhoneInquiry = () => {
    window.location.href = "tel:+919913044830";
  };

  return (
    <>
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/50 py-4">
          <div className="container mx-auto px-4">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Products
            </Link>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-3xl flex items-center justify-center overflow-hidden">
                  <div className="w-48 h-48 rounded-3xl bg-primary/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent/50" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                      New
                    </Badge>
                  )}
                  {product.isBestSeller && (
                    <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
                      Best Seller
                    </Badge>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="whatsapp"
                    onClick={handleWhatsAppInquiry}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Inquire on WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handlePhoneInquiry}
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size & Price Table */}
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Available Sizes & Pricing
              </h2>
              <p className="text-muted-foreground">
                Complete range of sizes with competitive bulk pricing
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="px-6 py-4 text-left font-semibold">
                          Size
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          Price per Piece
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          Bag Quantity
                        </th>
                        <th className="px-6 py-4 text-center font-semibold">
                          Bag Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizes.map((sizeItem, index) => (
                        <tr
                          key={index}
                          className="border-t border-border hover:bg-secondary/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <span className="font-medium text-lg">
                              {sizeItem.size}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-primary font-bold">
                              ${sizeItem.price.toFixed(2)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="inline-flex items-center gap-2">
                              <Package className="w-4 h-4 text-muted-foreground" />
                              <span>{sizeItem.bagQty} pcs/bag</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="font-semibold text-lg">
                              ${(sizeItem.price * sizeItem.bagQty).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                * Prices are indicative. Contact us for bulk order discounts and
                current rates.
              </p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.slug}`}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-32 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-8 h-8 rounded-full bg-accent/50" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {relatedProduct.category}
                      </p>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
