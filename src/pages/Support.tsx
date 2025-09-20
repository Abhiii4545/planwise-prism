import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, FileText, Video, Users, Search, HelpCircle, Zap, Clock } from "lucide-react";

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start Chat",
    availability: "Available 24/7",
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Browse articles and tutorials",
    action: "Browse Articles",
    availability: "500+ articles",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch step-by-step video guides",
    action: "Watch Videos",
    availability: "50+ tutorials",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other CFO Helper users",
    action: "Join Community",
    availability: "10k+ members",
  },
];

const commonIssues = [
  {
    question: "How do I reset my password?",
    answer: "Go to Settings > Account > Security and click 'Change Password'. You'll receive a confirmation email.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes! Navigate to Reports > Export and choose your preferred format (CSV, Excel, or PDF).",
  },
  {
    question: "How do I add team members?",
    answer: "Go to Settings > Team > Invite Members and enter their email addresses. They'll receive an invitation link.",
  },
  {
    question: "Is there a mobile app?",
    answer: "CFO Helper is fully responsive and works great on mobile browsers. Native apps are coming soon!",
  },
  {
    question: "How do I change my billing information?",
    answer: "Visit Settings > Billing > Payment Methods to update your credit card or billing address.",
  },
  {
    question: "Can I integrate with QuickBooks?",
    answer: "Yes! Go to Settings > Integrations > QuickBooks and follow the connection wizard.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get help quickly with our comprehensive support resources
            </p>
            
            {/* Search Bar */}
            <Card className="p-4 glass-card max-w-2xl mx-auto">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for help..."
                    className="pl-10"
                  />
                </div>
                <Button variant="gradient">Search</Button>
              </div>
            </Card>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-6 glass-card hover:shadow-lg transition-all hover:-translate-y-1">
                  <Icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                  <p className="text-xs text-primary mb-4">{option.availability}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {option.action}
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Status Banner */}
          <Card className="p-6 glass-card mb-12 bg-success/5 border-success/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <div>
                  <h3 className="font-semibold">All Systems Operational</h3>
                  <p className="text-sm text-muted-foreground">Last updated 2 minutes ago</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">View Status Page</Button>
            </div>
          </Card>

          {/* Common Issues */}
          <Card className="p-8 glass-card mb-12">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Common Issues & Solutions</h2>
            </div>
            <div className="space-y-4">
              {commonIssues.map((issue, index) => (
                <details key={index} className="group">
                  <summary className="cursor-pointer list-none p-4 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{issue.question}</span>
                      <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                    </div>
                  </summary>
                  <div className="px-4 pb-4 pt-2 text-muted-foreground">
                    {issue.answer}
                  </div>
                </details>
              ))}
            </div>
          </Card>

          {/* Priority Support */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 glass-card">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Priority Support</h3>
              <p className="text-muted-foreground mb-4">
                Get faster response times and dedicated support with our Pro and Enterprise plans.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>1-hour response time</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Video className="w-4 h-4 text-primary" />
                  <span>Screen sharing support</span>
                </li>
              </ul>
              <Button variant="gradient" className="w-full">Upgrade to Pro</Button>
            </Card>

            <Card className="p-8 glass-card">
              <FileText className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Request a Feature</h3>
              <p className="text-muted-foreground mb-4">
                Have an idea for improving CFO Helper? We'd love to hear from you!
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Join our product roadmap discussions and vote on upcoming features. Your feedback directly shapes our development priorities.
              </p>
              <Button variant="outline" className="w-full">Submit Feature Request</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}