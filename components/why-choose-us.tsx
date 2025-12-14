import {
  Shield,
  Truck,
  Award,
  HeadphonesIcon,
  Leaf,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Shield,
    title: "100% Lead-Free",
    description:
      "Sky Flow lead-free pipe fittings are hygienic and safe for potable water transportation.",
  },
  {
    icon: Truck,
    title: "50% Cost Savings",
    description:
      "Our system costs almost half of conventional GI systems with a much longer life span.",
  },
  {
    icon: Award,
    title: "ISO 9001:2015",
    description:
      "Certified manufacturing processes with rigorous quality control standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description:
      "Our experienced team provides guidance for all plumbing applications and queries.",
  },
  {
    icon: Leaf,
    title: "Technically Superior",
    description:
      "Advanced uPVC technology offering many advantages over conventional GI systems.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description:
      "Designed for terrace looping, down-take, up-take lines, and concealed pipe work.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Why Choose Sky Flow
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              India's Pioneer in{" "}
              <span className="text-gradient">Advanced UPVC Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dhyey Plastic is an acknowledged leader of India's plastic
              industry with 6+ years of pioneering experience. We've led the
              transition from conventional to advanced UPVC pipe & fitting
              products, offering comprehensive lead-free plumbing solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-md">
                <p className="text-4xl font-bold text-primary mb-2">99.8%</p>
                <p className="text-sm text-muted-foreground">
                  Customer Satisfaction Rate
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-md">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-muted-foreground">
                  Product Variants
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-md">
                <p className="text-4xl font-bold text-primary mb-2">6+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-md">
                <p className="text-4xl font-bold text-primary mb-2">50%</p>
                <p className="text-sm text-muted-foreground">Cost Savings</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
