import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, User, Truck, Check } from "lucide-react";

export default function AppDownloads() {
  const apps = [
    {
      icon: ChefHat,
      title: "Chef App",
      description: "Manage your menu, track orders, and connect with customers. Everything you need to run your home kitchen business.",
      features: [
        "Order management dashboard",
        "Real-time earnings tracking",
        "Customer feedback system",
        "Menu customization tools"
      ],
      color: "bg-primary"
    },
    {
      icon: User,
      title: "Customer App",
      description: "Browse homemade dishes, place orders, and track delivery. Discover authentic flavors in your neighborhood.",
      features: [
        "Browse local home cooks",
        "Real-time order tracking",
        "Multiple payment options",
        "Rate and review system"
      ],
      color: "bg-accent"
    },
    {
      icon: Truck,
      title: "Delivery Partner App",
      description: "Join our delivery network and earn flexible income. Deliver fresh homemade food to happy customers.",
      features: [
        "Flexible working hours",
        "GPS navigation support",
        "Instant payment processing",
        "Performance analytics"
      ],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="apps" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="apps-title">
            Download Our Apps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Qookkar on the go with our mobile applications designed for Chefs, 
            Customers, and Delivery Partners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <Card 
                key={app.title}
                className={`text-center hover-lift fade-in stagger-${index + 1} shadow-xl`}
                data-testid={`app-${app.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 mx-auto mb-6 ${app.color} rounded-full flex items-center justify-center`}>
                    <Icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{app.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {app.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-secondary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-black text-white hover:bg-gray-800"
                      onClick={() => console.log(`Download ${app.title} for Android`)}
                      data-testid={`button-${app.title.toLowerCase().replace(/\s+/g, '-')}-android`}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Download for Android
                    </Button>
                    <Button
                      className="w-full bg-gray-900 text-white hover:bg-gray-700"
                      onClick={() => console.log(`Download ${app.title} for iOS`)}
                      data-testid={`button-${app.title.toLowerCase().replace(/\s+/g, '-')}-ios`}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      Download for iOS
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
