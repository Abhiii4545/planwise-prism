import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { DollarSign, TrendingUp, Users, Calendar, Download, Bot, Save, RefreshCw, Sparkles, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { toast } = useToast();
  const [marketingSpend, setMarketingSpend] = useState([60]);
  const [pricingModel, setPricingModel] = useState([80]);
  const [teamSize, setTeamSize] = useState([25]);
  const [growthRate, setGrowthRate] = useState([15]);
  const [scenarioCount, setScenarioCount] = useState(1);
  const [currency, setCurrency] = useState("INR");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  
  // Currency conversion rates (base INR)
  const currencyRates = {
    INR: { symbol: "₹", rate: 1, locale: "en-IN" },
    USD: { symbol: "$", rate: 0.012, locale: "en-US" },
    EUR: { symbol: "€", rate: 0.011, locale: "de-DE" },
    GBP: { symbol: "£", rate: 0.0096, locale: "en-GB" },
  };
  
  const formatCurrency = (amount: number) => {
    const { symbol, rate, locale } = currencyRates[currency as keyof typeof currencyRates];
    const convertedAmount = amount * rate;
    if (currency === "INR") {
      return `${symbol}${(convertedAmount / 1000).toFixed(0)}k`;
    }
    return `${symbol}${(convertedAmount / 1000).toFixed(0)}k`;
  };
  
  // Calculate metrics (in INR base)
  const monthlyRevenue = 4000000 + (pricingModel[0] * 80000) + (growthRate[0] * 160000);
  const monthlyExpenses = 2400000 + (marketingSpend[0] * 40000) + (teamSize[0] * 320000);
  const netIncome = monthlyRevenue - monthlyExpenses;
  const runway = Math.max(0, Math.floor(120000000 / Math.max(1, monthlyExpenses - monthlyRevenue)));
  const growthPercentage = ((monthlyRevenue - 4000000) / 4000000 * 100).toFixed(1);
  
  // Chart data
  const revenueData = [
    { month: "Jan", revenue: monthlyRevenue * 0.7, expenses: monthlyExpenses * 0.8, profit: (monthlyRevenue * 0.7) - (monthlyExpenses * 0.8) },
    { month: "Feb", revenue: monthlyRevenue * 0.75, expenses: monthlyExpenses * 0.85, profit: (monthlyRevenue * 0.75) - (monthlyExpenses * 0.85) },
    { month: "Mar", revenue: monthlyRevenue * 0.8, expenses: monthlyExpenses * 0.9, profit: (monthlyRevenue * 0.8) - (monthlyExpenses * 0.9) },
    { month: "Apr", revenue: monthlyRevenue * 0.85, expenses: monthlyExpenses * 0.95, profit: (monthlyRevenue * 0.85) - (monthlyExpenses * 0.95) },
    { month: "May", revenue: monthlyRevenue * 0.92, expenses: monthlyExpenses, profit: (monthlyRevenue * 0.92) - monthlyExpenses },
    { month: "Jun", revenue: monthlyRevenue, expenses: monthlyExpenses, profit: netIncome },
    { month: "Jul", revenue: monthlyRevenue * 1.05, expenses: monthlyExpenses * 1.02, profit: (monthlyRevenue * 1.05) - (monthlyExpenses * 1.02) },
    { month: "Aug", revenue: monthlyRevenue * 1.1, expenses: monthlyExpenses * 1.03, profit: (monthlyRevenue * 1.1) - (monthlyExpenses * 1.03) },
    { month: "Sep", revenue: monthlyRevenue * 1.15, expenses: monthlyExpenses * 1.04, profit: (monthlyRevenue * 1.15) - (monthlyExpenses * 1.04) },
    { month: "Oct", revenue: monthlyRevenue * 1.2, expenses: monthlyExpenses * 1.05, profit: (monthlyRevenue * 1.2) - (monthlyExpenses * 1.05) },
    { month: "Nov", revenue: monthlyRevenue * 1.25, expenses: monthlyExpenses * 1.06, profit: (monthlyRevenue * 1.25) - (monthlyExpenses * 1.06) },
    { month: "Dec", revenue: monthlyRevenue * 1.3, expenses: monthlyExpenses * 1.07, profit: (monthlyRevenue * 1.3) - (monthlyExpenses * 1.07) },
  ];
  
  const departmentData = [
    { name: "Engineering", value: teamSize[0] * 240000, color: "hsl(var(--primary))" },
    { name: "Marketing", value: marketingSpend[0] * 40000, color: "hsl(var(--accent))" },
    { name: "Sales", value: pricingModel[0] * 24000, color: "hsl(var(--success))" },
    { name: "Operations", value: 1200000, color: "hsl(var(--warning))" },
    { name: "Other", value: 800000, color: "hsl(var(--secondary))" },
  ];
  
  const handleSaveScenario = () => {
    setScenarioCount(prev => prev + 1);
    toast({
      title: "Scenario Saved",
      description: `Scenario #${scenarioCount} has been saved successfully.`,
    });
  };
  
  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: "Your financial report is ready for download.",
    });
  };
  
  const handleAIAnalysis = () => {
    // Generate AI suggestions based on current parameters
    const suggestions = [];
    
    if (marketingSpend[0] > 100) {
      suggestions.push("Consider reducing marketing spend by 20% to improve cash flow");
    }
    if (teamSize[0] > 40) {
      suggestions.push("Your team size is above optimal. Consider phased hiring to extend runway");
    }
    if (growthRate[0] < 20) {
      suggestions.push("Focus on growth initiatives to achieve 20%+ monthly growth rate");
    }
    if (netIncome < 0) {
      suggestions.push("Warning: Negative cash flow detected. Adjust pricing or reduce expenses");
    }
    if (runway < 12) {
      suggestions.push("Runway is below 12 months. Consider fundraising or cost optimization");
    }
    if (suggestions.length === 0) {
      suggestions.push("Your financial metrics look healthy! Consider scaling marketing for growth");
    }
    
    setAiSuggestions(suggestions);
    
    toast({
      title: "AI Analysis Complete",
      description: `Generated ${suggestions.length} intelligent insights for your scenario.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-8 px-4">
        <div className="container mx-auto">
          {/* Header with Currency Selector */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Financial Dashboard</h1>
              <p className="text-muted-foreground">Real-time financial planning and forecasting</p>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR">₹ INR</SelectItem>
                  <SelectItem value="USD">$ USD</SelectItem>
                  <SelectItem value="EUR">€ EUR</SelectItem>
                  <SelectItem value="GBP">£ GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 glass-card">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
                <span className="text-sm text-success font-medium">+{growthPercentage}%</span>
              </div>
              <p className="text-2xl font-bold">{formatCurrency(monthlyRevenue)}</p>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
            </Card>
            
            <Card className="p-6 glass-card">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-destructive" />
                </div>
                <span className="text-sm text-muted-foreground">Per month</span>
              </div>
              <p className="text-2xl font-bold">{formatCurrency(monthlyExpenses)}</p>
              <p className="text-sm text-muted-foreground">Monthly Expenses</p>
              <p className="text-sm text-muted-foreground">Monthly Expenses</p>
            </Card>
            
            <Card className="p-6 glass-card">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <span className={`text-sm font-medium ${runway > 12 ? 'text-success' : 'text-warning'}`}>
                  {runway > 12 ? 'Healthy' : 'Monitor'}
                </span>
              </div>
              <p className="text-2xl font-bold">{runway === Infinity ? '∞' : runway}</p>
              <p className="text-sm text-muted-foreground">Months Runway</p>
            </Card>
            
            <Card className="p-6 glass-card">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Total</span>
              </div>
              <p className="text-2xl font-bold">{teamSize[0]}</p>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 glass-card">
                <h3 className="text-lg font-semibold mb-6">Scenario Parameters</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Marketing Spend</label>
                      <span className="text-sm text-muted-foreground">{formatCurrency(marketingSpend[0] * 1000)}</span>
                    </div>
                    <Slider
                      value={marketingSpend}
                      onValueChange={setMarketingSpend}
                      max={150}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Pricing Model</label>
                      <span className="text-sm text-muted-foreground">{formatCurrency(pricingModel[0] * 100)}/user</span>
                    </div>
                    <Slider
                      value={pricingModel}
                      onValueChange={setPricingModel}
                      max={200}
                      step={10}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Team Size</label>
                      <span className="text-sm text-muted-foreground">{teamSize[0]} people</span>
                    </div>
                    <Slider
                      value={teamSize}
                      onValueChange={setTeamSize}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Growth Rate</label>
                      <span className="text-sm text-muted-foreground">{growthRate[0]}%</span>
                    </div>
                    <Slider
                      value={growthRate}
                      onValueChange={setGrowthRate}
                      max={50}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button 
                    variant="gradient" 
                    className="w-full"
                    onClick={handleSaveScenario}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Scenario
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={handleAIAnalysis}
                  >
                    <Bot className="w-4 h-4 mr-2" />
                    AI Analysis
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleGenerateReport}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6 glass-card">
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Net Income</span>
                    <span className={`text-sm font-medium ${netIncome > 0 ? 'text-success' : 'text-destructive'}`}>
                      {formatCurrency(netIncome)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Burn Rate</span>
                    <span className="text-sm font-medium">
                      {formatCurrency(Math.abs(monthlyExpenses - monthlyRevenue))}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Scenarios Tested</span>
                    <span className="text-sm font-medium">{scenarioCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Efficiency Score</span>
                    <span className="text-sm font-medium text-success">
                      {Math.min(100, Math.round((monthlyRevenue / monthlyExpenses) * 100))}%
                    </span>
                  </div>
                </div>
              </Card>
              
              {/* AI Suggestions Panel */}
              {aiSuggestions.length > 0 && (
                <Card className="p-6 glass-card">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">AI Insights</h3>
                  </div>
                  <div className="space-y-2">
                    {aiSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                        <p className="text-sm text-muted-foreground">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
            
            {/* Charts */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 glass-card">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Revenue Forecast</h3>
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
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
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--success))" 
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                      strokeWidth={2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="hsl(var(--destructive))" 
                      fillOpacity={1} 
                      fill="url(#colorExpenses)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 glass-card">
                  <h3 className="text-lg font-semibold mb-4">Department Budget</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
                
                <Card className="p-6 glass-card">
                  <h3 className="text-lg font-semibold mb-4">Profit Trend</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={revenueData.slice(0, 6)}>
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
                      <Bar 
                        dataKey="profit" 
                        fill="hsl(var(--primary))" 
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}