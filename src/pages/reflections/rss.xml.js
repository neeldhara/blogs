import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("reflections");
  return rss({
    title: "Reflections - Thoughts on Teaching, Learning, and Life",
    description: "Personal reflections on academia, teaching philosophy, and the journey of continuous learning.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/reflections/${post.id}/`,
    })),
  });
}
