"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Persona() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Hi, I'm <span className="text-primary">Abuzer Jemal</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                Full Stack Developer & Creative Builder
              </p>
            </div>

            <p className="text-foreground/80 text-base leading-relaxed">
              I’m a focused developer with 2+ years of experience building
              scalable and complex backend systems and APIs, while also
              developing clean, modern frontends. I specialize in solving
              challenging problems and delivering efficient, well-structured
              full-stack solutions.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "python",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Web Design",
                    "Express.js",
                    "mongodb",
                    "java script",
                    "git",
                    "docker",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/muslim25351/"
                target="https://github.com/muslim25351/"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-card hover:bg-primary/10 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center">
            <div className="relative w-64 h-68 md:w-80 md:h-90">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="/my.jpg"
                alt="Developer persona"
                className="relative w-full h-full object-cover rounded-2xl border border-border shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
