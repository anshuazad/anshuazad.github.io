import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One sentence, shown on the card. Lead with the outcome. */
    blurb: z.string(),
    period: z.string().optional(),
    stack: z.array(z.string()),
    /** The numbers a reader scans first. Keep to 2–4. */
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    /** Card image. Path under public/, e.g. '/thumbs/my-project.svg'. */
    thumbnail: z.string().optional(),
    /** Short domain label shown above the title, e.g. 'Healthcare'. */
    domain: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    /** Private working notes. Frontmatter is data — this never reaches the page. */
    todo: z.string().optional(),
    featured: z.boolean().default(false),
    /** Defaults to true so nothing publishes by accident. */
    draft: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
