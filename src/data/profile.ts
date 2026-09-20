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
  /** Short line under the greeting. Set to null to hide it. */
  tagline: null as string | null,
  /** Shown under the tagline in the hero. Set to null to hide. */
  employer: {
    label: 'Currently at',
    name: 'ZS Associates',
    logo: '/logos/zs.svg',
  } as { label: string; name: string; logo: string } | null,
  location: 'India',
  email: 'anshuazad7@gmail.com',
  links: {
    github: 'https://github.com/anshuazad',
    linkedin: 'https://www.linkedin.com/in/anshumanazad',
  },
  /**
   * Hero visual: a fitted line with its residuals, against the dashed
   * predict-the-mean baseline. Swap for any image in public/, or set to
   * null to hide it entirely.
   */
  heroImage: '/hero-fit.svg' as string | null,
  heroImageAlt:
    'A scatter plot with a fitted regression line, its residuals, and a dashed baseline representing predicting the mean',
  /** Set to null to hide the resume link entirely. */
  resume: null as string | null,
} as const;

export const education = {
  institution: 'Indian Institute of Technology, Patna',
  /** Short form, used if no logo is set. */
  short: 'IIT',
  /** Crest path under public/. Set to null to fall back to `short`. */
  logo: '/logos/iitp.webp' as string | null,
  degree: 'B.Tech, Metallurgical and Materials Engineering',
  extra: 'Economics (optional)',
  period: 'Jul 2019 – May 2023',
  detail: 'CGPA 8.3 / 10.0',
  /**
   * Leadership and activities that are not competition results — those live
   * in achievements.ts. Set to [] to hide.
   */
  activities: [
    'Founded the Trading & Investment Club — workshops, seminars and a mentorship programme.',
  ],
};
