# Cehpoint ATS + Business Management System

## Overview

This is a Next.js-based web application for an AI-Powered Applicant Tracking System (ATS) combined with a Business Management System. The platform is designed to streamline recruitment processes, manage client projects, and handle business operations from a single integrated interface. The application serves three primary user types: HR personnel (for recruitment and candidate management), employees (for project execution), and clients (for requirement submission and progress monitoring).

## Recent Changes (November 12, 2025)

### Landing Page Enhancements

**1. Animated Hero Headline**
- Implemented rotating text animation in hero section
- Cycles through 8 different features: Intern Hiring, Marketing Hiring, Project Management, Quotation Management, Client Management, Task Management, Real-time Reporting, and Developer Management
- Smooth fade transitions with gradient styling
- Component: `AnimatedText.tsx`

**2. Updated Urgency Messaging**
- Replaced "Only 47 Spots Left" with more compelling "FOUNDER LAUNCH BONUS: Save ₹35,000 This Month • 24h Setup Guarantee!"
- Enhanced styling with gradient backgrounds and shadow effects
- Better conveys value proposition and urgency

**3. Comprehensive Business Assessment**
- Single, detailed assessment form replacing previous two-modal system
- 3-step flow: Persuasive intro → Comprehensive form → Personalized thank-you
- LocalStorage tracking: Appears once per visit, can be reopened via floating button
- 5 comprehensive sections collecting 40+ data points:
  - Business Information (company details, contact preferences)
  - Hiring & Recruitment Needs (volume, roles, locations, time spent, current tools)
  - Project & Client Management (active projects/clients, tools, quotations, reporting)
  - Feature Priorities (which 8-in-1 features needed, integrations, data migration, success metrics)
  - Current Challenges & Goals (pain points, budget, urgency, decision authority, custom requirements)
- Advanced UX features:
  - Progress indicator showing current section, percentage complete, time remaining
  - Validation with automatic scroll-to-error for all fields (including multi-select)
  - Confirmation prompt when skipping after starting to fill form
  - Section-based focus tracking
- Persuasive intro elements:
  - Social proof ("Join 500+ businesses")
  - Real customer testimonial with specific metrics
  - Human-in-the-loop approach emphasized
  - Trust indicators (GDPR/SOC 2 compliance)
- Personalized thank-you screen using customer data
- Data structure prepared for backend/CRM integration
- Component: `ComprehensiveAssessment.tsx`

**4. Transparency & Ownership Section**
- Comprehensive 6-card section highlighting business commitments:
  - Source code access for customization
  - Domain connection services
  - Free domain for users without one
  - Free website development for eligible startups (T&C apply)
  - GST invoice provision
  - 72-hour custom delivery option
- Builds trust and differentiates from competitors

**5. Enhanced ROI Calculator**
- Replaced basic calculator with comprehensive productivity-focused tool
- Industry selector (6 industries: IT Services, Agencies, Staffing, Consulting, Manufacturing, Retail)
- Time-tracking inputs:
  - HR screening hours per month
  - Interview hours per month
  - Senior developer technical round hours per month
- Displays:
  - Time reclaimed for productive work
  - What HR and developers can do instead (specific examples)
  - Multi-metric breakdown (software costs, time costs, total savings)
  - 5-year projections including hours reclaimed
  - 72-hour customization availability banner
- Component: `EnhancedROICalculator.tsx`

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with React 19
- **Rationale**: Next.js provides server-side rendering, static site generation, and built-in API routes, making it ideal for a business application requiring both performance and SEO capabilities
- **TypeScript**: Ensures type safety and better developer experience with improved code quality and maintainability
- **Pages Router**: Uses the traditional pages directory structure for routing, providing a straightforward file-based routing system

**Styling Solution**: Tailwind CSS v4
- **Rationale**: Utility-first CSS framework enables rapid UI development with consistent design patterns
- **Custom Theme**: Extended with brand colors (primary: blue, secondary: green, accent: red) and custom font family (Inter, Poppins)
- **Responsive Design**: Mobile-first approach with built-in responsive utilities

