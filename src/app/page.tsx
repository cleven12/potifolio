import {
  Terminal,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Calendar,
  FolderOpen,
  Wrench,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import ScrollAnimator from '@/components/ScrollAnimator'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-12">
      <ScrollAnimator />

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-80px)] flex-col justify-center pt-24 pb-16">
        <div className="animate-on-scroll">
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Terminal size={14} />
            CS Student | Software Engineering
          </p>

          <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl lg:text-8xl">
            Cleven{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              G
            </span>
          </h1>
        </div>

        <div className="animate-on-scroll delay-2">
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground md:text-xl">
            CS student with 2+ years of hands-on experience building web
            applications. Working with Django, Flask, payment integrations, and
            exploring AI/ML.
          </p>
        </div>

        <div className="animate-on-scroll delay-3">
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="mailto:cleven2024@gmail.com"
              className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <Mail size={16} />
              <span className="relative">
                Email
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="https://github.com/Cleven12"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <Github size={16} />
              <span className="relative">
                GitHub
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="https://tz.linkedin.com/in/cleven-godson-0140b1355"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <Linkedin size={16} />
              <span className="relative">
                LinkedIn
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <Twitter size={16} />
              <span className="relative">
                X / Twitter
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="https://wa.me/255692654000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <MessageCircle size={16} />
              <span className="relative">
                WhatsApp
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: '2+', label: 'Years Experience', icon: Calendar },
            { value: '7+', label: 'Projects Deployed', icon: FolderOpen },
            { value: '12+', label: 'Technologies', icon: Wrench },
            { value: '100%', label: 'Client Satisfaction', icon: CheckCircle },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-on-scroll animate-scale delay-${i + 1}`}
            >
              <div className="font-serif text-4xl text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <stat.icon size={14} />
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="animate-on-scroll flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">
              Interested in working together?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Let us build something great.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-3"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}
