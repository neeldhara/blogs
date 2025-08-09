import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("art");
  return rss({
    title: "Art - Visual Explorations in Computer Science",
    description: "Algorithmic sketches, generative art, and visual representations of computer science concepts.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/art/${post.id}/`,
    })),
  });
}
