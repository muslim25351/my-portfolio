"use client";

import ProjectCard from "./project-card";

const projects = [
  {
    id: 1,
    title: "hospital managment system",
    description:
      "A full-stack managment solution with user authentication, role-based access control, and payment integration.",
    tags: [
      "Authentication",
      "Express",
      "TypeScript",
      "mongodb",
      "jsonwebToken",
    ],
    image: "/hospital-management-system-sm-01.png",
    github: "https://github.com/muslim25351/hospital-management-system",
    deployment: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Real-state sale and rental webapplication",
    description:
      "A web application for listing, buying, selling, and renting properties with search and filter functionality..",
    tags: [
      "React",
      "Redux",
      "mongodb",
      "Tailwind",
      "jsonwebToken",
      "cloudinary",
    ],
    image: "/real Estate project.jpg",
    github: "https://github.com/muslim25351/Mern-Estate-",
    deployment: "https://mern-estate-cklt.onrender.com/",
  },
  {
    id: 3,
    title: "Git-hub clone project",
    description:
      "A GitHub-like platform that allows users to create, manage, and clone repositories.Built to demonstrate create Repo, fork repo,star repo and others.",
    tags: ["Express js", "authentication", "java script", "jsonwebToken"],
    image: "/github clone.png",
    github: "https://github.com/yourusername/ai-generator",
    deployment: "https://ai-generator-demo.vercel.app",
  },
  {
    id: 4,
    title: "chat application",
    description:
      "A real-time chat application that enables users to send and receive messages instantly.It supports user authentication and a clean, responsive messaging interface.",
    tags: [
      "React",
      "Zustand",
      "Express",
      "mongodb",
      "Socket.io",
      "authentication",
    ],
    image: "/chat.jpg",
    github: "https://github.com/muslim25351/chat-app",
    deployment: "https://analytics-demo.vercel.app",
  },
  {
    id: 5,
    title: "Tech-event web application",
    description:
      "An application for organizing and managing technology events, schedules, and registrations.",
    tags: ["Next.js", "mongodb", "Real-time API", "Authentication"],
    image: "/tech-.PNG",
    github: "https://github.com/muslim25351/tech-event",
    deployment: "https://social-demo.vercel.app",
  },
  {
    id: 6,
    title: "Design System",
    description:
      "Comprehensive design system and component library for building consistent user interfaces.",
    tags: ["React", "Storybook", "TypeScript", "Tailwind CSS"],
    image: "/design-system-components.jpg",
    github: "https://github.com/yourusername/design-system",
    deployment: "https://design-system.vercel.app",
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              A selection of recent work showcasing my skills in modern web
              development, design, and problem-solving.
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
  );
}
