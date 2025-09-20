import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Copy, Check, ArrowRight, Key, Shield, Zap } from "lucide-react";
import { useState } from "react";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/forecast",
    description: "Retrieve financial forecast data",
    color: "text-primary",
  },
  {
    method: "POST",
    path: "/api/v1/scenarios",
    description: "Create a new financial scenario",
    color: "text-success",
  },
  {
    method: "PUT",
    path: "/api/v1/budget/:id",
    description: "Update budget parameters",
    color: "text-warning",
  },
  {
    method: "DELETE",
    path: "/api/v1/scenarios/:id",
    description: "Delete a scenario",
    color: "text-destructive",
  },
  {
    method: "GET",
    path: "/api/v1/reports",
    description: "Generate financial reports",
    color: "text-primary",
  },
  {
    method: "POST",
    path: "/api/v1/auth/token",
    description: "Generate API authentication token",
    color: "text-success",
  },
];

const codeExamples = {
  javascript: `// Initialize CFO Helper API client
const CFOHelper = require('@cfohelper/sdk');

const client = new CFOHelper({
  apiKey: 'your_api_key_here',
  environment: 'production'
});

// Get financial forecast
const forecast = await client.forecast.get({
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  currency: 'INR'
});

// Create a new scenario
const scenario = await client.scenarios.create({
  name: 'Growth Scenario',
  parameters: {
    marketingSpend: 100000,
    teamSize: 25,
    growthRate: 15
  }
});`,
  python: `# Initialize CFO Helper API client
import cfohelper

client = cfohelper.Client(
    api_key='your_api_key_here',
    environment='production'
)

# Get financial forecast
forecast = client.forecast.get(
    start_date='2024-01-01',
    end_date='2024-12-31',
    currency='INR'
)

# Create a new scenario
scenario = client.scenarios.create(
    name='Growth Scenario',
    parameters={
        'marketing_spend': 100000,
        'team_size': 25,
        'growth_rate': 15
    }
)`,
  curl: `# Get financial forecast
curl -X GET https://api.cfohelper.com/v1/forecast \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "startDate": "2024-01-01",
    "endDate": "2024-12-31",
    "currency": "INR"
  }'

# Create a new scenario
curl -X POST https://api.cfohelper.com/v1/scenarios \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Growth Scenario",
    "parameters": {
      "marketingSpend": 100000,
      "teamSize": 25,
      "growthRate": 15
    }
  }'`,
};

export default function ApiReference() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof codeExamples>("javascript");

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">API Reference</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Build powerful integrations with our comprehensive REST API
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="gradient" size="lg">
                <Key className="mr-2 w-4 h-4" />
                Get API Key
              </Button>
              <Button variant="outline" size="lg">
                <Code className="mr-2 w-4 h-4" />
                View SDKs
              </Button>
            </div>
          </div>

          {/* API Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 glass-card">
              <Zap className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Sub-100ms response times with global CDN distribution
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <Shield className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Secure by Default</h3>
              <p className="text-sm text-muted-foreground">
                OAuth 2.0 authentication with rate limiting and encryption
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <Code className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Developer Friendly</h3>
              <p className="text-sm text-muted-foreground">
                SDKs for all major languages with comprehensive docs
              </p>
            </Card>
          </div>

          {/* Authentication */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
            <p className="text-muted-foreground mb-6">
              All API requests require authentication using a Bearer token in the Authorization header.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-muted-foreground">Authorization:</span> Bearer YOUR_API_KEY_HERE
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy("Authorization: Bearer YOUR_API_KEY_HERE", -1)}
                >
                  {copiedIndex === -1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </Card>

          {/* Endpoints */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">Available Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className={`font-mono font-semibold ${endpoint.color}`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm">{endpoint.path}</code>
                  </div>
                  <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Code Examples */}
          <Card className="p-8 glass-card">
            <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
            
            {/* Language Selector */}
            <div className="flex gap-2 mb-6">
              {Object.keys(codeExamples).map((lang) => (
                <Button
                  key={lang}
                  variant={selectedLanguage === lang ? "gradient" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLanguage(lang as keyof typeof codeExamples)}
                  className="capitalize"
                >
                  {lang}
                </Button>
              ))}
            </div>

            {/* Code Block */}
            <div className="relative">
              <div className="bg-secondary/30 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <pre className="whitespace-pre-wrap">{codeExamples[selectedLanguage]}</pre>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4"
                onClick={() => handleCopy(codeExamples[selectedLanguage], 999)}
              >
                {copiedIndex === 999 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="outline">
                View Full Documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost">
                Download Postman Collection
              </Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}