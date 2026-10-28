export const proofStats = [
  { value: '100+', label: 'Successful Projects', sub: 'Across Tier-1 Global Enterprises' },
  { value: '25%+', label: 'Average Efficiency Improvement', sub: 'Measured in OpEx and Throughput' },
  { value: '40%+', label: 'Faster Decision Making', sub: 'From Raw Ingestion to Executive Dashboards' },
  { value: '5+', label: 'Technology Domains', sub: 'Cloud, Data, AI, Platform, DevSecOps' },
];

export const caseStudies = [
  {
    id: 'data-platform-modernization',
    category: 'DATA ARCHITECTURE',
    title: 'Data Platform Modernization',
    result: '25% faster analytics',
    badgeColor: 'blue',
    description: 'Modernized enterprise data infrastructure and improved reporting performance for a Fortune 200 financial institution.',
    impact: [
      'Migrated legacy on-premise Oracle exadata to Snowflake Data Cloud with zero data divergence.',
      'Reduced nightly batch ETL runtimes from 8.5 hours to 42 minutes.',
      'Enabled self-service exploration for 1,200+ global risk and regulatory analysts.'
    ],
    tech: ['Snowflake', 'dbt', 'Apache Airflow', 'AWS', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    client: 'Global Asset Management Firm',
    duration: '6 Months'
  },
  {
    id: 'cloud-transformation',
    category: 'CLOUD INFRASTRUCTURE',
    title: 'Cloud Transformation',
    result: '40% infrastructure optimization',
    badgeColor: 'indigo',
    description: 'Moved critical workloads to scalable cloud architecture with automated elasticity and disaster recovery.',
    impact: [
      'Re-architected monolithic billing systems into containerized microservices on Amazon EKS.',
      'Implemented automated FinOps policies saving $1.4M annually in unused cloud resources.',
      'Achieved 99.995% service availability with multi-region active-active failover.'
    ],
    tech: ['AWS EKS', 'Terraform', 'Kubernetes', 'Istio', 'Prometheus', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    client: 'Multinational Telecommunications Provider',
    duration: '9 Months'
  },
  {
    id: 'intelligent-automation',
    category: 'ENTERPRISE AI',
    title: 'Intelligent Automation',
    result: '30% operational efficiency',
    badgeColor: 'cyan',
    description: 'Automated repetitive workflows using modern technology, intelligent document parsing, and agentic AI.',
    impact: [
      'Deployed proprietary LLM pipeline for processing 80,000+ monthly vendor invoices and contracts.',
      'Cut document processing cycle times from 4 business days to 3.5 minutes with 99.2% extraction accuracy.',
      'Integrated straight-through processing directly into SAP enterprise ledger.'
    ],
    tech: ['Python', 'Azure OpenAI', 'LangChain', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    client: 'Global Logistics & Supply Chain Operator',
    duration: '4 Months'
  },
  {
    id: 'business-intelligence',
    category: 'EXECUTIVE BI',
    title: 'Business Intelligence',
    result: '2x faster reporting',
    badgeColor: 'emerald',
    description: 'Created centralized analytics dashboards for leadership teams, breaking down cross-functional silos.',
    impact: [
      'Consolidated 18 disparate reporting systems into a unified executive KPI cockpit.',
      'Provided c-suite leadership with real-time revenue pacing, churn risk alerts, and margin forecasts.',
      'Decreased month-end financial close reporting latency by 50%.'
    ],
    tech: ['Databricks', 'PowerBI', 'Apache Spark', 'Azure Synapse', 'SQL'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    client: 'Healthcare Services Enterprise',
    duration: '5 Months'
  }
];

export const clientHighlightQuote = {
  quote: "The team brought strong technical expertise, deep architectural maturity, and an execution mindset that helped us achieve in 6 months what our internal squads had planned for 2 years.",
  author: "Marcus Vance",
  role: "Chief Technology & Data Officer",
  company: "OmniCorp Global Holdings"
};
