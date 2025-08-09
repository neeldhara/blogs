import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("poetry");
  return rss({
    title: "Poetry - Code in Verse",
    description: "Programming concepts expressed through haikus, sonnets, and creative verse.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/poetry/${post.id}/`,
    })),
  });
}
