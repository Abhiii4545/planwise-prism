import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Financial Metrics Every CFO Should Track",
    excerpt: "Discover the essential KPIs that drive business success and how to monitor them effectively for strategic decision-making.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Finance",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "AI-Powered Financial Forecasting: The Future is Here",
    excerpt: "Learn how artificial intelligence is revolutionizing financial planning and what it means for your business.",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Technology",
    icon: DollarSign,
  },
  {
    id: 3,
    title: "Scaling Your Team: When and How to Hire",
    excerpt: "Strategic insights on team expansion, optimal timing, and maintaining financial health during growth phases.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Growth",
    icon: Users,
  },
  {
    id: 4,
    title: "Managing Cash Flow in Uncertain Times",
    excerpt: "Practical strategies for maintaining healthy cash flow and building resilience in volatile markets.",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Strategy",
    icon: DollarSign,
  },
  {
    id: 5,
    title: "The Complete Guide to Runway Planning",
    excerpt: "Everything you need to know about calculating, extending, and optimizing your company's financial runway.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Planning",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "Marketing ROI: Measuring What Matters",
    excerpt: "Deep dive into marketing metrics, attribution models, and optimizing your marketing spend for maximum impact.",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Marketing",
    icon: Users,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, industry trends, and practical tips to help you master financial planning
            </p>
          </div>

          {/* Featured Post */}
          <Card className="p-8 glass-card mb-12 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-2 mb-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Featured</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">
              The CFO's Guide to 2024: Trends, Challenges, and Opportunities
            </h2>
            <p className="text-muted-foreground mb-4">
              Comprehensive analysis of the financial landscape for 2024, including emerging technologies, 
              regulatory changes, and strategic priorities for modern CFOs.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 20, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card key={post.id} className="p-6 glass-card hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <Link to="#" className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}