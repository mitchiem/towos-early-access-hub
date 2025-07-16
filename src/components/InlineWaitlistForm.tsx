import { Card } from "@/components/ui/card";

export const InlineWaitlistForm = () => {
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
      
      <div className="w-full">
        <iframe
          src="https://n8n.annatis.com/form/roadsideroi-waitlist"
          width="100%"
          height="400"
          frameBorder="0"
          className="rounded-lg"
          title="Join the TowOS Waitlist Form"
          sandbox="allow-forms allow-scripts allow-same-origin"
        />
      </div>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </Card>
  );
};