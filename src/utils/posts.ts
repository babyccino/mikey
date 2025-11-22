import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"posts">;

export function sort(a: Post, b: Post) {
  if (b.data.pubDate != undefined && a.data.pubDate != undefined) {
    return (
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );
  }
  if (a.data.pubDate != undefined) return -1;
  if (b.data.pubDate != undefined) return 1;
  return a.data.title.localeCompare(b.data.title);
}
