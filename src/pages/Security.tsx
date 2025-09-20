import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Key, FileCheck, AlertTriangle, CheckCircle, Server, Eye } from "lucide-react";

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your data security is our top priority. Learn about our comprehensive security measures and compliance standards.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 glass-card">
              <Lock className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">256-bit Encryption</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level encryption for all data in transit and at rest
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <Shield className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">SOC 2 Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Independently audited for security, availability, and confidentiality
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <Key className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Multi-Factor Auth</h3>
              <p className="text-sm text-muted-foreground">
                Additional security layer with 2FA and SSO support
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <FileCheck className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">GDPR Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Full compliance with global privacy regulations
              </p>
            </Card>
          </div>

          {/* Infrastructure Security */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              Infrastructure Security
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Data Centers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>AWS infrastructure with 99.99% uptime SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Geographically distributed for redundancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>24/7 physical security and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Automated backup and disaster recovery</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Network Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>DDoS protection and mitigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Web Application Firewall (WAF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Regular penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Intrusion detection and prevention</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Data Protection */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              Data Protection
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Encryption Standards</h3>
                <p className="text-muted-foreground mb-3">
                  We use industry-leading encryption standards to protect your data at every stage:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="font-medium mb-1">In Transit</p>
                    <p className="text-sm text-muted-foreground">TLS 1.3 encryption</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="font-medium mb-1">At Rest</p>
                    <p className="text-sm text-muted-foreground">AES-256 encryption</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="font-medium mb-1">Backups</p>
                    <p className="text-sm text-muted-foreground">Encrypted and isolated</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Access Control</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Principle of least privilege</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Regular access reviews and audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    <span>Automated session management</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Compliance & Certifications */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">SOC 2 Type II</h3>
                <p className="text-sm text-muted-foreground">Annual audit completed</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">GDPR</h3>
                <p className="text-sm text-muted-foreground">EU data protection</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">ISO 27001</h3>
                <p className="text-sm text-muted-foreground">Information security</p>
              </div>
            </div>
          </Card>

          {/* Security Practices */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Security Practices</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Regular Security Audits</h3>
                  <p className="text-sm text-muted-foreground">
                    Third-party penetration testing and vulnerability assessments conducted quarterly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Employee Training</h3>
                  <p className="text-sm text-muted-foreground">
                    All employees undergo security awareness training and background checks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Incident Response</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 security monitoring with rapid incident response procedures
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Continuous Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular updates and patches to maintain the highest security standards
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Report Security Issue */}
          <Card className="p-8 glass-card border-warning/20 bg-warning/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-warning mt-0.5" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Report a Security Issue</h3>
                <p className="text-muted-foreground mb-4">
                  If you discover a security vulnerability, please report it to our security team immediately. 
                  We appreciate responsible disclosure and will acknowledge your contribution.
                </p>
                <p className="font-medium">
                  Email: <a href="mailto:security@cfohelper.com" className="text-primary hover:underline">
                    security@cfohelper.com
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}