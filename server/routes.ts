import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCookRegistrationSchema, insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Cook registration endpoint
  app.post("/api/cook-registration", async (req, res) => {
    try {
      const validatedData = insertCookRegistrationSchema.parse(req.body);
      
      // Check if email already exists
      const existingRegistration = await storage.getCookRegistrationByEmail(validatedData.email);
      if (existingRegistration) {
        return res.status(400).json({ 
          message: "A registration with this email already exists." 
        });
      }

      const registration = await storage.createCookRegistration(validatedData);
      res.status(201).json({
        message: "Cook registration submitted successfully! We'll review your application and contact you soon.",
        id: registration.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please check your form data and try again.",
          errors: error.errors 
        });
      }
      console.error("Cook registration error:", error);
      res.status(500).json({ 
        message: "Failed to submit registration. Please try again later." 
      });
    }
  });

  // Contact inquiry endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json({
        message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
        id: inquiry.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please check your form data and try again.",
          errors: error.errors 
        });
      }
      console.error("Contact inquiry error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
