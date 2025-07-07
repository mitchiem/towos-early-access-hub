import { useState, useEffect } from "react";

const CountdownClock = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-15T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-12 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
          Official Launch Friday August 15th 2025
        </h2>
        <p className="text-muted-foreground mb-8">Get ready for the complete towing operating system</p>
        
        <div className="flex justify-center items-center gap-4 md:gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Days
              </div>
            </div>
          </div>
          
          <div className="text-2xl text-primary font-bold">:</div>
          
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Hours
              </div>
            </div>
          </div>
          
          <div className="text-2xl text-primary font-bold">:</div>
          
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Minutes
              </div>
            </div>
          </div>
          
          <div className="text-2xl text-primary font-bold">:</div>
          
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownClock;