import { defineCollection, z } from 'astro:content'

const SLUG_REGEX = /^[a-z0-9][a-z0-9-]*[a-z0-9]$/

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    category: z.enum(['updates', 'technical', 'insights']),
    tags: z
      .array(
        z
          .string()
          .regex(SLUG_REGEX, 'Tags must be lowercase alphanumeric with hyphens, min 2 chars')
      )
      .default([]),
    author: z.string().default('Asteroid Belt'),
    authorAvatar: z.string().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }
