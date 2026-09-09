export interface Skill {
  name: string;
  /**
   * Tools render in the mono face, practices in the body face — so a library
   * reads differently from a thing you do, without extra structure.
   */
  kind?: 'tool' | 'practice';
  /** Core competencies. Emphasised, so the list has a hierarchy. */
  primary?: boolean;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

/**
 * `primary` marks what you want to be judged on. The five below are the ones
 * the experience section actually evidences — adjust to taste.
 * Items are listed primary-first, then tools, then practices.
 */
export const skills: SkillGroup[] = [
  {
    title: 'Data Science & Machine Learning',
    items: [
      { name: 'Python', kind: 'tool', primary: true },
      { name: 'SQL', kind: 'tool', primary: true },
      { name: 'Model evaluation', kind: 'practice', primary: true },
      { name: 'Transfer learning & domain adaptation', kind: 'practice', primary: true },
      { name: 'scikit-learn', kind: 'tool' },
      { name: 'XGBoost', kind: 'tool' },
      { name: 'pandas', kind: 'tool' },
      { name: 'NumPy', kind: 'tool' },
      { name: 'PySpark', kind: 'tool' },
      { name: 'Statistical modeling', kind: 'practice' },
      { name: 'Feature engineering', kind: 'practice' },
      { name: 'Experimentation', kind: 'practice' },
    ],
  },
  {
    title: 'Generative AI & LLM Systems',
    items: [
      { name: 'LLM evaluation frameworks', kind: 'practice', primary: true },
      { name: 'Retrieval-Augmented Generation', kind: 'practice' },
      { name: 'Function calling', kind: 'practice' },
      { name: 'Guardrail compliance testing', kind: 'practice' },
      { name: 'Code generation', kind: 'practice' },
      { name: 'Few-shot prompting', kind: 'practice' },
    ],
  },
  {
    title: 'Data Engineering & Deployment',
    items: [
      { name: 'AWS SageMaker', kind: 'tool' },
      { name: 'Databricks', kind: 'tool' },
      { name: 'Large-scale data pipelines', kind: 'practice' },
      { name: 'Regression testing', kind: 'practice' },
    ],
  },
];
