import { Button } from "@/components/ui/button";
import { InlineWaitlistForm } from "@/components/InlineWaitlistForm";
import { MissedCallsCalculator } from "@/components/MissedCallsCalculator";
import { ProblemCard } from "@/components/ProblemCard";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import CountdownClock from "@/components/CountdownClock";
import { Phone, DollarSign, HelpCircle, FileText, AlertTriangle, Truck, CheckCircle, Users, TrendingUp, Star, Monitor, MessageCircle, BarChart3, Calendar, Play, Zap, Timer, UserCheck } from "lucide-react";

const Index = () => {
  const problems = [
    {
      icon: Phone,
      title: "Missed Calls While Towing",
      description: "You're out on a job, phone rings, customer needs help... but you can't answer safely. They call your competitor next.",
      cost: "$3,000+ per month",
      costLabel: "Average Lost Revenue:"
    },
    {
      icon: DollarSign,
      title: "Can't Afford Full-Time Dispatchers",
      description: "Hiring dispatcher costs $60,000+ yearly plus benefits. Small operators can't justify this expense but desperately need the help.",
      cost: "$60,000 - $80,000",
      costLabel: "Annual Cost:"
    },
    {
      icon: FileText,
      title: "Manual Job Assignments",
      description: "Calling each driver individually, keeping track on paper, forgetting assignments. It's 2025 - there's got to be a better way.",
      cost: "15+ hours per week",
      costLabel: "Time Wasted:"
    },
    {
      icon: AlertTriangle,
      title: "Administrative Chaos & No Driver Accountability",
      description: "\"Did Jake finish the 5th Street job?\" Invoicing, payment collection, scheduling - you're drowning in paperwork with zero tracking system.",
      cost: "$2,500+ per month",
      costLabel: "Lost Revenue & Opportunity Cost:"
    },
    {
      icon: Star,
      title: "Missing Customer Reviews",
      description: "Happy customers leave but never share their experience. No review system means losing potential business from word-of-mouth referrals.",
      cost: "$2,500+ per month",
      costLabel: "Lost Business:"
    },
    {
      icon: FileText,
      title: "Damage Mitigation/Reduce Fake Claims From Dishonest Customers",
      description: "Missing photos, incomplete paperwork, liability disputes. Poor documentation leads to insurance claims and legal headaches from dishonest customers.",
      cost: "$1,800+ per incident",
      costLabel: "Average Claim Cost:"
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
                <Truck className="h-4 w-4" />
                The Complete Towing Operating System
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Stop Guessing, Start Knowing
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Real-time insights into your towing operations. Track your trucks, manage dispatches, and monitor performance from a single, intuitive dashboard.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-destructive">
                  Tired of Towing Business Headaches?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Lost calls, slow response times, and frustrated customers? TowOS is the AI-powered solution designed to streamline your operations and boost your bottom line.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Monitor className="mr-2 h-5 w-5" />
                  Try Live Demo
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-8">
                No account required to get started. Cancel anytime.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <Timer className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">Instant</div>
                  <div className="text-sm text-muted-foreground">Response Times</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-muted-foreground">Increase in Revenue</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">Zero</div>
                  <div className="text-sm text-muted-foreground">Missed Calls</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">Happy</div>
                  <div className="text-sm text-muted-foreground">Customers</div>
                </div>
              </div>
            </div>

            {/* Calculator and Waitlist Form Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <MissedCallsCalculator />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <InlineWaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Clock Section */}
      <CountdownClock />

      {/* Problems Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Are These Problems Costing You Thousands Every Month?
            </h2>
            <p className="text-xl text-muted-foreground">
              Every missed call and manual process is money out of your pocket
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProblemCard {...problem} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <VideoTestimonial />
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              See TowOS in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real mobile app screenshots showing the complete towing management platform
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
              How TowOS Transforms Your Business
            </h2>
            <p className="text-xl text-muted-foreground">
              Built specifically for towing operators who want to grow without the headaches
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
              <InlineWaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Warren Buffett Quote Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 text-foreground leading-relaxed">
              "There seems to be no correlation between the difficulty of an idea and its success."
            </blockquote>
            <cite className="text-lg text-muted-foreground mb-8 block">— Warren Buffett</cite>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforming your tow operations digitally makes sense, and there are no extra points for doing it harder. 
              TowOS simplifies what matters most: growing your business profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Truck className="h-6 w-6 text-primary" />
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
