import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ProblemCard } from "@/components/ProblemCard";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { Phone, DollarSign, HelpCircle, FileText, AlertTriangle, Truck, CheckCircle, Users, TrendingUp, Star, Monitor, MessageCircle, BarChart3, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-tow-truck.jpg";

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
      title: "Vehicle Documentation Issues",
      description: "Missing photos, incomplete paperwork, liability disputes. Poor documentation leads to insurance claims and legal headaches.",
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
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Truck className="h-4 w-4" />
                The Complete Towing Operating System
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Stop Losing Money on{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Missed Calls
                </span>{" "}
                & Manual Dispatch
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                The Complete Towing Operating System That Solves Your Biggest Problems
              </p>
              
              <div className="max-w-lg mx-auto">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              See TowOS in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a preview of the complete towing operations platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {appScreenshots.map((screenshot, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <screenshot.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                      <div className="text-sm text-muted-foreground px-4">
                        Screenshot Preview Coming Soon
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                    <p className="text-muted-foreground">{screenshot.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
              <WaitlistForm />
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
