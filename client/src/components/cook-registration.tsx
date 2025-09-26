import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Star, DollarSign, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertCookRegistrationSchema } from "@shared/schema";
import { z } from "zod";

const cookRegistrationFormSchema = insertCookRegistrationSchema.extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  specialty: z.string().min(1, "Please select your specialty"),
  experience: z.string().optional(),
  agreesToTerms: z.boolean().refine(val => val === true, "You must agree to terms and conditions")
});

type CookRegistrationForm = z.infer<typeof cookRegistrationFormSchema>;

export default function CookRegistration() {
  const [formData, setFormData] = useState<Partial<CookRegistrationForm>>({
    agreesToTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: CookRegistrationForm) => {
      const response = await apiRequest("POST", "/api/cook-registration", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Registration Successful!",
        description: data.message,
        variant: "default",
      });
      setFormData({ agreesToTerms: false });
      setErrors({});
    },
    onError: (error: any) => {
      const message = error.message || "Failed to submit registration";
      toast({
        title: "Registration Failed",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof CookRegistrationForm, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = cookRegistrationFormSchema.parse(formData);
      mutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const features = [
    {
      icon: UserCheck,
      title: "Profile Verification",
      description: "Complete identity and kitchen verification for customer trust and safety.",
      color: "bg-primary"
    },
    {
      icon: Star,
      title: "Skill Assessment",
      description: "Showcase your specialties and get rated by customers to build your reputation.",
      color: "bg-accent"
    },
    {
      icon: DollarSign,
      title: "Flexible Earnings",
      description: "Set your own prices and schedule. Earn 80% of every order value.",
      color: "bg-secondary"
    }
  ];

  const specialties = [
    { value: "indian", label: "Indian Cuisine" },
    { value: "continental", label: "Continental" },
    { value: "chinese", label: "Chinese" },
    { value: "italian", label: "Italian" },
    { value: "desserts", label: "Desserts & Sweets" },
    { value: "healthy", label: "Healthy & Diet Food" },
    { value: "regional", label: "Regional Specialties" },
  ];

  return (
    <section id="register" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="registration-title">
              Join Our Cook Community
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Share your culinary passion with food lovers in your community. Turn your cooking 
              skills into a rewarding income source.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <Card className="shadow-xl fade-in stagger-2">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center" data-testid="registration-form-title">
                Cook Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="cook-registration-form">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter first name"
                      value={formData.firstName || ""}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={errors.firstName ? "border-destructive" : ""}
                      data-testid="input-firstname"
                    />
                    {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter last name"
                      value={formData.lastName || ""}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={errors.lastName ? "border-destructive" : ""}
                      data-testid="input-lastname"
                    />
                    {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email || ""}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                    data-testid="input-email"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone || ""}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                    data-testid="input-phone"
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <Label htmlFor="address">Location/Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address"
                    className={`h-24 resize-none ${errors.address ? "border-destructive" : ""}`}
                    value={formData.address || ""}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    data-testid="input-address"
                  />
                  {errors.address && <p className="text-sm text-destructive mt-1">{errors.address}</p>}
                </div>
                
                <div>
                  <Label>Cooking Specialties *</Label>
                  <Select 
                    value={formData.specialty || ""} 
                    onValueChange={(value) => handleInputChange("specialty", value)}
                  >
                    <SelectTrigger className={errors.specialty ? "border-destructive" : ""} data-testid="select-specialty">
                      <SelectValue placeholder="Select your specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty.value} value={specialty.value}>
                          {specialty.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.specialty && <p className="text-sm text-destructive mt-1">{errors.specialty}</p>}
                </div>
                
                <div>
                  <Label htmlFor="experience">Experience (Years)</Label>
                  <Input
                    id="experience"
                    type="number"
                    placeholder="Years of cooking experience"
                    min="0"
                    value={formData.experience || ""}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    data-testid="input-experience"
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreesToTerms || false}
                    onCheckedChange={(checked) => handleInputChange("agreesToTerms", checked as boolean)}
                    className={errors.agreesToTerms ? "border-destructive" : ""}
                    data-testid="checkbox-terms"
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">Terms & Conditions</a>
                    {" "}and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>
                {errors.agreesToTerms && <p className="text-sm text-destructive">{errors.agreesToTerms}</p>}
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={mutation.isPending}
                  data-testid="button-submit-registration"
                >
                  {mutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Registration
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already registered?{" "}
                  <a href="#" className="text-primary hover:underline">Login to your account</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
