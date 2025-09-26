import { Button } from "@/components/ui/button";
import { UserPlus, Smartphone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Connecting
              <span className="text-accent"> Homemade</span>
              <br />Excellence
            </h1>
            <p className="text-xl text-white/90 mt-6 leading-relaxed">
              Qookkar bridges passionate home cooks with food lovers, delivering authentic 
              homemade dishes and quality ready-made items right to your doorstep.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("register")}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 hover-lift"
                data-testid="button-join-cook"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Join as Cook
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("apps")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
                data-testid="button-download-apps"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download Apps
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white" data-testid="stat-cooks">1000+</div>
                <div className="text-white/80 text-sm">Active Cooks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white" data-testid="stat-customers">50k+</div>
                <div className="text-white/80 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white" data-testid="stat-orders">100k+</div>
                <div className="text-white/80 text-sm">Orders Delivered</div>
              </div>
            </div>
          </div>
          <div className="fade-in stagger-2">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional home kitchen with fresh ingredients and cooking preparation" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
