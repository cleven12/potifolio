import {
  Briefcase,
  User,
  Laptop,
  Monitor,
  Cpu,
  HardDrive,
  MemoryStick,
  Terminal,
  Github,
  Linkedin,
  Twitter,
  Rss,
  MessageCircle,
  Users,
  Globe,
  ArrowUpRight,
  Quote,
  Wrench,
  Database,
  Code,
} from 'lucide-react'
import ScrollAnimator from '@/components/ScrollAnimator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Cleven G',
  description:
    'Learn about Cleven G, a CS student interested in software engineering, based in Tanzania.',
}

const socialPlatforms = [
  {
    category: 'Developer Communities',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Cleven12',
        Icon: Github,
        description: 'Open source projects & contributions',
      },
      {
        label: 'Dev.to',
        href: 'https://dev.to/',
        Icon: Rss,
        description: 'Articles & technical writing',
      },
      {
        label: 'Stack Overflow',
        href: 'https://stackoverflow.com/',
        Icon: MessageCircle,
        description: 'Q&A and problem solving',
      },
    ],
  },
  {
    category: 'Professional',
    links: [
      {
        label: 'LinkedIn',
        href: 'https://tz.linkedin.com/in/cleven-godson-0140b1355',
        Icon: Linkedin,
        description: 'Networking & career updates',
      },
      {
        label: 'X (Twitter)',
        href: 'https://twitter.com/',
        Icon: Twitter,
        description: 'Tech discussions & quick updates',
      },
    ],
  },
  {
    category: 'Community & Learning',
    links: [
      {
        label: 'Discord',
        href: 'https://discord.com/',
        Icon: Users,
        description: 'Real-time dev communities',
      },
      {
        label: 'Hashnode',
        href: 'https://hashnode.com/',
        Icon: Globe,
        description: 'Developer blogging platform',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/',
        Icon: Rss,
        description: 'In-depth technical articles',
      },
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-28 pb-16 md:px-8 lg:px-12">
      <ScrollAnimator />

      {/* Experience Section */}
      <section className="border-b border-border pb-16 md:pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Briefcase size={22} />
              Experience
            </h2>
          </div>
          <div className="animate-on-scroll animate-right">
            <div className="rounded-lg border border-border p-5 transition-colors duration-300 hover:border-primary/50 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                  <Terminal size={14} />
                  Freelance
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                  2023 - Present
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl text-foreground">
                CS Student
              </h3>
              <p className="mt-2 leading-relaxed text-secondary-foreground">
                Self-employed freelance developer delivering scalable backend
                solutions for various clients.
              </p>
              <ul className="mt-4 space-y-2 text-secondary-foreground">
                {[
                  'Designed and developed scalable backend solutions using Django and Flask',
                  'Implemented RESTful APIs and integrated third-party services',
                  'Managed database architecture and optimization using MySQL and PostgreSQL',
                  'Collaborated with clients to gather requirements and deliver solutions on time',
                  'Maintained version control and documentation using Git and GitHub',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <User size={22} />
              About Me
            </h2>
          </div>
          <div className="animate-on-scroll space-y-5 leading-relaxed text-secondary-foreground md:text-lg md:leading-loose">
            <p>
              {"I'm a "}
              <span className="font-medium text-primary">
                CS student
              </span>
              {' with a strong interest in '}
              <span className="font-medium text-primary">software engineering</span>
              {', based in Tanzania. I like building things that actually work and solving problems that matter.'}
            </p>
            <p>
              {"I've spent the past "}
              <span className="font-medium text-primary">2+ years</span>
              {' working on backend projects using Django and Flask, building APIs, connecting payment systems like Stripe, PayPal, Pesapal, and DPO, and working with MySQL and PostgreSQL databases.'}
            </p>
            <p>
              {"I enjoy contributing to "}
              <span className="font-medium text-primary">
                open-source projects
              </span>
              {' and I keep learning new things on my own, especially around AI/ML and cybersecurity.'}
            </p>
          </div>
        </div>
      </section>

      {/* My Quotes */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Quote size={22} />
              My Quotes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              How I think about building software.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "A meeting might tell me why it works, but a system crash tells me exactly how it fails; I don't build software to talk about the rules\u2014I break them to see the truth in the rubble.",
              "Don't tell me what will happen when it breaks; let me break it and watch the logs tell the story.",
              "If a meeting lasts longer than a build, I've already lost the context. Let me find the edge cases by jumping off the cliff.",
              "True understanding isn't found in a specification document; it's found in the wreckage of a failed deployment.",
            ].map((quote, i) => (
              <blockquote
                key={i}
                className={`animate-on-scroll delay-${Math.min(i + 1, 6)} rounded-lg border-l-4 border-primary/60 bg-secondary p-5 transition-all duration-300 hover:border-primary md:p-6`}
              >
                <p className="text-sm leading-relaxed text-secondary-foreground italic md:text-base">
                  {`"${quote}"`}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* My Machines -- Fun Story */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Terminal size={22} />
              My Machines
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The real MVPs behind the code.
            </p>
          </div>
          <div className="space-y-6">
            {/* Laptop */}
            <div className="animate-on-scroll rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Laptop size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground">
                    The Road Warrior
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    Dell Latitude
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                    {
                      "This trusty Dell Latitude is my go-to machine for working on the move. Running Kali Linux as my daily driver -- yes, I like to live dangerously. Armed with 8GB of RAM and a good old HDD (because who needs speed when you have patience, right?). It's been through late-night coding sessions, countless Django migrations, and it still hasn't given up on me. Respect."
                    }
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <HardDrive size={12} /> HDD
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <MemoryStick size={12} /> 8GB RAM
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <Terminal size={12} /> Kali Linux
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="animate-on-scroll delay-2 rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Monitor size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground">
                    The Powerhouse
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    Dell OptiPlex 5050 SFF
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                    {
                      "The desktop beast -- a Dell OptiPlex 5050 SFF rocking an Intel Core i5-6500 (6th Gen). This is where the serious work happens. Running Linux Mint (because after using Kali all day on the laptop, sometimes you just want things to... work normally). It handles my database servers, AI model training experiments, and the occasional 47 browser tabs with zero complaints. A true workhorse that proves you don't need the latest hardware to ship great code."
                    }
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <Cpu size={12} /> i5-6500
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <Monitor size={12} /> SFF
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <Terminal size={12} /> Linux Mint
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dev Environment */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Wrench size={22} />
              Dev Environment
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The tools I use every day.
            </p>
          </div>
          <div className="space-y-6">
            {/* Database Tools */}
            <div className="animate-on-scroll rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-6">
              <h3 className="mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                Database Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL Workbench', 'MySQL CLI Client', 'DBeaver'].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      <Database size={14} className="text-primary" />
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* IDEs & Editors */}
            <div className="animate-on-scroll delay-2 rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-6">
              <h3 className="mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                {'IDEs & Editors'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'PyCharm'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <Code size={14} className="text-primary" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* API Clients & CLI */}
            <div className="animate-on-scroll delay-3 rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-6">
              <h3 className="mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                {'API Clients & CLI'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Bruno', 'cURL'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <Terminal size={14} className="text-primary" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore & Meet Section */}
      <section className="py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="animate-on-scroll">
            <h2 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
              <Users size={22} />
              Explore & Connect
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Find me across the web. Let us learn, share, and build together.
            </p>
          </div>
          <div className="space-y-8">
            {socialPlatforms.map((group, gi) => (
              <div
                key={group.category}
                className={`animate-on-scroll delay-${Math.min(gi + 1, 6)}`}
              >
                <h3 className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                  {group.category}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.links.map((link) => {
                    const Icon = link.Icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 rounded-lg border border-border bg-secondary p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                          <Icon
                            size={18}
                            className="text-primary"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                            {link.label}
                            <ArrowUpRight
                              size={12}
                              className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100"
                            />
                          </span>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="animate-on-scroll rounded-sm border-l-4 border-primary bg-secondary p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Let us meet!
              </h3>
              <p className="mt-2 leading-relaxed text-secondary-foreground">
                I believe in sharing knowledge and helping others grow.
                Technology should bring us together, not create barriers. Whether
                you want to collaborate on a project, discuss ideas, or just
                chat about tech -- reach out on any of these platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
