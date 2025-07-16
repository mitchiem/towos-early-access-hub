import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Phone, TrendingUp, AlertTriangle } from "lucide-react";

export const MissedCallsCalculator = () => {
  const [missedCallsPerDay, setMissedCallsPerDay] = useState([5]);
  const [averageJobValue, setAverageJobValue] = useState([150]);

  const dailyLoss = missedCallsPerDay[0] * averageJobValue[0];
  const monthlyLoss = dailyLoss * 30;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <Card className="p-8 bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
          <AlertTriangle className="h-4 w-4" />
          Revenue Loss Calculator
        </div>
        <h3 className="text-2xl font-bold mb-2">How Much Are Missed Calls Costing You?</h3>
        <p className="text-muted-foreground">
          Calculate your monthly revenue loss from missed opportunities
        </p>
      </div>

      <div className="space-y-8">
        {/* Missed Calls Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Missed Calls Per Day
            </label>
            <span className="text-lg font-bold text-primary">{missedCallsPerDay[0]}</span>
          </div>
          <Slider
            value={missedCallsPerDay}
            onValueChange={setMissedCallsPerDay}
            max={20}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 call</span>
            <span>20+ calls</span>
          </div>
        </div>

        {/* Average Job Value Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Average Job Value
            </label>
            <span className="text-lg font-bold text-primary">${averageJobValue[0]}</span>
          </div>
          <Slider
            value={averageJobValue}
            onValueChange={setAverageJobValue}
            max={500}
            min={50}
            step={25}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$50</span>
            <span>$500+</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-destructive/5 to-destructive/10 rounded-lg p-6 space-y-4">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Monthly Revenue Loss</div>
            <div className="text-4xl font-bold text-destructive">${monthlyLoss.toLocaleString()}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-sm text-muted-foreground">Daily Loss</div>
              <div className="text-xl font-semibold">${dailyLoss.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Yearly Loss</div>
              <div className="text-xl font-semibold">${yearlyLoss.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            TowOS can help you recover this revenue by ensuring you never miss another call
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <TrendingUp className="mr-2 h-4 w-4" />
            See How TowOS Can Recover This Revenue
          </Button>
        </div>
      </div>
    </Card>
  );
};