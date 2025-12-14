"use client"

import Image from "next/image"

export default function PortfolioImage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <Image
              src="/professional-developer-workspace.jpg"
              alt="Portfolio showcase"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                Turning Ideas Into <span className="text-primary">Reality</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                With a strong foundation in modern web technologies, I create scalable and performant applications that
                solve real-world problems. My approach combines clean code practices with user-centric design.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">My Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {["React & Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Databases", "UI/UX Design"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-background rounded-lg border border-border/50 text-sm text-foreground/80 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
              >
                See my latest projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
