# Replit Configuration for Henox Business Consultant Website

## Overview

This is a comprehensive, modernized full-stack web application for Henox Business Consultant Limited, a Kenyan document digitization and management company. The application has been completely transformed from a traditional HTML/CSS website into a modern React application with enhanced visuals, functionality, performance optimizations, and SEO improvements.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Major Website Modernization (January 2025)
- **Complete Technology Stack Upgrade**: Migrated from static HTML/CSS to modern React/TypeScript with Vite
- **Enhanced Visual Design**: Updated color scheme, modern gradients, smooth animations, and interactive hover effects
- **Improved User Experience**: Added responsive design, mobile-first approach, and intuitive navigation
- **Performance Optimizations**: Implemented lazy loading, image optimization, and efficient component architecture
- **SEO Enhancements**: Added comprehensive meta tags, Open Graph tags, structured data, and semantic HTML
- **Functionality Improvements**: Interactive quote calculator, testimonials carousel, contact forms with validation
- **Google Analytics Integration**: Set up for visitor tracking and performance monitoring

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and responsive design
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix routing
- **Development**: tsx for TypeScript execution in development

### Database & ORM
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Provider**: Neon Database serverless PostgreSQL
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Frontend Structure
- **Pages**: Home, About, Services, Contact, and 404 Not Found
- **Components**: Modular component architecture with reusable UI components
- **Layouts**: Header and Footer components for consistent navigation
- **Sections**: Hero, Services Grid, Quote Calculator, Testimonials, Contact Form

### Backend Structure
- **Storage Layer**: Interface-based storage with in-memory implementation (MemStorage)
- **Routes**: Centralized route registration in `server/routes.ts`
- **Middleware**: Request logging, JSON parsing, error handling
- **Development**: Vite integration for hot module replacement

### UI System
- **Design System**: Custom theme with CSS variables for colors and spacing
- **Components**: Comprehensive component library including forms, dialogs, cards, buttons
- **Responsive**: Mobile-first responsive design approach
- **Accessibility**: Built on Radix UI for accessibility compliance

## Data Flow

### Client-Side Flow
1. User navigates through React Router (Wouter)
2. Pages render with SEO optimization and analytics tracking
3. Forms use React Hook Form with Zod validation
4. TanStack Query manages API state and caching
5. Toast notifications provide user feedback

### Server-Side Flow
1. Express server handles API requests with logging middleware
2. Routes process business logic through storage interface
3. In-memory storage currently handles data persistence
4. Error handling middleware catches and formats errors

### Development Flow
1. Vite dev server provides hot module replacement
2. TypeScript compilation with strict type checking
3. Development-specific features like error overlays
4. Replit integration for cloud development

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Fetching**: TanStack Query
- **Database**: Drizzle ORM, Neon Database serverless
- **Validation**: Zod schema validation
- **Build Tools**: Vite, esbuild for production builds

### Analytics & SEO
- **Google Analytics**: Integrated with environment variable configuration
- **SEO**: Dynamic meta tag management
- **Performance**: Image optimization and lazy loading

### Development Tools
- **TypeScript**: Strict type checking across frontend and backend
- **ESLint/Prettier**: Code formatting and linting (implied by config)
- **Path Aliases**: Configured for clean imports

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static assets served from build directory

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL
- **Analytics**: Google Analytics via VITE_GA_MEASUREMENT_ID
- **Development**: NODE_ENV for environment-specific behavior

### Production Deployment
- **Start Command**: `npm start` runs built server
- **Static Serving**: Express serves built frontend assets
- **Database**: Neon serverless PostgreSQL for production

### Development Workflow
- **Local Development**: `npm run dev` with hot reloading
- **Database Migrations**: `npm run db:push` for schema updates
- **Type Checking**: `npm run check` for TypeScript validation

The application is structured as a monorepo with shared TypeScript interfaces between frontend and backend, enabling type-safe full-stack development. The current implementation uses in-memory storage but is architected to easily switch to PostgreSQL when needed.