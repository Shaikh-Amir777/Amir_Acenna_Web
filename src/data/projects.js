export const projects = [
  {
    id: 'digital-experience-platform',
    tag: 'ENTERPRISE PLATFORM',
    title: 'Digital Experience Platform',
    headline: 'Omnichannel Customer Engagement at Scale',
    description: 'A scalable digital platform designed to simplify customer engagement and enterprise operations across distributed multi-channel environments.',
    metrics: [
      { label: 'User Adoption', value: '3.2M Active Users' },
      { label: 'Latency', value: '<120ms Global P99' },
      { label: 'Conversion', value: '+34% Boost' }
    ],
    features: [
      'Micro-frontend architecture built with React and edge caching',
      'Unified identity and enterprise Single Sign-On (SSO)',
      'Real-time customer journey analytics and behavioral triggers',
      'Dynamic content delivery network with automated localization'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS CloudFront', 'Redis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'dashboard',
    ctaText: 'View Project Details'
  },
  {
    id: 'enterprise-workflow-platform',
    tag: 'WORKFLOW & AUTOMATION',
    title: 'Enterprise Workflow Platform',
    headline: 'Autonomous Process Orchestration Engine',
    description: 'Modern workflow automation solution helping teams manage complex business processes with built-in audit trails and compliance safeguards.',
    metrics: [
      { label: 'Cycle Time', value: '65% Reduction' },
      { label: 'Audit Compliance', value: '100% Traceability' },
      { label: 'Tasks Processed', value: '14M+ Daily' }
    ],
    features: [
      'Visual low-code workflow designer with version-controlled schemas',
      'Automated SLA monitoring, alert routing, and escalations',
      'Native connectors for SAP, Salesforce, Jira, and custom ERPs',
      'Enterprise role-based access control (RBAC) with SOC2 auditing'
    ],
    techStack: ['React', 'Python', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'workflow',
    ctaText: 'View Project Details'
  },
  {
    id: 'business-intelligence-platform',
    tag: 'ANALYTICS & DECISIONING',
    title: 'Business Intelligence Platform',
    headline: 'Unified Real-Time Decision Command Center',
    description: 'Data-driven dashboards and analytics designed to help organizations make faster decisions with self-service exploratory query capabilities.',
    metrics: [
      { label: 'Query Speed', value: '4.8x Acceleration' },
      { label: 'Data Sources', value: '45+ Unified' },
      { label: 'Daily Reports', value: '25,000+ Generated' }
    ],
    features: [
      'Sub-second aggregate analytics over petabyte-scale lakehouses',
      'Natural language query interface powered by conversational LLMs',
      'Collaborative annotations, report exports, and scheduled digests',
      'Fine-grained row and column level data security policies'
    ],
    techStack: ['Snowflake', 'Databricks', 'React', 'Tailwind CSS', 'FastAPI', 'Apache Superset'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
    mockupType: 'analytics',
    ctaText: 'View Project Details'
  }
];
