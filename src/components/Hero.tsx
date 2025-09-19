import { ArrowRight, TrendingUp, LineChart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Hero() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 98) return prev + 1;
        return prev;
      });
    }, 20);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background - pure white */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-primary/10 blur-xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-32 h-32 rounded-full bg-accent/10 blur-xl" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: "4s" }}>
        <div className="w-16 h-16 rounded-full bg-success/10 blur-xl" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Financial Intelligence</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Smart Financial
            <span className="block text-primary">Forecasting Made Simple</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Transform your financial planning with AI-driven insights, real-time simulations, 
            and intelligent forecasting. Make data-driven decisions with confidence.
          </p>
          
          {/* CTA Button - Single button only */}
          <div className="flex justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/dashboard">
              <Button variant="gradient" size="xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="text-3xl font-bold animate-counter">{count}%</span>
              </div>
              <p className="text-muted-foreground">Forecast Accuracy</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <LineChart className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold animate-counter">2.5x</span>
              </div>
              <p className="text-muted-foreground">Faster Planning</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-accent" />
                <span className="text-3xl font-bold animate-counter">500+</span>
              </div>
              <p className="text-muted-foreground">AI Scenarios/Day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}