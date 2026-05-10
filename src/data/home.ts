export const homeMeta = {
  title: 'Camille Aubert — Full-Stack Developer & AI Systems Architect',
  description:
    'Portfolio of Camille Aubert — 10 years of full-stack experience across web architecture, platform engineering and applied AI systems.',
};

export const homeContent = {
  hero: {
    eyebrow: 'Available for senior roles',
    title: 'AI Solutions Architect & Lead Full-Stack Developer',
    intro:
      'I design and build reliable AI systems and high-scale web platforms. With 10 years of full-stack experience, I work at the intersection of architecture, delivery and applied AI to turn complex environments into clear, usable products.',
    primaryCta: { label: 'View selected work', href: '#projects' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
    anchorLinks: [
      { label: 'Strengths', href: '#strengths' },
      { label: 'Proof', href: '#proof' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    panelLabel: 'Current direction',
    focus: [
      'Open to strategic leadership roles and high-impact architecture collaborations in AI and product engineering.',
    ],
  },
  positioning: {
    eyebrow: 'Core strengths',
    title: 'Architecture, delivery, and applied AI — in that order.',
    strengths: [
      {
        title: 'Applied AI Systems',
        text: 'Designing retrieval-based and AI-assisted systems with a focus on reliability, clarity and real-world usefulness.',
      },
      {
        title: 'Scalable Web Architecture',
        text: 'Building and evolving robust platforms across multi-site, multi-country environments with strong delivery constraints.',
      },
      {
        title: 'Technical Leadership',
        text: 'Bringing together product thinking, engineering execution and long-term technical standards.',
      },
    ],
  },
  careerHighlights: [
    {
      period: '10 years',
      role: 'Full-Stack Delivery',
      company: 'PHP · Laravel · React · Modern Web',
      description:
        'Built production systems across a wide range of contexts — from solo delivery to team leadership, from legacy PHP to modern stacks. Strong fluency with the full delivery cycle.',
      impact: 'Deep experience on both product and infrastructure layers.',
    },
    {
      period: 'Since 2023',
      role: 'Cegos Group',
      company: '13 websites · 7 countries · ecommerce & lead-gen',
      description:
        'Contributing to the evolution of a large-scale multi-country digital platform — Laravel, React and WordPress — with strong performance, conversion and international delivery requirements.',
      impact: 'AWS infrastructure, CI/CD and agile cross-functional delivery.',
    },
    {
      period: 'Applied',
      role: 'Production AI Systems',
      company: 'Retrieval · LLM integration · Automation',
      description:
        'Practical work on AI-assisted workflows and retrieval-based architectures, designed to be useful, measurable and maintainable in real-world production environments.',
      impact: 'Focus on reliability and operational adoption, not experimentation.',
    },
  ],
  projects: [
    {
      category: 'AI Systems',
      title: 'Enterprise Retrieval Systems',
      summary:
        'Designed and improved retrieval-based architectures for enterprise knowledge access and AI-assisted workflows.',
      href: '/projects',
    },
    {
      category: 'Platform Architecture',
      title: 'Cegos Platform Ecosystem',
      summary:
        'Contributed to the evolution of a multi-country digital platform built on Laravel, React and WordPress, with strong performance and conversion requirements.',
      href: '/projects',
    },
    {
      category: 'Performance & SEO',
      title: 'Performance & SEO Engineering',
      summary:
        'Built and optimized experimental and client-facing web projects focused on rendering speed, SEO quality and implementation discipline.',
      href: '/projects',
    },
  ],
  skills: [
    {
      group: 'AI & systems',
      items: ['RAG pipelines', 'LLM integration', 'Retrieval systems', 'Applied automation'],
    },
    {
      group: 'Platform',
      items: ['Laravel', 'React', 'WordPress', 'Docker', 'AWS'],
    },
    {
      group: 'Delivery',
      items: ['CI/CD', 'Performance tuning', 'Technical SEO', 'Ecommerce'],
    },
  ],
  contact: {
    eyebrow: 'Work together',
    title: "Let's build reliable, intelligent products at scale.",
    text: 'Available for senior engineering and architecture roles, technical leadership mandates, and AI systems projects where execution and reliability matter.',
    primary: { label: 'Email Camille', href: 'mailto:aubertcam@gmail.com' },
    secondary: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/camille-aubert-27760a56/' },
    availability: [
      'Senior architecture and engineering mandates.',
      'Applied AI projects with a production focus.',
      'Technical leadership in complex digital environments.',
    ],
  },
} as const;
