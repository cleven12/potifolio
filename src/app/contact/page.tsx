import {
  Send,
  Phone,
  Linkedin,
  Github,
  MessageCircle,
} from 'lucide-react'
import ScrollAnimator from '@/components/ScrollAnimator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Cleven G',
  description:
    'Get in touch with Cleven G for freelance projects, collaborations, and job opportunities.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-28 pb-16 md:px-8 lg:px-12">
      <ScrollAnimator />

      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <div className="animate-on-scroll">
          <h1 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
            <Send size={22} />
            Contact
          </h1>
        </div>

        <div>
          <div className="animate-on-scroll">
            <a
              href="mailto:cleven2024@gmail.com"
              className="inline-block break-all font-serif text-2xl text-foreground transition-colors duration-300 hover:text-primary md:text-4xl"
            >
              cleven2024@gmail.com
            </a>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Open for freelance projects, collaborations, and job
              opportunities. Available for backend development, AI integration,
              and technical consulting.
            </p>
          </div>

          <div className="animate-on-scroll delay-2 mt-8 flex flex-wrap gap-6">
            {[
              {
                href: 'tel:+255692654000',
                label: '+255 692 654 000',
                icon: Phone,
              },
              {
                href: 'https://wa.me/255692654000',
                label: 'WhatsApp',
                icon: MessageCircle,
                external: true,
              },
              {
                href: 'https://tz.linkedin.com/in/cleven-godson-0140b1355',
                label: 'LinkedIn',
                icon: Linkedin,
                external: true,
              },
              {
                href: 'https://github.com/Cleven12',
                label: 'GitHub',
                icon: Github,
                external: true,
              },
            ].map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <Icon size={16} />
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              )
            })}
          </div>

          {/* Quick info cards */}
          <div className="animate-on-scroll delay-3 mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <h3 className="font-serif text-lg text-primary">Availability</h3>
              <p className="mt-1 text-sm text-secondary-foreground">
                Currently available for new projects and collaborations.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <h3 className="font-serif text-lg text-primary">Location</h3>
              <p className="mt-1 text-sm text-secondary-foreground">
                Based in Tanzania, available for remote work worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
