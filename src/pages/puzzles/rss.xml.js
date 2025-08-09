import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("puzzles");
  return rss({
    title: "Puzzles - Logic, Mathematics, and Interactive Challenges",
    description: "Mathematical puzzles, logic problems, and interactive challenges that teach algorithmic thinking.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/puzzles/${post.id}/`,
    })),
  });
}
