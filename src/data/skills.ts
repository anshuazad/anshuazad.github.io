export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Data Science & Machine Learning',
    items: [
      'Python',
      'PySpark',
      'pandas',
      'NumPy',
      'scikit-learn',
      'SQL',
      'Statistical modeling',
      'Feature engineering',
      'Model evaluation',
      'Experimentation',
    ],
  },
  {
    title: 'Generative AI & LLM Systems',
    items: [
      'LLM evaluation frameworks',
      'Function calling',
      'Retrieval-Augmented Generation',
      'Code generation',
      'Few-shot prompting',
      'Guardrail compliance testing',
      'Enterprise GenAI applications',
    ],
  },
  {
    title: 'Data Engineering & Deployment',
    items: [
      'Large-scale data pipelines',
      'Validation frameworks',
      'Automated workflows',
      'Regression testing',
      'AWS SageMaker',
      'Databricks',
    ],
  },
];
