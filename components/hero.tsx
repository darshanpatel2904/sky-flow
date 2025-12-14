import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const features = [
    "100% Lead-Free",
    "ISO 9001:2015 Certified",
    "50% Cost Savings",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Dhyey Plastic - India's Trusted UPVC Leader
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Sky Flow UPVC
              <span className="block mt-2">Pipes & Fittings</span>
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Lead-free, high-pressure uPVC solvent weld plumbing system.
              Cost-effective solutions at almost half the price of conventional
              systems with longer life span.
            </p>

            {/* Feature List */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-primary-foreground/90"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl">
                View Products
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Get Free Quote
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  6+
                </p>
                <p className="text-sm text-primary-foreground/70">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  500+
                </p>
                <p className="text-sm text-primary-foreground/70">Products</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  10K+
                </p>
                <p className="text-sm text-primary-foreground/70">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div
            className="relative hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-primary-foreground/10 blur-2xl" />

              {/* Product showcase card */}
              <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
                <div className="grid grid-cols-2 gap-4">
                  {["PLAIN ELBOW", "PLAIN TEE", "COUPLER", "END CAP"].map(
                    (product, i) => (
                      <div
                        key={product}
                        className="bg-primary-foreground/20 rounded-2xl p-6 text-center hover:bg-primary-foreground/30 transition-colors cursor-pointer"
                        style={{ animationDelay: `${0.1 * i}s` }}
                      >
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary-foreground/30 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-accent" />
                        </div>
                        <p className="text-sm font-semibold text-primary-foreground">
                          {product}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
