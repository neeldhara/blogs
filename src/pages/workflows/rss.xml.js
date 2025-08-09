import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("workflows");
  return rss({
    title: "Workflows - Productivity and Automation",
    description: "Efficient workflows, automation scripts, and productivity tools for developers and academics.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/workflows/${post.id}/`,
    })),
  });
}
