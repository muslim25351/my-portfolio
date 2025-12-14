"use client"

import ProjectCard from "./project-card"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product catalog, shopping cart, and secure checkout flow.",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "Database"],
    image: "/ecommerce-platform.jpg",
    github: "https://github.com/yourusername/ecommerce-platform",
    deployment: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind", "WebSockets"],
    image: "/task-management-app.jpg",
    github: "https://github.com/yourusername/task-manager",
    deployment: "https://taskapp-demo.vercel.app",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Intelligent content generation tool powered by AI, helping creators produce quality content efficiently.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Vercel AI SDK"],
    image: "/ai-content-generator.jpg",
    github: "https://github.com/yourusername/ai-generator",
    deployment: "https://ai-generator-demo.vercel.app",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting.",
    tags: ["React", "Chart.js", "Express", "PostgreSQL"],
    image: "/analytics-dashboard.png",
    github: "https://github.com/yourusername/analytics-dashboard",
    deployment: "https://analytics-demo.vercel.app",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Social network platform with user profiles, post creation, real-time notifications, and messaging.",
    tags: ["Next.js", "Supabase", "Real-time API", "Authentication"],
    image: "/social-media-app.jpg",
    github: "https://github.com/yourusername/social-app",
    deployment: "https://social-demo.vercel.app",
  },
  {
    id: 6,
    title: "Design System",
    description: "Comprehensive design system and component library for building consistent user interfaces.",
    tags: ["React", "Storybook", "TypeScript", "Tailwind CSS"],
    image: "/design-system-components.jpg",
    github: "https://github.com/yourusername/design-system",
    deployment: "https://design-system.vercel.app",
  },
]

export default function ProjectGrid() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              A selection of recent work showcasing my skills in modern web development, design, and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
