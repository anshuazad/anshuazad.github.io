export interface Engagement {
  name: string;
  /** Optional. Left unset for client work that should not be named. */
  client?: string;
  period: string;
  points: string[];
}

export interface Role {
  title: string;
  company: string;
  period: string;
  /** Optional badge on the timeline. Path under public/, or omit for initials. */
  logo?: string;
  engagements: Engagement[];
}

export const experience: Role[] = [
  {
    title: 'Advanced Data Science Associate Consultant · Data Scientist',
    company: 'ZS Associates',
    period: 'Jan 2026 – Present',
    logo: '/logos/zs.svg',
    engagements: [
      {
        name: 'GenAI Strategy Content Assistant',
        period: 'Jul 2026 – Present',
        points: [
          'Refactoring an MVP-stage GenAI strategy content platform, improving scalability, maintainability, and user experience.',
        ],
      },
      {
        name: 'Transfer Learning & Domain Adaptation',
        period: 'Mar 2026 – Jun 2026',
        points: [
          'Led an end-to-end transfer learning and domain adaptation initiative, owning project scoping, stakeholder communication, and client delivery.',
          'Evaluated baseline, scaling, PCA, and DANN approaches to transfer ESR1 signal from labeled Flatiron data to claims data lacking direct ESR1 testing, generating high-confidence ESR1 labels.',
          'Used Isolation Forest to identify a claims subpopulation resembling the Flatiron feature distribution, creating a cross-domain validation cohort and corroborating transfer-model false positives through supervised modeling.',
          'Developed an XGBoost-based PU learning framework to enrich ESR1 labels and align prevalence with industry benchmarks, generating national and regional treatment opportunity insights.',
        ],
      },
      {
        name: 'GenAI Insight Summarizer',
        period: 'Jan 2026 – Apr 2026',
        points: [
          'Built a GenAI-based insight summarization framework that identifies relevant KPIs across multiple data sources and leverages LLMs to generate analyst-style narrative summaries, reducing manual analysis for field teams.',
        ],
      },
    ],
  },
  {
    title: 'Decision Analytics Associate',
    company: 'ZS Associates',
    period: 'Jul 2023 – Dec 2025',
    logo: '/logos/zs.svg',
    engagements: [
      {
        name: 'GenAI Rep Chatbot',
        period: 'Jan 2025 – Dec 2025',
        points: [
          'Designed and implemented an automated GenAI evaluation framework measuring tool-call accuracy, SQL execution correctness, guardrail compliance, response consistency, and latency for release validation.',
          "Owned end-to-end production operations of the organisation's only live GenAI chatbot, including weekly releases, bug triage, refinements, and feature enhancements.",
          'Developed a code generation pipeline to answer unstructured business queries within defined domain and database constraints.',
          'Mentored two data science associates across project execution and operational handoffs.',
        ],
      },
      {
        name: 'Omnichannel Commercial & Medical Analytics',
        period: 'Jul 2023 – Dec 2024',
        points: [
          'Analyzed commercial analytics and decisioning problems across Canada, Japan, and Europe, evaluating the impact of Next Best Action (NBA) recommendations.',
          'Led stakeholder communication across Europe and drove the UK rollout of the NBA program, customizing NBA logic for the market through sensitivity analysis.',
          'Built a Python-based validation pipeline and automated bi-weekly KPI reporting using Python and SQL, reducing turnaround time from 1 day to under 5 minutes — received the Ace Associate Award and was selected for the Data Science Track Transfer Program.',
        ],
      },
    ],
  },
];
