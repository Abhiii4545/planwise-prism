import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About CFO Helper</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering businesses with intelligent financial forecasting and strategic insights to drive growth and success.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="p-8 glass-card mb-12">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                <p className="text-muted-foreground">
                  We believe every business deserves access to sophisticated financial planning tools. Our mission is to democratize 
                  financial intelligence, making it accessible to startups and enterprises alike. We're committed to helping businesses 
                  make data-driven decisions that lead to sustainable growth and profitability.
                </p>
              </div>
            </div>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 glass-card">
              <Building2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously pushing boundaries with AI-powered insights and real-time analytics.
              </p>
            </Card>

            <Card className="p-6 glass-card">
              <Users className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                Your success is our priority. We listen, adapt, and evolve based on your needs.
              </p>
            </Card>

            <Card className="p-6 glass-card">
              <Award className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to delivering the highest quality financial planning solutions.
              </p>
            </Card>
          </div>

          {/* Team Section */}
          <Card className="p-8 glass-card">
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2024, CFO Helper emerged from a simple observation: too many businesses struggle with financial planning 
                not because they lack intelligence, but because they lack the right tools. Traditional financial software was either 
                too complex or too simplistic.
              </p>
              <p>
                Our team of financial experts, data scientists, and engineers came together to build a solution that bridges this gap. 
                We've created a platform that combines the sophistication of enterprise-grade financial tools with the simplicity and 
                accessibility that modern businesses demand.
              </p>
              <p>
                Today, CFO Helper serves thousands of businesses worldwide, helping them forecast revenue, optimize expenses, and make 
                strategic decisions with confidence. We're proud to be part of their growth journey.
              </p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}