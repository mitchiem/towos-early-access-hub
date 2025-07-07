import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when TowOS launches with your 40% early bird discount.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span className="animate-pulse-glow">🔥</span>
          Limited Time: 40% Early Bird Discount
        </div>
        <h3 className="text-2xl font-bold mb-2">Join the TowOS Waitlist</h3>
        <p className="text-muted-foreground">
          Be the first to access TowOS and save 40% on your first year
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your business email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 text-lg"
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 animate-pulse-glow"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Joining Waitlist..."
          ) : (
            <>
              Get Early Access - Save 40%
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </Card>
  );
};