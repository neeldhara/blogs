import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  image: z.string().optional(),
  authorImage: z.string().optional(),
  authorName: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const bfs = defineCollection({
  loader: glob({ base: "./src/content/bfs", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const dfs = defineCollection({
  loader: glob({ base: "./src/content/dfs", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const problems = defineCollection({
  loader: glob({ base: "./src/content/problems", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const puzzles = defineCollection({
  loader: glob({ base: "./src/content/puzzles", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const reviews = defineCollection({
  loader: glob({ base: "./src/content/reviews", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const reflections = defineCollection({
  loader: glob({ base: "./src/content/reflections", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const vibes = defineCollection({
  loader: glob({ base: "./src/content/vibes", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const workflows = defineCollection({
  loader: glob({ base: "./src/content/workflows", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const magic = defineCollection({
  loader: glob({ base: "./src/content/magic", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const contests = defineCollection({
  loader: glob({ base: "./src/content/contests", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const art = defineCollection({
  loader: glob({ base: "./src/content/art", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const poetry = defineCollection({
  loader: glob({ base: "./src/content/poetry", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

export const collections = {
  blog,
  bfs,
  dfs,
  problems,
  puzzles,
  reviews,
  reflections,
  vibes,
  workflows,
  magic,
  contests,
  art,
  poetry,
};
