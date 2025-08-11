# Overview

FeedBack is a full-stack web application that serves as a corporate website for an Asian business services company. The application showcases the company's services including medical tourism brokerage, multi-language mobile app development, brand distribution, and marketing consulting. It features a modern corporate design with multiple pages including company information, services, brands, news, and contact forms.

# User Preferences

Preferred communication style: Simple, everyday language.

## Design System
- **Primary Black**: #000000 - Used for main text, headers, titles, and core information. Conveys strong trust and refined luxury.
- **Accent Deep Blue**: #0F4C82 - Used for buttons, links, highlights, and brand identity. Represents smartness, professionalism, and modernity.
- **Background White**: #FFFFFF - Used for overall backgrounds, cards, forms, and layout structure. Creates clean appearance, spacing, and luxurious minimalism.

## UI Guidelines
- Clean, modern layouts with consistent spacing (max-w-7xl mx-auto px-6 lg:px-8)
- Shadow usage: shadow-lg for cards, shadow-xl for featured content
- Border radius: rounded-xl for cards, rounded-full for icons
- Typography: line-height 1.2 maintained for optimal text spacing
- Interactive elements use hover:scale-105 for subtle animation effects

# System Architecture

## Frontend Architecture

The frontend is built using React with TypeScript and follows a modern component-based architecture:

- **React Router**: Uses Wouter for client-side routing with a simple Switch/Route pattern
- **UI Framework**: Implements shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: TailwindCSS with CSS variables for theming and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Organized into pages, components/ui, and components/layout directories

## Backend Architecture

The backend follows a minimalist Express.js architecture:

- **Server Framework**: Express.js with TypeScript for API routes and static file serving
- **Development Setup**: Vite middleware integration for hot module replacement in development
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **API Structure**: RESTful API design with /api prefix for all routes
- **Request Logging**: Built-in request/response logging middleware for debugging

## Data Storage Solutions

The application uses a flexible storage architecture:

- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Development Storage**: In-memory storage implementation for rapid development
- **Production Database**: PostgreSQL via Neon serverless database
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Migration Support**: Drizzle Kit for database migrations and schema updates

## Authentication and Authorization

Currently implements a basic user system:

- **User Schema**: Simple username/password based authentication structure
- **Session Management**: Prepared for session-based authentication with connect-pg-simple
- **Storage Interface**: User CRUD operations abstracted through storage interface
- **Security**: Password handling and user management ready for implementation

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL serverless database for production data storage
- **Drizzle ORM**: Type-safe database access layer with PostgreSQL dialect

## UI and Styling
- **shadcn/ui**: Complete UI component library built on Radix UI primitives
- **Radix UI**: Comprehensive set of accessible, unstyled UI components
- **TailwindCSS**: Utility-first CSS framework for styling and responsive design
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Type safety across the entire application stack
- **React Query**: Server state management and caching solution
- **Wouter**: Lightweight client-side router for React applications

## Form Handling
- **React Hook Form**: Performant form library with validation support
- **Hookform Resolvers**: Integration layer for form validation schemas
- **Zod**: Schema validation library for type-safe data validation

## Additional Services
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **Nanoid**: Unique ID generation for various application needs