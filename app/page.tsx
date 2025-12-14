import Blog from "@/components/blog";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Products from "@/components/products";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Certifications />
      <WhyChooseUs />
      <Blog />
      <Contact />
    </>
  );
}
