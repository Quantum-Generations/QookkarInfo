import { Home, Truck, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Homemade Kitchen Dishes",
      description: "Authentic homemade meals prepared by verified home cooks using traditional recipes and fresh ingredients.",
      features: [
        "Traditional family recipes",
        "Fresh, locally sourced ingredients",
        "Made-to-order freshness"
      ],
      color: "text-primary"
    },
    {
      icon: Truck,
      title: "Fast Delivery Network",
      description: "Reliable delivery service ensuring your food reaches you fresh, hot, and on time.",
      features: [
        "Real-time order tracking",
        "Temperature-controlled delivery",
        "Contactless delivery options"
      ],
      color: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience authentic homemade cooking with our reliable delivery network, 
            all crafted with love and delivered with care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className={`hover-lift fade-in stagger-${index + 1} shadow-lg`}
                data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-8">
                  <div className={`text-4xl ${service.color} mb-4`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
