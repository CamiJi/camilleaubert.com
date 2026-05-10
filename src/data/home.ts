export const homeMeta = {
  title: 'Camille Aubert — AI Solutions Architect & Lead Full-Stack Developer',
  description:
    'Portfolio of Camille Aubert focused on AI systems, platform engineering, and production-grade digital delivery.',
};

export const homeContent = {
  hero: {
    eyebrow: 'Portfolio',
    title: 'AI Solutions Architect & Lead Full-Stack Developer',
    intro:
      'I design and ship production-grade digital systems where AI, platform reliability, and measurable performance meet.',
    primaryCta: { label: 'View selected work', href: '#projects' },
    secondaryCta: { label: 'Start a conversation', href: '#contact' },
    anchorLinks: [
      { label: 'Career', href: '#career' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    focus: [
      'Industrializing production-ready RAG pipelines.',
      'Designing agentic architectures for enterprise-scale services.',
      'Optimizing high-availability web platforms and delivery workflows.',
    ],
    badge: 'Migration draft content',
  },
  positioning: {
    eyebrow: 'Short intro',
    title: 'Production-first architecture for intelligent products.',
    text:
      'I help teams move from fragmented implementation to a coherent system: a clear story, reliable delivery, and a technical foundation that can support both growth and AI-enabled features.',
    note: 'Temporary copy structure. Replace with the final brand narrative once the migration direction is locked.',
  },
  careerHighlights: [
    {
      period: '2024 - present',
      role: 'Lead Full-Stack / AI Architecture',
      company: 'Cegos Group',
      description:
        'Own production-facing architecture work around AI integration, maintainable delivery, and platform evolution.',
      impact: 'Focus on reliability, scale, and practical AI adoption.',
    },
    {
      period: '10+ years',
      role: 'Technical Delivery Experience',
      company: 'Independent and enterprise environments',
      description:
        'Shaped web platforms, operational workflows, and implementation standards across product and infrastructure layers.',
      impact: 'Strong bias toward maintainability and business impact.',
    },
    {
      period: 'Ongoing',
      role: 'Systems Thinking',
      company: 'Portfolio direction',
      description:
        'Treat the portfolio as an operating system for credibility: concise positioning, evidence, and clear next steps.',
      impact: 'Content structure should communicate trust quickly.',
    },
  ],
  projects: [
    {
      category: 'AI Systems',
      title: 'Industrial RAG Infrastructure',
      summary:
        'Generative AI systems for mission-critical knowledge management and decision support.',
      impact: 'Built for accuracy, traceability, and repeatable delivery.',
      href: '/projects',
    },
    {
      category: 'Platform Architecture',
      title: 'Enterprise Platform Evolution',
      summary:
        'Containerized delivery and architectural work for a large-scale training platform.',
      impact: 'Designed for stability, scale, and maintainability.',
      href: '/projects',
    },
    {
      category: 'Performance & SEO',
      title: 'Technical Performance Lab',
      summary:
        'High-speed implementation and conversion-focused experimentation on a public-facing site.',
      impact: 'Optimized for fast rendering and measurable acquisition outcomes.',
      href: '/projects',
    },
  ],
  skills: [
    {
      group: 'AI & systems',
      items: ['RAG', 'LLM orchestration', 'Automation', 'Agent workflows'],
    },
    {
      group: 'Platform',
      items: ['Laravel', 'React', 'Docker', 'AWS'],
    },
    {
      group: 'Delivery',
      items: ['CI/CD', 'Performance tuning', 'SEO', 'Maintainability'],
    },
  ],
  contact: {
    eyebrow: 'Contact',
    title: 'Ready to shape the next layer of the site?',
    text:
      'This migration phase is about setting up a cleaner structure. The final content pass can now slot into a stable home layout without reworking the whole site.',
    primary: { label: 'Email Camille', href: 'mailto:aubertcam@gmail.com' },
    secondary: { label: 'Open LinkedIn', href: 'https://www.linkedin.com/in/camille-aubert-27760a56/' },
    notes: [
      'Migration draft copy is still visible in a few places.',
      'Case-study depth and final brand voice will be refined later.',
    ],
  },
} as const;
