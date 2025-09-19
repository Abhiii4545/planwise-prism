import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { DollarSign, Users, TrendingUp, Calendar } from "lucide-react";

export function InteractiveDemo() {
  const [spending, setSpending] = useState([50]);
  const [pricing, setPricing] = useState([70]);
  const [hiring, setHiring] = useState([30]);
  
  // Calculate dynamic data based on sliders
  const monthlyBurn = 50000 + (spending[0] * 1000) + (hiring[0] * 5000);
  const monthlyRevenue = pricing[0] * 1000;
  const runway = Math.floor((1000000 - (monthlyBurn * 6)) / monthlyBurn);
  
  const chartData = [
    { month: "Jan", revenue: monthlyRevenue * 0.8, expenses: monthlyBurn * 0.9 },
    { month: "Feb", revenue: monthlyRevenue * 0.85, expenses: monthlyBurn * 0.95 },
    { month: "Mar", revenue: monthlyRevenue * 0.9, expenses: monthlyBurn },
    { month: "Apr", revenue: monthlyRevenue, expenses: monthlyBurn },
    { month: "May", revenue: monthlyRevenue * 1.1, expenses: monthlyBurn * 1.02 },
    { month: "Jun", revenue: monthlyRevenue * 1.2, expenses: monthlyBurn * 1.05 },
  ];
  
  const barData = [
    { category: "Marketing", value: spending[0] * 100 },
    { category: "Engineering", value: hiring[0] * 200 },
    { category: "Operations", value: 3000 },
    { category: "Sales", value: pricing[0] * 50 },
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            See It In Action
            <span className="text-gradient block">Interactive Financial Planning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Adjust the sliders below to see how changes affect your financial forecast in real-time
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <Card className="p-6 glass-card">
              <h3 className="text-lg font-semibold mb-4">Adjust Parameters</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Marketing Spend</label>
                    <span className="text-sm text-muted-foreground">${spending[0]}k/month</span>
                  </div>
                  <Slider
                    value={spending}
                    onValueChange={setSpending}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Pricing Adjustment</label>
                    <span className="text-sm text-muted-foreground">{pricing[0]}%</span>
                  </div>
                  <Slider
                    value={pricing}
                    onValueChange={setPricing}
                    max={150}
                    step={10}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Hiring Rate</label>
                    <span className="text-sm text-muted-foreground">{hiring[0]} employees</span>
                  </div>
                  <Slider
                    value={hiring}
                    onValueChange={setHiring}
                    max={50}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 glass-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                    <p className="text-xl font-bold">${(monthlyRevenue / 1000).toFixed(0)}k</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 glass-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Burn</p>
                    <p className="text-xl font-bold">${(monthlyBurn / 1000).toFixed(0)}k</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 glass-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Runway</p>
                    <p className="text-xl font-bold">{runway} months</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 glass-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="text-xl font-bold">{20 + hiring[0]}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Charts */}
          <div className="space-y-6">
            <Card className="p-6 glass-card">
              <h3 className="text-lg font-semibold mb-4">Revenue vs Expenses</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--success))" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--destructive))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
            
            <Card className="p-6 glass-card">
              <h3 className="text-lg font-semibold mb-4">Department Budget</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}