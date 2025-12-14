import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "Make in India",
    description: "Proudly manufactured in India",
    icon: "🇮🇳",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    name: "MSME Registered",
    description: "Government recognized enterprise",
    icon: "🏭",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    name: "ISO 9001:2015",
    description: "Quality Management Certified",
    icon: "✓",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    name: "Satyamev Jayate",
    description: "Truth Alone Triumphs",
    icon: "🦁",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    name: "Swachh Bharat",
    description: "Clean India Mission Partner",
    icon: "🌿",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
  },
];

const Certifications = () => {
  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Credentials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are proud to be certified and recognized by leading Indian
            institutions, ensuring quality and trust in every product we
            manufacture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border ${cert.borderColor} ${cert.bgColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{cert.icon}</div>

              {/* Name */}
              <h3 className="font-semibold text-sm lg:text-base mb-2 leading-tight">
                {cert.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-tight">
                {cert.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 lg:p-8 bg-primary/5 rounded-2xl border border-primary/20 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              100% Indian Manufacturing
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Quality Assured Products
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Government Recognized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
