import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, XCircle, Activity, Server, Database, Shield, Globe } from "lucide-react";

const services = [
  {
    name: "API",
    status: "operational",
    uptime: "99.99%",
    icon: Server,
    responseTime: "45ms",
  },
  {
    name: "Web Application",
    status: "operational",
    uptime: "99.98%",
    icon: Globe,
    responseTime: "120ms",
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.99%",
    icon: Database,
    responseTime: "12ms",
  },
  {
    name: "Authentication",
    status: "operational",
    uptime: "100%",
    icon: Shield,
    responseTime: "89ms",
  },
];

const incidents = [
  {
    date: "2024-01-18",
    title: "Scheduled Maintenance Completed",
    status: "resolved",
    duration: "30 minutes",
    description: "Database optimization and security updates were successfully applied.",
  },
  {
    date: "2024-01-15",
    title: "API Response Time Degradation",
    status: "resolved",
    duration: "45 minutes",
    description: "Temporary slowdown in API responses due to increased traffic. Scaled resources to resolve.",
  },
  {
    date: "2024-01-10",
    title: "Login Issues for EU Region",
    status: "resolved",
    duration: "15 minutes",
    description: "Authentication service experienced brief interruption for European users.",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="w-5 h-5 text-success" />;
    case "degraded":
      return <AlertCircle className="w-5 h-5 text-warning" />;
    case "down":
      return <XCircle className="w-5 h-5 text-destructive" />;
    default:
      return <CheckCircle className="w-5 h-5 text-success" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "text-success";
    case "degraded":
      return "text-warning";
    case "down":
      return "text-destructive";
    default:
      return "text-success";
  }
};

export default function Status() {
  const allOperational = services.every(s => s.status === "operational");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">System Status</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time status and incident reports for all CFO Helper services
            </p>
          </div>

          {/* Overall Status */}
          <Card className={`p-8 glass-card mb-8 ${allOperational ? 'bg-success/5 border-success/20' : 'bg-warning/5 border-warning/20'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {allOperational ? (
                  <>
                    <CheckCircle className="w-8 h-8 text-success" />
                    <div>
                      <h2 className="text-2xl font-semibold">All Systems Operational</h2>
                      <p className="text-muted-foreground">All services are running normally</p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-8 h-8 text-warning" />
                    <div>
                      <h2 className="text-2xl font-semibold">Partial Service Disruption</h2>
                      <p className="text-muted-foreground">Some services may be experiencing issues</p>
                    </div>
                  </>
                )}
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Last checked</p>
                <p className="font-semibold">Just now</p>
              </div>
            </div>
          </Card>

          {/* Service Status Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 glass-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {getStatusIcon(service.status)}
                          <span className={`text-sm capitalize ${getStatusColor(service.status)}`}>
                            {service.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Activity className="w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Uptime (30d)</p>
                      <p className="font-semibold">{service.uptime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="font-semibold">{service.responseTime}</p>
                    </div>
                  </div>
                  
                  {/* Uptime Bar */}
                  <div className="mt-4">
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-success rounded-full"
                        style={{ width: service.uptime }}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Recent Incidents */}
          <Card className="p-8 glass-card">
            <h2 className="text-2xl font-semibold mb-6">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {incident.status === "resolved" ? (
                        <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
                      )}
                      <div>
                        <h3 className="font-semibold">{incident.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{incident.description}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-muted-foreground">{incident.date}</p>
                      <p className="text-muted-foreground">Duration: {incident.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {incidents.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No recent incidents to report. All systems have been running smoothly.
              </p>
            )}
          </Card>

          {/* Subscribe to Updates */}
          <Card className="p-8 glass-card mt-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Subscribe to Status Updates</h3>
            <p className="text-muted-foreground mb-6">
              Get notified about scheduled maintenance and service disruptions
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="your@email.com" className="flex-1" />
              <Button variant="gradient">Subscribe</Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}