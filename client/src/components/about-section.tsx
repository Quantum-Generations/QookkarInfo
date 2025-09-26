import { Heart, Eye, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const qualityStandards = [
    "Verified cook profiles",
    "Kitchen hygiene inspections",
    "Fresh ingredient sourcing",
    "Customer feedback monitoring"
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse team collaborating in a modern office environment" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="about-image"
            />
          </div>
          
          <div className="fade-in stagger-2">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="about-title">
              About Qookkar
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded with a passion for authentic homemade cooking, Qookkar bridges the gap between 
              talented home cooks and food enthusiasts seeking genuine, traditional flavors.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that the best meals are made with love, care, and traditional techniques 
              passed down through generations. Our platform empowers home cooks to share their culinary 
              heritage while providing customers with access to authentic, homemade dishes that you 
              simply can't find in restaurants.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Heart className="text-primary mr-3 h-5 w-5" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To preserve and celebrate traditional home cooking by connecting passionate cooks 
                    with appreciative food lovers in their community.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Eye className="text-accent mr-3 h-5 w-5" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To become the world's most trusted platform for authentic homemade food, fostering 
                    community connections through shared meals.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                    Quality Standards
                  </h3>
                  <ul className="space-y-2">
                    {qualityStandards.map((standard, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        {standard}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
