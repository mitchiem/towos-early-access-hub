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
      cost: "3-5 calls daily",
      costLabel: "Missed Revenue Opportunities:"
    },
    {
      icon: DollarSign,
      title: "Can't Afford Full-Time Dispatchers",
      description: "Hiring dispatcher costs $45,000-60,000 yearly plus benefits (BLS data). Small operators can't justify this expense but desperately need the help.",
      cost: "$45,000 - $60,000",
      costLabel: "Annual Cost (BLS):"
    },
    {
      icon: FileText,
      title: "Manual Job Assignments",
      description: "Calling each driver individually, keeping track on paper, forgetting assignments. Conservative estimate: 5-10 minutes per job coordination.",
      cost: "10-15 hours per week",
      costLabel: "Time Lost:"
    },
    {
      icon: AlertTriangle,
      title: "Administrative Chaos & No Driver Accountability",
      description: "\"Did Jake finish the 5th Street job?\" Time spent on manual invoicing, payment follow-ups, and scheduling coordination adds up quickly.",
      cost: "2-3 hours daily",
      costLabel: "Administrative Time:"
    },
    {
      icon: Star,
      title: "Missing Customer Reviews",
      description: "Happy customers leave but never share their experience. Studies show 20-30% revenue impact from missing reviews and referrals.",
      cost: "20-30% potential growth",
      costLabel: "Missed Opportunity:"
    },
    {
      icon: FileText,
      title: "Damage Mitigation/Reduce Fake Claims From Dishonest Customers",
      description: "Missing photos, incomplete paperwork, liability disputes. Insurance industry data shows poor documentation significantly increases claim costs.",
      cost: "$500 - $3,000 per claim",
      costLabel: "Claim Cost Range:"
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
                Early Access • Pre-Launch Pricing
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Complete Towing Operating System
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                Run ALL parts of your towing company cohesively. One unified system for dispatching, drivers, customers, payments, and analytics.
              </p>

              <div className="mb-8">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    Early Launch Lifetime Pricing
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-primary">$49/month</span>
                    <span className="text-lg text-muted-foreground line-through">$199/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lock in this price forever • Limited time • First 100 users only
                  </p>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Stop juggling multiple systems. TowOS integrates everything your towing business needs into one powerful operating system.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Join Early Access Waitlist
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Monitor className="mr-2 h-5 w-5" />
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
                  <div className="text-2xl font-bold text-primary">One</div>
                  <div className="text-sm text-muted-foreground">Unified System</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">$49</div>
                  <div className="text-sm text-muted-foreground">Lifetime Pricing</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">100</div>
                  <div className="text-sm text-muted-foreground">Early Access Spots</div>
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
              How Much Time Are These Problems Actually Costing You?
            </h2>
            <p className="text-xl text-muted-foreground">
              Conservative estimates based on industry data and time tracking studies
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Sources: Bureau of Labor Statistics, Industry surveys, Insurance claim data
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
              See the Complete Operating System
            </h2>
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
              <InlineWaitlistForm />
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
