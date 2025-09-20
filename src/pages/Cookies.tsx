import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cookie, Shield, Settings, Info, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function Cookies() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  const handleSavePreferences = () => {
    // Save cookie preferences logic would go here
    console.log("Saving preferences:", preferences);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 20, 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="p-8 glass-card mb-12">
            <div className="flex items-start gap-3">
              <Cookie className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-3">What Are Cookies?</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our service.
                </p>
                <p className="text-muted-foreground">
                  This policy explains what cookies we use, why we use them, and how you can manage your 
                  cookie preferences.
                </p>
              </div>
            </div>
          </Card>

          {/* Cookie Types */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Necessary Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Essential for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">Always Active</span>
                </div>
                <ul className="ml-8 text-sm text-muted-foreground space-y-1">
                  <li>• Authentication and security</li>
                  <li>• Session management</li>
                  <li>• Load balancing</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Functional Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Enable enhanced functionality and personalization.
                      </p>
                    </div>
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                      className="rounded"
                    />
                  </label>
                </div>
                <ul className="ml-8 text-sm text-muted-foreground space-y-1">
                  <li>• Language preferences</li>
                  <li>• Region settings</li>
                  <li>• User interface customization</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Analytics Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="rounded"
                    />
                  </label>
                </div>
                <ul className="ml-8 text-sm text-muted-foreground space-y-1">
                  <li>• Page visit tracking</li>
                  <li>• Feature usage analytics</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <Cookie className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Marketing Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Used to track visitors across websites for marketing purposes.
                      </p>
                    </div>
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="rounded"
                    />
                  </label>
                </div>
                <ul className="ml-8 text-sm text-muted-foreground space-y-1">
                  <li>• Advertising effectiveness</li>
                  <li>• Retargeting campaigns</li>
                  <li>• Social media integration</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="gradient" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
              <Button variant="outline" onClick={() => setPreferences({
                necessary: true,
                functional: false,
                analytics: false,
                marketing: false,
              })}>
                Reject All Optional
              </Button>
              <Button variant="ghost" onClick={() => setPreferences({
                necessary: true,
                functional: true,
                analytics: true,
                marketing: true,
              })}>
                Accept All
              </Button>
            </div>
          </Card>

          {/* Cookie Details */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">Specific Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-4">Cookie Name</th>
                    <th className="text-left py-2 px-4">Type</th>
                    <th className="text-left py-2 px-4">Duration</th>
                    <th className="text-left py-2 px-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">session_id</td>
                    <td className="py-2 px-4">Necessary</td>
                    <td className="py-2 px-4">Session</td>
                    <td className="py-2 px-4">Maintains user session</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">auth_token</td>
                    <td className="py-2 px-4">Necessary</td>
                    <td className="py-2 px-4">7 days</td>
                    <td className="py-2 px-4">Authentication</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">user_prefs</td>
                    <td className="py-2 px-4">Functional</td>
                    <td className="py-2 px-4">1 year</td>
                    <td className="py-2 px-4">User preferences</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">_ga</td>
                    <td className="py-2 px-4">Analytics</td>
                    <td className="py-2 px-4">2 years</td>
                    <td className="py-2 px-4">Google Analytics</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4">_fbp</td>
                    <td className="py-2 px-4">Marketing</td>
                    <td className="py-2 px-4">3 months</td>
                    <td className="py-2 px-4">Facebook Pixel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Managing Cookies */}
          <Card className="p-8 glass-card mb-12">
            <h2 className="text-2xl font-semibold mb-6">How to Manage Cookies</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                You can control and manage cookies in various ways. Please note that removing or blocking 
                cookies may impact your user experience and some functionality may no longer be available.
              </p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Browser Settings</h3>
                <p>
                  Most browsers allow you to control cookies through their settings. Here's how to manage 
                  cookies in popular browsers:
                </p>
                <ul className="mt-3 space-y-1 ml-4">
                  <li>• Chrome: Settings → Privacy and security → Cookies</li>
                  <li>• Firefox: Settings → Privacy & Security → Cookies</li>
                  <li>• Safari: Preferences → Privacy → Manage Website Data</li>
                  <li>• Edge: Settings → Privacy, search, and services → Cookies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookie Management Tools</h3>
                <p>
                  You can also use our cookie preference center (above) to manage your cookie settings 
                  for our website specifically.
                </p>
              </div>
            </div>
          </Card>

          {/* Updates & Contact */}
          <Card className="p-8 glass-card">
            <h2 className="text-2xl font-semibold mb-6">Updates to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or 
              for operational, legal, or regulatory reasons. We will notify you of any material changes 
              by posting the new policy on this page.
            </p>
            
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <Card className="p-4 bg-secondary/30">
              <p className="text-muted-foreground">
                Email: privacy@cfohelper.com<br />
                Address: 123 Financial District, San Francisco, CA 94111
              </p>
            </Card>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}