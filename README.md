# Modern Walk

A modern React application built with TypeScript, Vite, and TailwindCSS.

## Overview

Modern Walk is a React-based web application that leverages modern web development technologies and best practices. The project is structured to provide a scalable, maintainable, and performant user experience.

### Tech Stack

- **Frontend Framework**: React 19 with TypeScriptS
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS 4
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM 6
- **HTTP Client**: Axios
- **Error Handling**: React Error Boundary

## Project Structure

```
src/
├── api/          # API integration and services
├── components/   # Reusable UI components
├── pages/        # Page components
├── router/       # Routing configuration
├── types.ts      # TypeScript type definitions
├── Enums.ts      # Enumeration definitions
├── Envs.ts       # Environment configuration
└── main.tsx      # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd modern-walk
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Build for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Assumptions and Design Decisions

1. **TypeScript**: The project uses TypeScript for better type safety and developer experience.

2. **Component Architecture**: 
   - Components are organized in a modular structure
   - Separation of concerns between pages and reusable components
   - API calls are centralized in the api directory

3. **Styling**:
   - TailwindCSS is used for utility-first styling
   - Responsive design is implemented using Tailwind's responsive classes

4. **State Management**:
   - React Query is used for server state management
   - Local state is managed using React's built-in state management

5. **Error Handling**:
   - React Error Boundary is implemented for graceful error handling
   - API errors are handled consistently across the application

6. **Routing**:
   - React Router is used for client-side routing
   - Route configuration is centralized in the router directory

7. **Environment Configuration**:
   - Environment variables are typed and centralized in Envs.ts
   - Different configurations for development and production environments