import { Button } from "@/components/ui/button";
import { InlineWaitlistForm } from "@/components/InlineWaitlistForm";
import { MissedCallsCalculator } from "@/components/MissedCallsCalculator";
import { ProblemCard } from "@/components/ProblemCard";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import CountdownClock from "@/components/CountdownClock";
import { Phone, DollarSign, HelpCircle, FileText, AlertTriangle, Truck, CheckCircle, Users, TrendingUp, Star, Monitor, MessageCircle, BarChart3, Calendar, Play, Zap, Timer, UserCheck, ArrowRight, X } from "lucide-react";

const Index = () => {
  const beforeAfterItems = [
    {
      before: {
        icon: Phone,
        title: "Missing High-Profit Cash Calls",
        description: "Phone rings while you're hooking up - customer hangs up and calls your competitor who answers immediately"
      },
      after: {
        icon: CheckCircle,
        title: "AI Dispatcher Captures Every Call, 24/7",
        description: "Never miss another call. AI answers instantly, captures customer info, and dispatches the job automatically"
      }
    },
    {
      before: {
        icon: DollarSign,
        title: "Losing Money to Low-Paying Motor Clubs",
        description: "Stuck with $65 AAA calls while competitors book $200+ cash calls directly from customers"
      },
      after: {
        icon: TrendingUp,
        title: "Book More High-Profit Cash Calls Directly",
        description: "Smart routing sends cash-paying customers directly to you, bypassing low-profit motor club dispatchers"
      }
    },
    {
      before: {
        icon: FileText,
        title: "Wasting Hours on Paperwork & Invoicing",
        description: "10-15 hours per week on manual job coordination, invoicing, and payment follow-ups instead of making money"
      },
      after: {
        icon: Zap,
        title: "Automate Dispatch, Invoicing & Payments in One Click",
        description: "Complete job workflow automation - from initial call to final payment collection, all handled automatically"
      }
    },
    {
      before: {
        icon: HelpCircle,
        title: "No Idea Where Your Drivers Are",
        description: "\"Did Jake finish the 5th Street job?\" Constant phone tag and manual check-ins waste time and create confusion"
      },
      after: {
        icon: Monitor,
        title: "See Your Entire Business in Real-Time on One Map",
        description: "Live GPS tracking, job status updates, and complete visibility into every driver and job in progress"
      }
    }
  ];

  const appScreenshots = [
    {
      icon: Monitor,
      title: "Dispatch Dashboard",
      description: "Real-time job management and driver tracking in one unified view"
    },
    {
      icon: MessageCircle,
      title: "Call Management",
      description: "Automated call handling and smart routing system"
    },
    {
      icon: Star,
      title: "Customer Portal",
      description: "Review requests and seamless customer communication tools"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Revenue tracking and performance metrics dashboard"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Never Miss Another Call",
      description: "Automated call handling and smart dispatch routing"
    },
    {
      icon: Users,
      title: "Virtual Dispatcher",
      description: "AI-powered dispatch for a fraction of the cost"
    },
    {
      icon: TrendingUp,
      title: "Complete Visibility",
      description: "Real-time tracking of all jobs and drivers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      {/* Header with TowOS Logo */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/towos-logo.png" 
                alt="TowOS Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-foreground">TowOS</span>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Star className="mr-2 h-4 w-4" />
              Join Founder's Club
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(/lovable-uploads/6a575055-428a-4e0b-837d-3984a0f879f2.png)` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <img 
                  src="/lovable-uploads/towos-logo.png" 
                  alt="TowOS" 
                  className="h-4 w-4"
                />
                Founder's Club • Limited Time • First 100 Operators Only
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Stop Missing High-Profit Cash Calls.<br />
                <span className="text-primary">Start Capturing Every Dollar.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                The Complete Towing Operating System that runs ALL parts of your business cohesively. One unified system for dispatching, drivers, customers, payments, and analytics.
              </p>

              <div className="mb-8">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-8 mb-6 max-w-2xl mx-auto shadow-lg">
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <img 
                      src="/lovable-uploads/towos-logo.png" 
                      alt="TowOS" 
                      className="h-4 w-4"
                    />
                    Founder's Club Lifetime Deal
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">$49<span className="text-lg">/month</span></div>
                    <div className="text-sm text-muted-foreground mb-4">For your first truck</div>
                    <div className="text-xl font-semibold text-foreground">
                      Lock in just <span className="text-primary font-bold">$15/month</span> for each additional truck
                    </div>
                    <div className="text-lg font-bold text-primary mt-2">FOREVER</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground line-through mb-1">Regular Price: $199/month + $49 per truck</div>
                    <div className="text-lg font-semibold text-destructive">Save $1,800+ per year</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-xl">
                  <Star className="mr-2 h-5 w-5" />
                  Lock In My Founder's Price
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  See Live Demo
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-8">
                No payment required • Get notified when we launch • Lock in lifetime pricing
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <Timer className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">100</div>
                  <div className="text-sm text-muted-foreground">Founder's Spots Left</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">$1,800</div>
                  <div className="text-sm text-muted-foreground">Yearly Savings</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">Aug 15</div>
                  <div className="text-sm text-muted-foreground">Launch Date</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">All</div>
                  <div className="text-sm text-muted-foreground">Operations Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-r from-destructive/5 to-destructive/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              See How Much Money You're Leaving on the Table
            </h2>
            <p className="text-xl text-muted-foreground">
              Conservative estimates based on industry data and time tracking studies
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <MissedCallsCalculator />
          </div>
        </div>
      </section>

      {/* Countdown Clock Section */}
      <CountdownClock />

      {/* Brand Trust Section */}
      <section className="py-16 bg-card/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/lovable-uploads/towos-logo.png" 
              alt="TowOS Logo" 
              className="h-12 w-auto"
            />
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">TowOS</div>
              <div className="text-sm text-muted-foreground">The Complete Towing Operating System</div>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Your Business Before TowOS vs. Your Business With TowOS
            </h2>
            <p className="text-xl text-muted-foreground">
              See the transformation from chaos to control, from lost revenue to maximized profit
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-12">
            {beforeAfterItems.map((item, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Before */}
                  <div className="bg-destructive/5 border-l-4 border-destructive rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                          <X className="h-6 w-6 text-destructive" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-destructive">BEFORE: {item.before.title}</h3>
                        <p className="text-muted-foreground">{item.before.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex justify-center">
                    <ArrowRight className="h-8 w-8 text-primary mx-auto" />
                  </div>

                  {/* After */}
                  <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <item.after.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">AFTER: {item.after.title}</h3>
                        <p className="text-muted-foreground">{item.after.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6">
              Don't Take Our Word For It. Hear From a Tow Boss Like You.
            </h2>
          </div>
          <VideoTestimonial />
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/towos-logo.png" 
                alt="TowOS" 
                className="h-8 w-auto"
              />
              <h2 className="text-4xl font-bold text-foreground">
                Complete Operating System
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every screen designed for cohesive towing operations - from first call to final payment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Dispatch Dashboard */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 w-64 h-[500px] bg-black border-8 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/df42e0dd-4325-47fb-be18-3aab35725117.png" 
                  alt="TowOS Dispatch Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dispatch Dashboard
              </h3>
              <p className="text-muted-foreground">
                Real-time job management with instant notifications for new tow requests
              </p>
            </div>

            {/* Driver Communication Hub */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 w-64 h-[500px] bg-black border-8 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/cea6183d-77d8-4cd1-a779-e5f0b5580d4e.png" 
                  alt="TowOS Driver Communication"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Driver Communication Hub
              </h3>
              <p className="text-muted-foreground">
                Seamless coordination between dispatchers and drivers with live job status updates
              </p>
            </div>

            {/* Invoice & Payment Tracking */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 w-64 h-[500px] bg-black border-8 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/fec39c6b-3b71-40cd-a650-f6387f747459.png" 
                  alt="TowOS Invoice & Payment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Invoice & Payment Tracking
              </h3>
              <p className="text-muted-foreground">
                Automated invoicing and payment collection with real-time financial insights
              </p>
            </div>

            {/* Smart Job Assignment */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 w-64 h-[500px] bg-black border-8 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/c7a63297-85f4-43c9-b228-011d842bf166.png" 
                  alt="TowOS Job Assignment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Smart Job Assignment
              </h3>
              <p className="text-muted-foreground">
                Intelligent driver assignment with customer notes and location tracking
              </p>
            </div>

            {/* Performance Analytics */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 w-64 h-[500px] bg-black border-8 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/527ef173-0869-4708-aaaf-790931ce672d.png" 
                  alt="TowOS Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Performance Analytics
              </h3>
              <p className="text-muted-foreground">
                Track revenue, completed jobs, and staff performance with comprehensive reporting
              </p>
            </div>

            {/* Digital Documentation System */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 w-64 h-[500px] bg-black border-8 border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/720636d8-797c-453d-a474-58d08a99966d.png" 
                  alt="TowOS Documentation System"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Digital Documentation System
              </h3>
              <p className="text-muted-foreground">
                Required photo capture and vehicle documentation to eliminate liability issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Preview Section */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              One System. Complete Operations.
            </h2>
            <p className="text-xl text-muted-foreground">
              Stop switching between apps. TowOS runs your entire towing operation cohesively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="max-w-lg mx-auto">
              <div className="bg-card/80 backdrop-blur-sm border-border/50 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <img 
                      src="/lovable-uploads/towos-logo.png" 
                      alt="TowOS" 
                      className="h-4 w-4"
                    />
                    Get on the Founder's List. Launching August 15th.
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lock In Your Founder's Price</h3>
                  <p className="text-muted-foreground">
                    Be the first to access TowOS and save $1,800+ per year
                  </p>
                </div>
                
                <div className="w-full">
                  <iframe
                    src="https://n8n.annatis.com/form/roadsideroi-waitlist"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    className="rounded-lg"
                    title="Join the TowOS Founder's List Form"
                    sandbox="allow-forms allow-scripts allow-same-origin"
                  />
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* James Clear Quote Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 text-foreground leading-relaxed">
              "You do not rise to the level of your goals. You fall to the level of your systems."
            </blockquote>
            <cite className="text-lg text-muted-foreground mb-8 block">— James Clear, Atomic Habits</cite>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your towing business needs better systems, not just better goals. 
              TowOS is the operating system that elevates every part of your operation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/lovable-uploads/towos-logo.png" 
              alt="TowOS Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold">TowOS</span>
          </div>
          <p className="text-muted-foreground mb-4">
            The Complete Towing Operating System
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 TowOS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
