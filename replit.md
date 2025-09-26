# Overview

Qookkar is a comprehensive food marketplace platform that connects home cooks with food enthusiasts. The application facilitates homemade food delivery services through a multi-sided marketplace supporting cooks, customers, and delivery partners. The platform features cook registration, contact inquiries, and serves as a landing page for mobile app downloads.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Design System**: Custom color palette with warm tones (primary orange, secondary green, accent yellow)

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error middleware with structured error responses
- **Logging**: Custom request/response logging middleware

## Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon serverless PostgreSQL with connection pooling
- **Schema Management**: Drizzle migrations in TypeScript
- **Data Validation**: Drizzle-Zod integration for type-safe database operations

## Database Schema
- **Users**: Basic user authentication structure (id, username, password)
- **Cook Registrations**: Comprehensive cook onboarding (personal info, specialty, experience, terms agreement)
- **Inquiries**: Contact form submissions with subject categorization

## Development Environment
- **Monorepo Structure**: Shared types and schemas between client and server
- **Development Server**: Vite with HMR and Express API proxy
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **Type Safety**: Shared TypeScript configuration across frontend and backend

## External Dependencies

- **Database Hosting**: Neon serverless PostgreSQL
- **UI Components**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS framework
- **Fonts**: Google Fonts (Inter, Source Serif Pro, various others)
- **Image Assets**: Unsplash for stock photography
- **Development Tools**: Replit-specific plugins for development environment
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns library
- **Form Validation**: Zod schema validation
- **HTTP Client**: Native fetch API with custom wrapper