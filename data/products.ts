export interface ProductSize {
  size: string;
  price: number;
  bagQty: number;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  sizes: ProductSize[];
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "plain-elbow-90",
    name: "Plain Elbow 90°",
    category: "Elbows",
    description:
      "High-quality UPVC 90-degree elbow fitting for smooth directional changes in piping systems. Designed for durability and leak-free performance.",
    features: [
      "90-degree angle for precise directional changes",
      "Smooth inner surface for optimal flow",
      "UV resistant material",
      "Lead-free and non-toxic",
      "Easy solvent cement welding",
    ],
    sizes: [
      { size: '½"', price: 2.5, bagQty: 100 },
      { size: '¾"', price: 3.0, bagQty: 80 },
      { size: '1"', price: 4.0, bagQty: 60 },
      { size: '1¼"', price: 5.5, bagQty: 50 },
      { size: '1½"', price: 6.5, bagQty: 40 },
      { size: '2"', price: 8.0, bagQty: 30 },
    ],
    image: "elbow",
    isBestSeller: true,
  },
  {
    id: 2,
    slug: "plain-tee",
    name: "Plain Tee",
    category: "Tees",
    description:
      "Premium UPVC tee fitting for creating branch connections in your plumbing system. Perfect for water distribution networks.",
    features: [
      "Equal outlet diameter on all ends",
      "High-pressure resistance",
      "Corrosion-free construction",
      "Long service life",
      "Compatible with standard UPVC pipes",
    ],
    sizes: [
      { size: '½"', price: 3.0, bagQty: 80 },
      { size: '¾"', price: 3.75, bagQty: 60 },
      { size: '1"', price: 5.0, bagQty: 50 },
      { size: '1¼"', price: 7.0, bagQty: 40 },
      { size: '1½"', price: 8.5, bagQty: 30 },
      { size: '2"', price: 10.0, bagQty: 25 },
    ],
    image: "tee",
    isNew: true,
  },
  {
    id: 3,
    slug: "plain-coupler",
    name: "Plain Coupler",
    category: "Couplers",
    description:
      "Reliable UPVC coupler for joining two pipes of the same diameter. Ensures a secure and watertight connection.",
    features: [
      "Precision-engineered for perfect fit",
      "Leak-proof design",
      "Chemical resistant",
      "Temperature stable",
      "Easy installation",
    ],
    sizes: [
      { size: '½"', price: 1.5, bagQty: 150 },
      { size: '¾"', price: 2.0, bagQty: 120 },
      { size: '1"', price: 2.75, bagQty: 100 },
      { size: '1¼"', price: 3.5, bagQty: 80 },
      { size: '1½"', price: 4.5, bagQty: 60 },
      { size: '2"', price: 5.5, bagQty: 50 },
      { size: '3"', price: 6.0, bagQty: 40 },
    ],
    image: "coupler",
  },
  {
    id: 4,
    slug: "end-cap",
    name: "End Cap",
    category: "Caps",
    description:
      "Durable UPVC end cap for sealing pipe ends. Ideal for temporary or permanent pipe termination.",
    features: [
      "Secure pipe termination",
      "Pressure tested",
      "Weather resistant",
      "Reusable design",
      "Available in multiple sizes",
    ],
    sizes: [
      { size: '½"', price: 1.0, bagQty: 200 },
      { size: '¾"', price: 1.5, bagQty: 150 },
      { size: '1"', price: 2.0, bagQty: 120 },
      { size: '1¼"', price: 2.75, bagQty: 100 },
      { size: '1½"', price: 3.25, bagQty: 80 },
      { size: '2"', price: 4.0, bagQty: 60 },
    ],
    image: "cap",
  },
  {
    id: 5,
    slug: "reducer",
    name: "Reducer",
    category: "Reducers",
    description:
      "Professional-grade UPVC reducer for connecting pipes of different diameters. Maintains optimal flow characteristics.",
    features: [
      "Smooth transition between sizes",
      "Minimizes pressure drop",
      "High-strength construction",
      "Precision molded",
      "Industry standard dimensions",
    ],
    sizes: [
      { size: '¾" x ½"', price: 2.0, bagQty: 100 },
      { size: '1" x ¾"', price: 3.0, bagQty: 80 },
      { size: '1¼" x 1"', price: 4.5, bagQty: 60 },
      { size: '1½" x 1¼"', price: 5.5, bagQty: 50 },
      { size: '2" x 1½"', price: 7.0, bagQty: 40 },
    ],
    image: "reducer",
    isBestSeller: true,
  },
  {
    id: 6,
    slug: "male-adapter",
    name: "Male Adapter",
    category: "Adapters",
    description:
      "Versatile UPVC male threaded adapter for connecting UPVC pipes to threaded fittings. Perfect for water supply systems.",
    features: [
      "BSP threaded connection",
      "High thread accuracy",
      "Suitable for potable water",
      "Brass insert option available",
      "Maximum sealing efficiency",
    ],
    sizes: [
      { size: '½"', price: 3.5, bagQty: 100 },
      { size: '¾"', price: 4.5, bagQty: 80 },
      { size: '1"', price: 6.0, bagQty: 60 },
      { size: '1¼"', price: 8.0, bagQty: 50 },
      { size: '1½"', price: 10.0, bagQty: 40 },
      { size: '2"', price: 12.0, bagQty: 30 },
    ],
    image: "adapter",
    isNew: true,
  },
  {
    id: 7,
    slug: "female-adapter",
    name: "Female Adapter",
    category: "Adapters",
    description:
      "Quality UPVC female threaded adapter for versatile plumbing connections. Ensures secure transition between pipe types.",
    features: [
      "Internal BSP threads",
      "Reinforced thread design",
      "Compatible with metal fittings",
      "Food-grade material",
      "Excellent chemical resistance",
    ],
    sizes: [
      { size: '½"', price: 3.5, bagQty: 100 },
      { size: '¾"', price: 4.5, bagQty: 80 },
      { size: '1"', price: 6.0, bagQty: 60 },
      { size: '1¼"', price: 8.0, bagQty: 50 },
      { size: '1½"', price: 10.0, bagQty: 40 },
      { size: '2"', price: 12.0, bagQty: 30 },
    ],
    image: "adapter",
  },
  {
    id: 8,
    slug: "union",
    name: "Union",
    category: "Unions",
    description:
      "Heavy-duty UPVC union fitting for easy pipe disconnection and maintenance. Three-piece design for convenient servicing.",
    features: [
      "Three-piece construction",
      "Easy disassembly",
      "EPDM O-ring seal",
      "Reusable multiple times",
      "Maintenance-friendly design",
    ],
    sizes: [
      { size: '½"', price: 5.0, bagQty: 50 },
      { size: '¾"', price: 7.0, bagQty: 40 },
      { size: '1"', price: 9.5, bagQty: 30 },
      { size: '1¼"', price: 12.0, bagQty: 25 },
      { size: '1½"', price: 15.0, bagQty: 20 },
    ],
    image: "union",
  },
];

export const categories = [
  "All",
  "Elbows",
  "Tees",
  "Couplers",
  "Caps",
  "Reducers",
  "Adapters",
  "Unions",
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
};