**Component Structure**:
- Modal-based quiz/assessment system (`QuizModal.tsx`) for candidate evaluation and lead qualification
- Animated text component (`AnimatedText.tsx`) for dynamic hero headlines with gradient styling
- Business assessment modal (`BusinessAssessment.tsx`) for lead qualification with 5-question interactive flow
- Enhanced ROI calculator (`EnhancedROICalculator.tsx`) with multi-industry support and productivity metrics
- Legacy ROI calculator (`ROICalculator.tsx`) - retained for reference, replaced in production by enhanced version
- Countdown timer component (`CountdownTimer.tsx`) for urgency messaging
- Reusable components architecture for scalability
- Feature-based organization for better code maintainability

### Backend Architecture

**API Layer**: Next.js API Routes
- **Rationale**: Built-in API routes eliminate need for separate backend server, simplifying deployment and reducing infrastructure complexity
- **File-based routing**: API endpoints follow the `pages/api/*` convention
- **TypeScript support**: Type-safe request/response handling

**Planned Features** (based on requirements):
- Resume parsing and storage
- AI integration for question generation and answer analysis
- Client requirement collection endpoints
- Quotation generation logic
- Project management APIs
- Report generation system
- Payment processing integration

### State Management

**Current Approach**: React useState hooks for local component state
- **Rationale**: For initial implementation, local state management is sufficient
- **Future Consideration**: As the application grows, consider implementing Context API or a state management library (Redux, Zustand) for global state needs across HR, employee, and client modules

### Development Configuration

**Port Configuration**: Custom port 5000 with 0.0.0.0 hostname binding
- **Rationale**: Enables access from external networks, necessary for Replit environment and client testing

**ESLint**: Next.js recommended configuration
- Ensures code quality and consistency
- Follows Next.js best practices

**TypeScript Configuration**:
- Target: ES2017 for broad browser compatibility
- Strict mode disabled for faster initial development
- Module resolution: Node for standard npm package handling

## External Dependencies

### Current Dependencies

**Core Framework**:
- `next` (^15.2.3): React framework for production
- `react` (^19.0.0): UI library
- `react-dom` (^19.0.0): React rendering for web
- `tailwindcss` (^4.0.15): Utility-first CSS framework

**Development Tools**:
- `typescript` (^5.8.2): Type-safe JavaScript
- `eslint` (^9.23.0): Code linting
- `eslint-config-next` (^15.2.3): Next.js-specific linting rules
- Type definitions for Node.js, React, and React DOM

### Planned/Required Integrations

**AI Services** (for core features):
- AI API for resume parsing and question generation
- Natural language processing for answer analysis
- Consider: OpenAI API, Google Cloud AI, or custom ML models

**Database** (not yet implemented):
- Will need persistent storage for:
  - User accounts (HR, employees, clients)
  - Candidate resumes and assessments
  - Client requirements and quotations
  - Project data and assignments
  - Reports and analytics
- Recommended: PostgreSQL or MongoDB for flexibility with document storage

**Authentication** (not yet implemented):
- Multi-role authentication system required
- Consider: NextAuth.js, Auth0, or custom JWT implementation
- Role-based access control (RBAC) for HR, employee, and client roles

**Payment Processing** (planned feature):
- Payment gateway integration for client invoicing
- Consider: Stripe, Razorpay (for Indian market), or PayPal

**File Storage** (for resume uploads):
- Cloud storage solution needed
- Consider: AWS S3, Cloudinary, or Vercel Blob Storage

**Email Service** (for notifications):
- Transactional email service for:
  - Candidate communications
  - Client notifications
  - Report delivery
- Consider: SendGrid, AWS SES, or Resend

### Hosting Environment

**Replit Deployment**:
- Configured for Replit's domain handling
- Environment variables managed through `process.env`
- Custom allowed dev origins for secure development

**Production Considerations**:
- Next.js build optimization enabled
- Static asset optimization through Next.js
- Server-side rendering for improved performance
- Lifetime hosting commitment as per product offering