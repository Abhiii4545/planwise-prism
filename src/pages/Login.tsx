import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TrendingUp, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set signed in state
    localStorage.setItem("isSignedIn", "true");
    toast({
      title: "Welcome back!",
      description: "Redirecting to dashboard...",
    });
    setTimeout(() => navigate("/dashboard"), 1000);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center gradient-subtle p-4">
      <Card className="w-full max-w-md p-8 glass-card">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-muted-foreground text-center mb-8">Sign in to access your dashboard</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input 
                type="email" 
                placeholder="you@company.com" 
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          
          <Button type="submit" variant="gradient" className="w-full">
            Sign In
          </Button>
        </form>
        
        <p className="text-center mt-6 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/dashboard" className="text-primary hover:underline">
            Start free trial
          </Link>
        </p>
      </Card>
    </div>
  );
}