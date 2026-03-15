import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-serif-loaded',
})

const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans-loaded',
})

export const metadata: Metadata = {
  title: 'Cleven G - CS Student & Software Engineering Enthusiast | Tanzania',
  description:
    'Cleven G is a CS student from Tanzania with a focus on software engineering. Experienced with Django, Flask, Python, PHP, MySQL, PostgreSQL, payment integrations, and AI/ML.',
  keywords:
    'Cleven G, CS Student Tanzania, Software Engineering, Django Developer, Flask Developer, Python Developer, PHP Developer, MySQL, PostgreSQL, REST API, AI/ML, LangChain, Payment Integration, Stripe, PayPal, Pesapal, DPO, GitHub, Cleven12',
  authors: [{ name: 'Cleven G' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://cleven.netlify.app/',
    title: 'Cleven G - CS Student & Software Engineering Enthusiast | Tanzania',
    description:
      'CS student from Tanzania interested in software engineering. Building web applications with Django, Flask, and exploring AI/ML.',
    siteName: 'Cleven G',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleven G - CS Student & Software Engineering Enthusiast',
    description:
      'CS student from Tanzania interested in software engineering. Building with Django, Flask, and exploring AI/ML.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://cleven.netlify.app/" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Cleven G',
              url: 'https://cleven.netlify.app',
              sameAs: [
                'https://github.com/Cleven12',
                'https://tz.linkedin.com/in/cleven-godson-0140b1355',
              ],
              jobTitle: 'CS Student & Software Engineering Enthusiast',
              worksFor: {
                '@type': 'EducationalOrganization',
                name: 'University',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Tanzania',
              },
              knowsAbout: [
                'Software Engineering',
                'Django',
                'Flask',
                'Python',
                'PHP',
                'MySQL',
                'PostgreSQL',
                'REST API',
                'LangChain',
                'AI/ML',
                'Backend Development',
                'Payment Integration',
                'Stripe',
                'PayPal',
                'Pesapal',
                'DPO',
              ],
              description:
                'CS student from Tanzania with a focus on software engineering. Building web applications with Django, Flask, and exploring AI/ML.',
            }),
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pb-20 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
