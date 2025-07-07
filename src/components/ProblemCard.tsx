import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  cost: string;
  costLabel: string;
}

export const ProblemCard = ({ icon: Icon, title, description, cost, costLabel }: ProblemCardProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
            <div className="text-destructive font-semibold text-sm">{costLabel}</div>
            <div className="text-destructive font-bold text-lg">{cost}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};