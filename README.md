# 🚀 GraminIO Technologies - AI-Powered Solutions Website

<div align="center">

![GraminIO Technologies](https://img.shields.io/badge/GraminIO-Technologies-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)

**A modern, responsive React homepage showcasing AI consulting services**

[🌐 Live Demo](https://graminwebsite.netlify.app/) | [📚 Documentation](#features) | [🎨 Design System](#ui-components)

</div>

**Preview**

<div align="center"> <img src="https://i.ibb.co/HfVdPnnx/image.png" alt="GraminIO Technologies Homepage Preview" style="border-radius: 12px; max-width: 100%; box-shadow: 0 4px 14px rgba(0,0,0,0.15);" /> <br/><br/> <em>GraminIO Homepage – AI-powered, responsive design</em> </div>

---
## 📖 About

GraminIO Technologies is a cutting-edge AI-driven software and tech consulting company founded in 2024, based in Navi Mumbai, India. This repository contains the source code for their professional company homepage, built with modern web technologies and designed to showcase their expertise in AI/ML, cloud services, and custom software development.

## ✨ Features

### 🎯 Core Features
- **🌓 Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **📱 Fully Responsive Design** - Mobile-first approach with perfect scaling across all devices
- **🎭 Smooth Animations** - Framer Motion powered animations with scroll-triggered effects
- **⚡ Lightning Fast** - Optimized with Vite for ultra-fast development and production builds
- **🎨 Modern UI/UX** - Clean, professional design with intuitive navigation

### 🔧 Technical Features
- **🏗️ Full-Stack Architecture** - React frontend with Express.js backend
- **🗄️ Database Ready** - PostgreSQL integration with Drizzle ORM
- **🔒 Type Safety** - End-to-end TypeScript implementation
- **🎪 Component Library** - Complete shadcn/ui component system
- **📊 State Management** - TanStack Query for efficient server state
- **🛣️ Client-Side Routing** - Wouter for smooth page transitions

### 🎨 Design Elements
- **🎯 Hero Section** - Animated typewriter effect with floating elements
- **💼 Services Showcase** - Interactive grid displaying 6 core offerings
- **📈 Statistics Display** - Animated counters and achievement metrics
- **🤝 About Section** - Company story with animated feature highlights
- **📞 Contact Section** - Professional CTA with company information
- **🔗 Social Integration** - LinkedIn and email contact options

## 🏗️ Architecture

### Frontend Stack
```
📂 client/
├── 🎨 src/
│   ├── 🧩 components/     # Reusable UI components
│   ├── 📄 pages/          # Page components
│   ├── 🎣 hooks/          # Custom React hooks
│   ├── 📚 lib/            # Utility functions
│   └── 🎯 main.tsx        # Application entry point
```

### Backend Stack
```
📂 server/
├── 🚀 index.ts           # Express server setup
├── 🛤️ routes.ts          # API route handlers
├── 💾 storage.ts         # Database abstraction layer
└── ⚡ vite.ts            # Vite integration
```

### Shared Resources
```
📂 shared/
└── 📋 schema.ts          # Shared TypeScript types
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v20+)
- **npm** or **yarn**
- **PostgreSQL** (optional, for database features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/graminio-website.git
   cd graminio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional)
   ```bash
   # Create .env file for database connection
   echo "DATABASE_URL=your_postgresql_connection_string" > .env
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   ```
   http://localhost:5000
   ```

## 🎨 UI Components

### Design System
- **🎨 Color Palette**: Blue to Purple gradient theme with dark mode support
- **🔤 Typography**: Inter font family with responsive scaling
- **🌈 Theme System**: CSS custom properties with automatic dark mode
- **📐 Spacing**: Consistent 8px grid system
- **🎯 Animations**: Subtle micro-interactions for enhanced UX

### Component Library
- ✅ Navigation (Responsive navbar with smooth scrolling)
- ✅ Hero Section (Animated typewriter with floating cards)
- ✅ About Section (Company overview with feature highlights)
- ✅ Services Grid (Interactive service offerings showcase)
- ✅ Statistics (Animated counters and metrics)
- ✅ Call-to-Action (Professional contact section)
- ✅ Footer (Comprehensive links and social media)

## 🛠️ Technology Stack

### Frontend Technologies
| Technology | Purpose | Version |
|-----------|---------|---------|
| ⚛️ **React** | UI Framework | 18.x |
| 🔷 **TypeScript** | Type Safety | Latest |
| 🎨 **Tailwind CSS** | Styling | Latest |
| 🎭 **Framer Motion** | Animations | Latest |
| 🎪 **Radix UI** | UI Primitives | Latest |
| 📊 **TanStack Query** | State Management | v5 |
| 🛣️ **Wouter** | Routing | Latest |

### Backend Technologies
| Technology | Purpose | Version |
|-----------|---------|---------|
| 🚀 **Express.js** | Server Framework | Latest |
| 🗄️ **Drizzle ORM** | Database ORM | Latest |
| 🐘 **PostgreSQL** | Database | Latest |
| 🔒 **TypeScript** | Type Safety | Latest |

### Development Tools
| Tool | Purpose |
|------|---------|
| ⚡ **Vite** | Build Tool & Dev Server |
| 🔨 **ESBuild** | Fast Bundling |
| 📦 **npm** | Package Management |
| 🧪 **Drizzle Kit** | Database Migrations |

## 📱 Responsive Design

The website is built with a mobile-first approach, ensuring perfect functionality across all devices:

- 📱 **Mobile** (320px - 768px): Optimized touch interface
- 📟 **Tablet** (768px - 1024px): Balanced layout with improved spacing
- 💻 **Desktop** (1024px+): Full-featured experience with hover effects
- 🖥️ **Large Screens** (1440px+): Enhanced visual hierarchy

## 🌐 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## 🚀 Deployment

### Production Build
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/graminio
NODE_ENV=production
PORT=5000
```

### Deployment Platforms
- ☁️ **Vercel**
- 🌊 **Netlify**
- 🐳 **Docker**
- 🔧 **Traditional VPS**

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+ across all metrics
- 🎯 **Core Web Vitals**: Excellent ratings
- 📦 **Bundle Size**: Optimized for fast loading
- 🖼️ **Image Optimization**: SVG graphics for scalability
- 💾 **Caching Strategy**: Efficient browser caching

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Ensure responsive design compatibility
- Add proper error handling
- Include appropriate tests

## 📄 License

-Open Source

## 🎨 Design Credits

**Designed & Developed by**: [Netravue](https://netravue.com)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by Shivang Kumar

[🌐 Website](https://graminwebsite.netlify.app/) • [📧 Contact](+919852001237) • [💼 LinkedIn](https://www.linkedin.com/in/shivang-kumar98/)

</div>
