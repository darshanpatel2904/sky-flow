import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "Complete Guide to UPVC Pipe Installation",
    excerpt:
      "Learn the best practices for installing UPVC pipes in residential and commercial settings.",
    category: "Installation Tips",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "installation",
  },
  {
    id: 2,
    title: "UPVC vs CPVC: Which One Should You Choose?",
    excerpt:
      "A comprehensive comparison of UPVC and CPVC pipes to help you make the right decision.",
    category: "Industry Insights",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    image: "comparison",
  },
  {
    id: 3,
    title: "Maintaining Your Plumbing System: Essential Tips",
    excerpt:
      "Expert tips to keep your plumbing system in top condition and prevent costly repairs.",
    category: "Maintenance",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "maintenance",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industry <span className="text-gradient">Insights & Tips</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest trends, installation guides, and expert
            advice from our industry professionals.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 bg-linear-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-lg bg-accent/50" />
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
