import {
  Wrench,
  Code,
  Database,
  Brain,
  Link as LinkIcon,
  Bot,
  Server,
  CreditCard,
  Wallet,
  Banknote,
  HandCoins,
  GitBranch,
  Github,
  Terminal as TerminalIcon,
  Globe,
  Cpu,
  Workflow,
  ShieldCheck,
  Network,
  FlaskConical,
} from 'lucide-react'
import ScrollAnimator from '@/components/ScrollAnimator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills | Cleven G',
  description:
    'Technical skills and areas of expertise of Cleven G, CS student interested in software engineering.',
}

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { label: 'Python (Advanced)', Icon: Code },
      { label: 'PHP', Icon: Code },
      { label: 'SQL', Icon: Database },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { label: 'Django', Icon: Server },
      { label: 'Flask', Icon: FlaskConical },
      { label: 'RESTful API Design', Icon: Code },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { label: 'MySQL', Icon: Database },
      { label: 'PostgreSQL', Icon: Database },
      { label: 'Database Design & Optimization', Icon: Workflow },
    ],
  },
  {
    title: 'Payment Integration',
    skills: [
      { label: 'Stripe', Icon: CreditCard },
      { label: 'PayPal', Icon: Wallet },
      { label: 'Pesapal', Icon: Banknote },
      { label: 'DPO', Icon: HandCoins },
    ],
  },
  {
    title: 'AI/ML Engineering',
    skills: [
      { label: 'LangChain', Icon: LinkIcon },
      { label: 'Natural Language Processing', Icon: Brain },
      { label: 'AI Model Integration', Icon: Bot },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { label: 'Git', Icon: GitBranch },
      { label: 'GitHub', Icon: Github },
      { label: 'Linux', Icon: TerminalIcon },
    ],
  },
  {
    title: 'Areas of Expertise',
    skills: [
      { label: 'Software Development', Icon: Code },
      { label: 'Web Development (2 years)', Icon: Globe },
      { label: 'AI/ML Engineering', Icon: Cpu },
      { label: 'Backend Architecture', Icon: Workflow },
    ],
  },
  {
    title: 'Emerging Skills',
    skills: [
      { label: 'Cybersecurity', Icon: ShieldCheck },
      { label: 'Network Security Fundamentals', Icon: Network },
    ],
  },
]

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-28 pb-16 md:px-8 lg:px-12">
      <ScrollAnimator />

      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <div className="animate-on-scroll">
          <h1 className="flex items-center gap-2 font-serif text-xl text-primary md:text-2xl">
            <Wrench size={22} />
            Technical Skills
          </h1>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="animate-on-scroll">
              <h2 className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted"
                    style={{
                      transitionDelay: `${skillIndex * 50}ms`,
                    }}
                  >
                    <skill.Icon size={14} className="text-primary" />
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Collaboration CTA */}
          <div className="animate-on-scroll rounded-sm border-l-4 border-primary bg-secondary p-6">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Open to Collaboration
            </h2>
            <p className="mt-2 leading-relaxed text-secondary-foreground">
              I believe in sharing knowledge and helping others grow. Technology
              should bring us together, not create barriers. Let us learn and
              build together!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
