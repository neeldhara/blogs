import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("reviews");
  return rss({
    title: "Reviews - Tools, Books, and Technology",
    description: "In-depth reviews of tools, books, hardware, and software for academics and developers.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/reviews/${post.id}/`,
    })),
  });
}
