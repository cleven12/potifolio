import {
  Rocket,
  Mountain,
  Lock,
  Code,
  ExternalLink,
  Github,
  Trophy,
  GitBranch,
  Server,
  Lightbulb,
  Handshake,
  Database,
  Bot,
} from 'lucide-react'
import ScrollAnimator from '@/components/ScrollAnimator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Cleven G',
  description:
    'Featured projects, achievements, and services by Cleven G, CS student focused on software engineering.',
}

const projects = [
  {
    category: 'Tour Platform',
    categoryIcon: Mountain,
    status: 'Live',
    title: 'Visit Kili Adventures',
    description:
      'A full-featured tour operator platform built with Django. Implemented booking systems, tour management, and client inquiries. Designed and optimized database schemas, integrated payment processing, and set up automated email notifications.',
    tech: ['Django', 'PostgreSQL', 'Python', 'Git', 'Linux'],
    links: [
      {
        label: 'View Live',
        href: 'https://visitkili.com',
        icon: ExternalLink,
      },
    ],
  },
  {
    category: 'Confidential',
    categoryIcon: Lock,
    status: 'NDA',
    title: 'Client Backend Solutions',
    description:
      'Delivered backend solutions under NDA for various clients. Developed RESTful APIs, designed scalable database architectures, and built AI-integrated applications. Projects included custom business logic, third-party service integrations, and performance optimization.',
    tech: ['Django', 'Flask', 'MySQL', 'PostgreSQL', 'LangChain'],
    links: [],
  },
  {
    category: 'Personal',
    categoryIcon: Code,
    status: 'Live',
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built with Django and REST API. Features full CRUD operations, GitHub integration, and SEO optimization with JSON-LD schema.',
    tech: ['Django', 'Python', 'MySQL', 'REST API'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Cleven12',
        icon: Github,
      },
    ],
  },
]

const achievements = [
  {
    icon: GitBranch,
    title: 'Open Source Contributor',
    description:
      'Active contributor to open-source projects on GitHub, helping build and improve community-driven software solutions.',
  },
  {
    icon: Server,
    title: 'Production Deployments',
    description:
      'Successfully deployed multiple production web applications for clients, including the Visit Kili Adventures tour platform.',
  },
  {
    icon: Lightbulb,
    title: 'Self-Directed Learning',
    description:
      'Continuously expanding expertise in AI/ML Engineering and Cybersecurity through self-directed learning and practical projects.',
  },
]

const services = [
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Scalable backend solutions using Django and Flask frameworks. RESTful API design and implementation, third-party service integrations, and custom business logic development.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description:
      'Database design and optimization using MySQL and PostgreSQL. Schema design, query optimization, data migration, and performance tuning for high-traffic applications.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'AI/ML model integration into existing applications using LangChain. Natural Language Processing solutions and intelligent automation for business processes.',
  },
  {
    icon: Code,
    title: 'API Development',
    description:
      'Custom RESTful API design and development. API documentation, versioning, authentication, and integration with frontend applications and mobile apps.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-28 pb-16 md:px-8 lg:px-12">
      <ScrollAnimator />

      {/* Projects Section */}
      <section className="border-b border-border pb-16 md:pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h1 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Rocket size={22} />
              Projects
            </h1>
          </div>
          <div className="space-y-8">
            {projects.map((project, i) => {
              const CategoryIcon = project.categoryIcon
              return (
                <div
                  key={project.title}
                  className={`animate-on-scroll delay-${Math.min(i + 1, 6)} rounded-lg border border-border p-5 transition-colors duration-300 hover:border-primary/50 md:p-6`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                      <CategoryIcon size={14} />
                      {project.category}
                    </span>
                    <span className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      {project.links.map((link) => {
                        const LinkIconComp = link.icon
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                          >
                            <LinkIconComp size={14} />
                            <span className="relative">
                              {link.label}
                              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </span>
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Trophy size={22} />
              Achievements
            </h2>
          </div>
          <div className="space-y-4">
            {achievements.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`animate-on-scroll delay-${Math.min(i + 1, 6)} rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50`}
                >
                  <h3 className="flex items-center gap-2 font-serif text-lg text-primary">
                    <Icon size={18} />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Handshake size={22} />
              Services
            </h2>
          </div>
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`animate-on-scroll delay-${Math.min(i + 1, 6)} border-b border-border pb-6 last:border-0 last:pb-0`}
                >
                  <h3 className="flex items-center gap-2 text-foreground">
                    <Icon size={18} className="text-primary" />
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
