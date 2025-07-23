# GraminIO Technologies Website

## Overview

This is a modern React-based company homepage for GraminIO Technologies Pvt Ltd, an AI-driven software and tech consulting company founded in 2024 and based in Navi Mumbai, India. The application is built with a full-stack architecture featuring a React frontend with Tailwind CSS styling and a Node.js/Express backend with PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with three main directories:
- **client/**: React frontend application
- **server/**: Express.js backend API
- **shared/**: Common schemas and types shared between frontend and backend

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth animations
- **Icons**: React Icons (Feather icons) and Lucide React
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Memory-based storage (development) with interface for database integration
- **Development**: Hot reload with Vite integration

## Key Components

### Frontend Components
1. **Navbar**: Fixed navigation with theme toggle and smooth scrolling
2. **Hero**: Landing section with typewriter effect and gradient styling
3. **About**: Company introduction with animated features
4. **Services**: Service offerings grid with icons and descriptions
5. **WhyChooseUs**: Value propositions with statistics
6. **CTA**: Contact section with company information
7. **Footer**: Site footer with links and social media
8. **ThemeProvider**: Dark/light mode theme management

### UI Component System
- Complete shadcn/ui component library implementation
- Consistent design tokens using CSS custom properties
- Responsive design with mobile-first approach
- Accessible components following ARIA guidelines

### Backend Components
1. **Server Setup**: Express server with middleware configuration
2. **Storage Interface**: Abstracted storage layer supporting memory and database implementations
3. **Routes**: RESTful API structure (currently minimal, ready for expansion)
4. **Database Schema**: User management schema with Drizzle ORM

## Data Flow

1. **Client Request**: React components make API calls using TanStack Query
2. **API Layer**: Express.js routes handle HTTP requests
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL with Drizzle ORM for type-safe queries
5. **Response**: JSON responses sent back to React components

The application uses a request/response pattern with RESTful API design principles.

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, Lucide React icons
- **State Management**: TanStack React Query
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Hookform Resolvers
- **Utilities**: Class Variance Authority, clsx, date-fns

### Backend Dependencies
- **Server**: Express.js, TypeScript
- **Database**: Drizzle ORM, Neon Database serverless
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript support across the stack
- **Development**: Replit integration with runtime error overlay
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend with hot reload
- **Database**: Uses DATABASE_URL environment variable for PostgreSQL connection
- **Type Safety**: Shared TypeScript types between frontend and backend

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`
4. **Deployment**: Single Node.js process serves both static files and API

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL
- **Build**: Separate development and production configurations
- **Static Assets**: Frontend built assets served by Express in production

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional Node.js hosting with minimal configuration changes.