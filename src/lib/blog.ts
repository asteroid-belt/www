import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export type BlogPost = CollectionEntry<'blog'>

const PAGE_SIZE = 12

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true
  })
  return posts.sort((a, b) => {
    const dateCompare = b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
    if (dateCompare !== 0) return dateCompare
    return a.id.localeCompare(b.id)
  })
}

export function filterByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return posts.filter((p) => p.data.category === category)
}

export function filterByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter((p) => p.data.tags.includes(tag))
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>()
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tags.add(tag)
    }
  }
  return [...tags].sort()
}

export function paginate(posts: BlogPost[], page: number) {
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE))
  if (page < 1 || page > totalPages) return null
  const start = (page - 1) * PAGE_SIZE
  return {
    posts: posts.slice(start, start + PAGE_SIZE),
    currentPage: page,
    totalPages,
  }
}

export const CATEGORIES = ['updates', 'technical', 'insights'] as const
