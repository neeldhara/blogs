import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("contests");
  return rss({
    title: "Contests - Competitive Programming and Problem Analysis",
    description: "Analysis of programming contests, problem breakdowns, and strategies for competitive programming.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/contests/${post.id}/`,
    })),
  });
}
