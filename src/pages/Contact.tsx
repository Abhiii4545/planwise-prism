import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team for support, partnerships, or general inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 glass-card">
                <Mail className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">For general inquiries</p>
                <a href="mailto:hello@cfohelper.com" className="text-primary hover:underline">
                  hello@cfohelper.com
                </a>
              </Card>

              <Card className="p-6 glass-card">
                <Headphones className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-muted-foreground mb-2">24/7 customer support</p>
                <a href="mailto:support@cfohelper.com" className="text-primary hover:underline">
                  support@cfohelper.com
                </a>
              </Card>

              <Card className="p-6 glass-card">
                <MessageSquare className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-2">Available Mon-Fri</p>
                <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM EST</p>
              </Card>

              <Card className="p-6 glass-card">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-muted-foreground">
                  123 Financial District<br />
                  San Francisco, CA 94111<br />
                  United States
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8 glass-card">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="p-8 glass-card mt-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">How quickly can I get started?</h3>
                <p className="text-muted-foreground">
                  You can start using CFO Helper immediately after signing up. No credit card required for the free tier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer enterprise plans?</h3>
                <p className="text-muted-foreground">
                  Yes! Contact our sales team for custom enterprise solutions tailored to your organization's needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my financial data secure?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We use bank-level encryption and follow SOC 2 compliance standards to protect your data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I integrate with other tools?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer API access and integrations with popular accounting and business tools.
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