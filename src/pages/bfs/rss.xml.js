import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("bfs");
  return rss({
    title: "BFS - Breadth-First Search Through Computer Science",
    description: "Conference highlights, algorithmic breakthroughs, and cutting-edge research in computer science.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/bfs/${post.id}/`,
    })),
  });
}
