import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      documents: z
        .array(
          z.object({
            url: image(),
            title: z.string(),
          }),
        )
        .optional(),
      tags: z.array(z.string()),
    }),
});
export const collections = {
  posts: postsCollection,
};
