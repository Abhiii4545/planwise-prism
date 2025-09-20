import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ScrollText, CheckCircle, AlertCircle, Scale } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Effective Date: January 20, 2024
            </p>
          </div>

          {/* Key Points */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              Key Points
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Free tier available with no credit card required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Cancel your subscription anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">Your data belongs to you - export or delete anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">99.9% uptime SLA for paid plans</span>
              </li>
            </ul>
          </Card>

          {/* Terms Content */}
          <Card className="p-8 glass-card">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using CFO Helper ("the Service"), you agree to be bound by these 
                  Terms of Service ("Terms"). If you disagree with any part of these terms, you may 
                  not access the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  CFO Helper provides financial forecasting, budgeting, and analytical tools for 
                  businesses. The Service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Financial planning and forecasting tools</li>
                  <li>Real-time financial analytics and reporting</li>
                  <li>AI-powered insights and recommendations</li>
                  <li>Data export and integration capabilities</li>
                  <li>Team collaboration features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  When you create an account with us, you must provide accurate, complete, and 
                  current information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information remains accurate</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Transmit malicious code or viruses</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Engage in any fraudulent activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  For paid subscriptions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Billing occurs in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>You authorize us to charge your payment method</li>
                  <li>Price changes will be notified 30 days in advance</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  The Service and its original content, features, and functionality are owned by 
                  CFO Helper and are protected by international copyright, trademark, patent, 
                  trade secret, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground">
                  You retain all rights to your data. By using our Service, you grant us a license 
                  to use your data solely to provide the Service to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Data and Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  Your use of our Service is also governed by our Privacy Policy. By using the 
                  Service, you consent to our collection and use of information as detailed in 
                  the Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Service Level Agreement</h2>
                <p className="text-muted-foreground mb-4">
                  For paid plans, we guarantee:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>99.9% uptime availability</li>
                  <li>Data backup and recovery procedures</li>
                  <li>Security updates and patches</li>
                  <li>Technical support response times</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, CFO Helper shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages resulting from 
                  your use or inability to use the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account immediately, without prior notice or 
                  liability, for any reason, including breach of these Terms. Upon termination, 
                  your right to use the Service will cease immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these Terms at any time. We will provide notice 
                  of material changes at least 30 days before they take effect. Continued use of 
                  the Service after changes constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms, please contact us at:
                </p>
                <Card className="p-4 bg-secondary/30">
                  <p className="text-muted-foreground">
                    Email: legal@cfohelper.com<br />
                    Address: 123 Financial District, San Francisco, CA 94111<br />
                    Phone: 1-800-CFO-HELP
                  </p>
                </Card>
              </section>
            </div>
          </Card>

          {/* Agreement Notice */}
          <Card className="p-6 glass-card mt-8 border-primary/20 bg-primary/5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">By using CFO Helper</h3>
                <p className="text-sm text-muted-foreground">
                  You acknowledge that you have read, understood, and agree to be bound by these 
                  Terms of Service. If you are using the Service on behalf of an organization, 
                  you agree to these Terms on behalf of that organization.
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