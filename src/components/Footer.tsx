import { Github, Linkedin, Mail, Twitter, MessageCircle, Rss } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://github.com/Cleven12',
    label: 'GitHub profile',
    Icon: Github,
  },
  {
    href: 'https://tz.linkedin.com/in/cleven-godson-0140b1355',
    label: 'LinkedIn profile',
    Icon: Linkedin,
  },
  {
    href: 'https://twitter.com/',
    label: 'X / Twitter profile',
    Icon: Twitter,
  },
  {
    href: 'https://wa.me/255692654000',
    label: 'WhatsApp',
    Icon: MessageCircle,
  },
  {
    href: 'https://dev.to/',
    label: 'Dev.to profile',
    Icon: Rss,
  },
  {
    href: 'mailto:cleven2024@gmail.com',
    label: 'Send email',
    Icon: Mail,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 pb-24 md:pb-8">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center gap-5">
          {socialLinks.map((link) => {
            const Icon = link.Icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                  link.href.startsWith('mailto:')
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          &copy; {currentYear} Cleven G. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
