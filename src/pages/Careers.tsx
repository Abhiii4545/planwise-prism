import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight, Rocket, Heart, Users, Trophy } from "lucide-react";

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Build and scale our financial planning platform using React, TypeScript, and Node.js.",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote / New York",
    type: "Full-time",
    description: "Create intuitive and beautiful experiences for financial professionals.",
  },
  {
    id: 3,
    title: "Financial Analyst",
    department: "Finance",
    location: "Remote",
    type: "Full-time",
    description: "Help shape our financial models and provide insights to our customers.",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote / London",
    type: "Full-time",
    description: "Ensure our customers achieve their financial goals using our platform.",
  },
  {
    id: 5,
    title: "Machine Learning Engineer",
    department: "AI/ML",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Develop AI models to power intelligent financial forecasting.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your family",
  },
  {
    icon: Rocket,
    title: "Growth & Learning",
    description: "Annual learning budget and access to conferences and courses",
  },
  {
    icon: Users,
    title: "Remote First",
    description: "Work from anywhere with flexible hours and async collaboration",
  },
  {
    icon: Trophy,
    title: "Equity & Rewards",
    description: "Competitive salary, equity options, and performance bonuses",
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Help us revolutionize financial planning for businesses worldwide. Build your career while building the future of finance.
            </p>
            <Button variant="gradient" size="lg">
              View Open Positions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Why Join Us */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why CFO Helper?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Impact at Scale</h3>
                <p className="text-muted-foreground">
                  Your work will directly impact thousands of businesses, helping them make better financial decisions and achieve sustainable growth.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  Work with cutting-edge technologies including AI, machine learning, and real-time analytics to solve complex financial challenges.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">World-Class Team</h3>
                <p className="text-muted-foreground">
                  Collaborate with talented professionals from diverse backgrounds, including finance experts, engineers, and designers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  We invest in your professional development with mentorship, training, and opportunities to lead challenging projects.
                </p>
              </div>
            </div>
          </Card>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-6 glass-card">
                    <Icon className="w-10 h-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position) => (
                <Card key={position.id} className="p-6 glass-card hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{position.title}</h3>
                      <p className="text-muted-foreground mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="gradient">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="p-8 glass-card mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-3">Don't See Your Role?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our passion for transforming financial planning.
            </p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}