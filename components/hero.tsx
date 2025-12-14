import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="text-primary">Crafting</span> digital experiences with
                <span className="text-primary"> precision</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl text-balance">
                Full-stack developer passionate about building modern, responsive web applications that combine
                beautiful design with robust engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-card transition-colors font-medium"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <div className="text-sm text-foreground/50">Available for freelance & full-time roles</div>
            </div>
          </div>

          {/* Right column - Personal Image */}
          <div className="relative h-96 sm:h-full min-h-96 order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10"></div>
            <Image
              src="/professional-portrait.jpg"
              alt="Professional portrait"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Existing code */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
