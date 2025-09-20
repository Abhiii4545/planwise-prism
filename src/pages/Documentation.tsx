import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Code, Zap, Shield, Database, Settings, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const docCategories = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "Quick start guide to get up and running in minutes",
    links: [
      "Installation & Setup",
      "Your First Forecast",
      "Dashboard Overview",
      "Basic Configuration",
    ],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize CFO Helper to match your business needs",
    links: [
      "Account Settings",
      "Team Management",
      "Currency & Localization",
      "Notification Preferences",
    ],
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Import, export, and manage your financial data",
    links: [
      "Data Import Guide",
      "Export Options",
      "Data Backup",
      "Integration Setup",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Learn about our security measures and compliance",
    links: [
      "Security Overview",
      "Data Encryption",
      "Compliance Standards",
      "Audit Logs",
    ],
  },
];

const popularArticles = [
  "How to Create Your First Financial Forecast",
  "Understanding Runway Calculations",
  "Setting Up Team Budgets",
  "Integrating with QuickBooks",
  "Customizing Reports and Dashboards",
  "Managing Multiple Scenarios",
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to know about using CFO Helper effectively
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="gradient" size="lg">
                <Book className="mr-2 w-4 h-4" />
                Start Tutorial
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="mr-2 w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <Card className="p-6 glass-card mb-12">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search documentation..."
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gradient">Search</Button>
            </div>
          </Card>

          {/* Documentation Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {docCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="p-6 glass-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link 
                              to="#" 
                              className="text-sm text-primary hover:underline flex items-center gap-1 hover:gap-2 transition-all"
                            >
                              {link}
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Popular Articles */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">Popular Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  to="#"
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-sm">{article}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </Card>

          {/* Code Examples */}
          <Card className="p-8 glass-card">
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">API Reference</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Integrate CFO Helper with your existing tools using our comprehensive API.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-6 font-mono text-sm">
              <div className="text-muted-foreground mb-2"># Get financial forecast</div>
              <div>
                <span className="text-primary">GET</span> /api/v1/forecast
              </div>
              <div className="mt-3 text-muted-foreground"># Create new scenario</div>
              <div>
                <span className="text-success">POST</span> /api/v1/scenarios
              </div>
              <div className="mt-3 text-muted-foreground"># Update budget parameters</div>
              <div>
                <span className="text-warning">PUT</span> /api/v1/budget/:id
              </div>
            </div>
            <Button variant="outline">
              View Full API Documentation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}