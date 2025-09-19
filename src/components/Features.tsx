import { Calculator, TrendingUp, FileText, Bot, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Budget Simulation",
    description: "Interactive sliders for real-time budget adjustments and scenario planning",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Bot,
    title: "AI Insights",
    description: "Powered by advanced AI to provide intelligent financial recommendations",
    gradient: "from-accent to-primary",
  },
  {
    icon: TrendingUp,
    title: "Growth Forecasting",
    description: "Predictive analytics for revenue, expenses, and runway calculations",
    gradient: "from-success to-success-light",
  },
  {
    icon: FileText,
    title: "Smart Reports",
    description: "Generate comprehensive financial reports with one click",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level encryption ensures your financial data stays protected",
    gradient: "from-warning to-accent",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Instant updates across all devices with cloud synchronization",
    gradient: "from-primary to-accent",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-card-elevated/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need for
            <span className="text-gradient block">Financial Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your financial planning and decision-making
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-card rounded-xl p-8 hover:shadow-card transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}