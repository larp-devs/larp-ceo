export interface Feature {
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  items: string[];
}

export const features: Feature[] = [
  {
    title: "Repository Management",
    description: "Automated issue triage, PR reviews, dependency updates, release management, and code quality monitoring."
  },
  {
    title: "Social Media Management",
    description: "Content generation, community engagement, sentiment analysis, trend analysis, and automated announcements."
  },
  {
    title: "Strategic Planning",
    description: "Roadmap development, market analysis, feature prioritization, and partnership identification."
  },
  {
    title: "Community Management",
    description: "Forum moderation, event organization, contributor recognition, and community feedback analysis."
  },
  {
    title: "Resource Management",
    description: "Budget allocation, talent acquisition, developer time management, and pipeline optimization."
  },
  {
    title: "Data Analysis & Reporting",
    description: "Project metrics tracking, report generation, security vulnerability reporting, and user behavior analysis."
  }
];

export const capabilities: Capability[] = [
  {
    title: "Repository Management",
    items: [
      "Automated issue triage",
      "Pull request review & merging",
      "Dependency management",
      "Release management",
      "Code quality monitoring"
    ]
  },
  {
    title: "Social Media Management",
    items: [
      "Content generation",
      "Community engagement",
      "Sentiment analysis",
      "Trend analysis",
      "Automated announcements"
    ]
  },
  {
    title: "Strategic Planning",
    items: [
      "Roadmap development",
      "Market analysis",
      "Feature prioritization",
      "Partnership identification",
      "Project metric analysis"
    ]
  },
  {
    title: "Community Management",
    items: [
      "Forum moderation",
      "Event organization",
      "Contributor recognition",
      "Contributor onboarding",
      "Community feedback analysis"
    ]
  },
  {
    title: "Resource Management",
    items: [
      "Budget allocation",
      "Talent acquisition",
      "Developer time management",
      "Pipeline optimization"
    ]
  },
  {
    title: "Data Analysis & Reporting",
    items: [
      "Project metrics tracking",
      "Report generation",
      "Security vulnerability reporting",
      "User behavior analysis"
    ]
  },
  {
    title: "Legal & Ethical Considerations",
    items: [
      "License compliance",
      "Intellectual property management",
      "Code of conduct maintenance",
      "Ethical concern monitoring"
    ]
  },
  {
    title: "Communication & Collaboration",
    items: [
      "Automated email updates",
      "Communication platform integration",
      "Meeting automation",
      "Localization"
    ]
  },
  {
    title: "Learning & Adaptation",
    items: [
      "Technology adaptation",
      "Feedback loop implementation",
      "Ecosystem monitoring"
    ]
  },
  {
    title: "Security Monitoring",
    items: [
      "Automated security scans",
      "Incident response",
      "Security best practices"
    ]
  },
  {
    title: "Fundraising/Sponsorship",
    items: [
      "Sponsor identification",
      "Campaign management",
      "Sponsor reporting"
    ]
  },
  {
    title: "User Support",
    items: [
      "Automated responses",
      "Tutorial creation",
      "Issue routing"
    ]
  },
  {
    title: "API Management",
    items: [
      "API documentation",
      "API usage monitoring",
      "API key management"
    ]
  },
  {
    title: "Localization/Internationalization",
    items: [
      "Translation management",
      "Cultural adaptation"
    ]
  },
  {
    title: "Performance Optimization",
    items: [
      "Code profiling",
      "Bottleneck resolution",
      "Resource optimization"
    ]
  },
  {
    title: "AI Model Integration",
    items: [
      "Data gathering",
      "Model training",
      "Model implementation"
    ]
  },
  {
    title: "Game System Testing",
    items: [
      "Test suite creation",
      "Regular test runs",
      "Test result reporting"
    ]
  },
  {
    title: "Game Balance Analysis",
    items: [
      "Gameplay data analysis",
      "Balance issue identification",
      "Balance change implementation"
    ]
  },
  {
    title: "Content Creation",
    items: [
      "Game content generation",
      "Content documentation",
      "Content distribution"
    ]
  },
  {
    title: "Developer Partnerships",
    items: [
      "Partner identification",
      "Partnership management",
      "Collaborative project coordination"
    ]
  }
];
