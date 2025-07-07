import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export const VideoTestimonial = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          See Real Results from Towing Operators
        </h2>
        <p className="text-xl text-muted-foreground">
          Watch how other towing companies are transforming their operations and increasing their revenue with modern dispatch solutions.
        </p>
      </div>
      
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/30">
        <div className="relative aspect-video">
          <iframe
            src="https://www.youtube.com/embed/cjFaRtjWcd8"
            title="TowOS Beta Testing Testimonial"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Beta Testing Results</h3>
          <p className="text-muted-foreground">
            Real feedback from towing operators who tested TowOS during our beta phase.
          </p>
        </div>
      </Card>
    </div>
  );
};