import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("magic");
  return rss({
    title: "Magic - Mathematical Card Tricks and Illusions",
    description: "Self-working card tricks, mathematical principles in magic, and the beauty of algorithmic illusions.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/magic/${post.id}/`,
    })),
  });
}
