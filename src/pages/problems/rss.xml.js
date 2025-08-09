import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("problems");
  return rss({
    title: "Problems - Algorithmic Challenges and Solutions",
    description: "Interesting problems from contests, assessments, and real-world applications with detailed solutions.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/problems/${post.id}/`,
    })),
  });
}
