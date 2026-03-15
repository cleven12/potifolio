'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Home, User, Wrench, FolderOpen, Mail } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/skills', label: 'Skills', icon: Wrench },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navbar -- floating pill, top center */}
      <nav
        className={`
          fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 md:flex
          items-center gap-1 rounded-full border border-border px-2 py-2
          transition-all duration-500 ease-out
          ${
            scrolled
              ? 'border-border/80 bg-background/60 shadow-lg shadow-background/20 backdrop-blur-xl'
              : 'border-border/40 bg-secondary/80 backdrop-blur-sm'
          }
        `}
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative flex items-center gap-2 rounded-full px-4 py-2 text-sm
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? 'bg-primary font-medium text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                }
              `}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Mobile Navbar -- bottom tab bar, always visible */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl md:hidden"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-around px-2 py-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center gap-0.5 rounded-lg px-3 py-2
                  text-[10px] transition-all duration-300
                  ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground active:text-foreground'
                  }
                `}
              >
                <span
                  className={`
                    flex items-center justify-center rounded-full p-1.5
                    transition-all duration-300
                    ${isActive ? 'bg-primary/15' : ''}
                  `}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                </span>
                <span className={isActive ? 'font-medium' : ''}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Safe area spacer for devices with home indicator */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </>
  )
}
