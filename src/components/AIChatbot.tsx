import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface AIChatbotProps {
  metrics?: {
    monthlyRevenue: number;
    monthlyExpenses: number;
    netIncome: number;
    runway: number;
    teamSize: number;
    marketingSpend: number;
    growthRate: number;
  };
  formatCurrency: (amount: number) => string;
}

export function AIChatbot({ metrics, formatCurrency }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your CFO AI assistant. I can help you analyze your financial metrics, suggest optimizations, and answer questions about your business finances. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (!metrics) {
      return "Please adjust the financial parameters first so I can provide accurate insights.";
    }

    // Financial health check
    if (lowerMessage.includes("health") || lowerMessage.includes("status") || lowerMessage.includes("how are we doing")) {
      const healthStatus = metrics.netIncome > 0 ? "positive" : "concerning";
      const runwayStatus = metrics.runway > 12 ? "healthy" : "needs attention";
      
      return `Your financial health is ${healthStatus}. You have a ${runwayStatus} runway of ${metrics.runway} months. ${
        metrics.netIncome > 0 
          ? `You're generating ${formatCurrency(metrics.netIncome)} in net income monthly.` 
          : `You're burning ${formatCurrency(Math.abs(metrics.netIncome))} monthly.`
      } ${metrics.runway < 12 ? "I recommend focusing on either reducing expenses or increasing revenue to extend your runway." : "Keep maintaining this healthy balance!"}`;
    }

    // Marketing advice
    if (lowerMessage.includes("marketing") || lowerMessage.includes("spend") || lowerMessage.includes("advertising")) {
      const marketingEfficiency = (metrics.monthlyRevenue / (metrics.marketingSpend * 1000)) * 100;
      
      return `Your current marketing spend is ${formatCurrency(metrics.marketingSpend * 1000)} generating ${formatCurrency(metrics.monthlyRevenue)} in revenue (${marketingEfficiency.toFixed(0)}% ROI). ${
        marketingEfficiency > 300 
          ? "Your marketing efficiency is excellent! Consider scaling up gradually." 
          : marketingEfficiency > 150 
          ? "Your marketing is performing well. Monitor CAC closely as you scale." 
          : "Your marketing ROI could be improved. Focus on optimizing campaigns before increasing spend."
      }`;
    }

    // Team/hiring advice
    if (lowerMessage.includes("team") || lowerMessage.includes("hiring") || lowerMessage.includes("staff")) {
      const revenuePerEmployee = metrics.monthlyRevenue / metrics.teamSize;
      
      return `You have ${metrics.teamSize} team members generating ${formatCurrency(revenuePerEmployee)} per employee. ${
        revenuePerEmployee > 200000 
          ? "Your team productivity is excellent! You can consider strategic hires." 
          : revenuePerEmployee > 100000 
          ? "Team efficiency is good. Focus on high-impact roles for new hires." 
          : "Consider improving team productivity before expanding headcount."
      }`;
    }

    // Runway advice
    if (lowerMessage.includes("runway") || lowerMessage.includes("cash") || lowerMessage.includes("burn")) {
      return `Your current runway is ${metrics.runway === Infinity ? "infinite (profitable!)" : `${metrics.runway} months`}. ${
        metrics.runway < 6 
          ? "⚠️ Critical: You need to either raise funds immediately or drastically cut costs." 
          : metrics.runway < 12 
          ? "Consider fundraising soon or focus on path to profitability." 
          : metrics.runway < 18 
          ? "You have comfortable runway. Focus on growth while monitoring burn rate." 
          : "Excellent runway position! You can focus on strategic growth initiatives."
      }`;
    }

    // Growth advice
    if (lowerMessage.includes("growth") || lowerMessage.includes("scale") || lowerMessage.includes("expand")) {
      return `Your current growth rate is ${metrics.growthRate}%. ${
        metrics.growthRate > 20 
          ? "Excellent growth! Ensure you maintain unit economics while scaling." 
          : metrics.growthRate > 10 
          ? "Solid growth. Consider testing new acquisition channels to accelerate." 
          : "Growth could be improved. Focus on product-market fit and customer retention."
      } With your current metrics, I'd recommend ${
        metrics.runway > 12 && metrics.netIncome > 0 
          ? "investing more in growth initiatives" 
          : "focusing on sustainable growth while improving efficiency"
      }.`;
    }

    // Optimization suggestions
    if (lowerMessage.includes("optimize") || lowerMessage.includes("improve") || lowerMessage.includes("suggestions")) {
      const suggestions = [];
      
      if (metrics.marketingSpend > 100) {
        suggestions.push("reduce marketing spend by 20%");
      }
      if (metrics.teamSize > 40 && metrics.runway < 12) {
        suggestions.push("implement a hiring freeze");
      }
      if (metrics.growthRate < 15) {
        suggestions.push("focus on growth experiments");
      }
      if (metrics.netIncome < 0 && metrics.runway < 12) {
        suggestions.push("increase pricing by 10-15%");
      }
      
      return suggestions.length > 0 
        ? `Here are my optimization recommendations: ${suggestions.join(", ")}. These changes could extend your runway by ${Math.floor(suggestions.length * 2)} months.`
        : "Your metrics are well-balanced! Consider A/B testing pricing or exploring new revenue streams for incremental improvements.";
    }

    // Default response for general questions
    return "I can help you analyze your runway, marketing efficiency, team scaling, growth strategies, and financial optimization. What specific aspect would you like to explore?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response with typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-full glass-card flex flex-col">
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">CFO AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Always here to help with financial insights</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                }`}
              >
                {message.sender === "user" ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="bg-secondary/50 p-3 rounded-lg">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about your finances..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            variant="gradient"
            disabled={!input.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}