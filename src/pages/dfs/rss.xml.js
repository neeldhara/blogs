import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("dfs");
  return rss({
    title: "DFS - Deep Dives into Papers and Research",
    description: "In-depth analysis of research papers, algorithmic techniques, and theoretical computer science.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/dfs/${post.id}/`,
    })),
  });
}
