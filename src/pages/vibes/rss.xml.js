import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("vibes");
  return rss({
    title: "Vibes - AI Conversations and Creative Explorations",
    description: "Philosophical dialogues with AI, creative coding experiments, and explorations at the intersection of technology and consciousness.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/vibes/${post.id}/`,
    })),
  });
}
