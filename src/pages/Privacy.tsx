import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 20, 2024
            </p>
          </div>

          {/* Privacy Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 glass-card text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Your Data is Protected</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level encryption for all data
              </p>
            </Card>
            <Card className="p-6 glass-card text-center">
              <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Never Sold</h3>
              <p className="text-sm text-muted-foreground">
                We never sell your personal information
              </p>
            </Card>
            <Card className="p-6 glass-card text-center">
              <UserCheck className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">You're in Control</h3>
              <p className="text-sm text-muted-foreground">
                Delete your data anytime
              </p>
            </Card>
          </div>

          {/* Policy Content */}
          <Card className="p-8 glass-card">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Account information (name, email, company details)</li>
                  <li>Financial data you input for forecasting</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new features and services</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement and maintain reasonable security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>256-bit SSL encryption for all data transfers</li>
                  <li>Encrypted storage using AES-256 encryption</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>GDPR compliant data handling</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information. We may share your information 
                  only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>With your consent or at your direction</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect rights, property, or safety</li>
                  <li>With service providers who assist our operations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Export your data in a portable format</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to track activity on our service 
                  and hold certain information. You can instruct your browser to refuse all cookies 
                  or to indicate when a cookie is being sent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  Our service is not directed to individuals under 18. We do not knowingly collect 
                  personal information from children under 18.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <Card className="p-4 bg-secondary/30">
                  <p className="text-muted-foreground">
                    Email: privacy@cfohelper.com<br />
                    Address: 123 Financial District, San Francisco, CA 94111<br />
                    Phone: 1-800-CFO-HELP
                  </p>
                </Card>
              </section>
            </div>
          </Card>

          {/* Important Notice */}
          <Card className="p-6 glass-card mt-8 border-primary/20 bg-primary/5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Your Privacy Matters</h3>
                <p className="text-sm text-muted-foreground">
                  We are committed to protecting your privacy and ensuring your data is handled 
                  responsibly. If you have any concerns, please don't hesitate to contact our 
                  privacy team.
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