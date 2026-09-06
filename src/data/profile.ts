export const profile = {
  name: 'Anshuman Azad',
  role: 'Data Scientist',
  headline: 'Data Scientist building GenAI systems that can be measured, not just demoed.',
  pitch:
    "I'm a data scientist at ZS Associates, working with pharma clients on applied ML and " +
    'generative AI. I built and owned the evaluation framework that gated releases for the ' +
    "organisation's only production GenAI chatbot, and led a transfer-learning study that " +
    'moved a biomarker signal from labeled clinical records into claims data where the test ' +
    'itself was never run. I care most about the unglamorous half of this work: baselines, ' +
    'validation harnesses, and knowing when a result is real.',
  location: 'India',
  email: 'anshuazad7@gmail.com',
  links: {
    github: 'https://github.com/anshuazad',
    linkedin: 'https://www.linkedin.com/in/anshumanazad',
  },
  /** Set to null to hide the resume link entirely. */
  resume: null as string | null,
} as const;

export const education = {
  institution: 'Indian Institute of Technology, Patna',
  degree: 'B.Tech, Metallurgical and Materials Engineering',
  extra: 'Economics (optional)',
  period: 'Jul 2019 – May 2023',
  detail: 'CGPA 8.3 / 10.0',
};
