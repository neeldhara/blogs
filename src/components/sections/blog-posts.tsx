import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User } from "lucide-react";
import { PlusSigns } from "../icons/plus-signs";

const BlogPosts = ({ posts, collection }: { posts: any[]; collection: string }) => {
  // Get the first post as the featured post
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="relative py-16 md:py-28 lg:py-32">

          
          <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
            <PlusSigns className="text-foreground/[0.05] h-full w-full" />
          </div>

      {/* Featured Post */}
      <section className="mt-8">
        <div className="container max-w-6xl">
          <a
            href={`/${collection}/${featuredPost.id}/`}
            className="bg-card group relative mb-16 overflow-hidden rounded-xl border shadow-md"
          >
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-1/2">
                <div className="p-2 lg:p-4">
                  <img
                    src={featuredPost.data.image}
                    alt={featuredPost.data.title}
                    className="aspect-video w-full rounded-lg object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-4 pb-8 lg:w-1/2 lg:pr-8">
                <Badge variant="outline" className="mb-3 w-fit">
                  Featured Post
                </Badge>
                <h2 className="mb-3 text-2xl font-bold group-hover:underline md:text-3xl">
                  {featuredPost.data.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3 text-base">
                  {featuredPost.data.description}
                </p>

                <div className="mb-6 flex gap-4">
                  <div className="text-muted-foreground flex items-center text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(featuredPost.data.pubDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </div>
                  <div className="text-muted-foreground flex items-center text-sm">
                    <Clock className="mr-1 h-4 w-4" />5 min read
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Regular Posts Grid */}
      <section className="mt-8">
        <div className="container max-w-6xl">
          <h2 className="mb-8 text-xl font-semibold md:text-2xl">
            Recent Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <a
                key={post.id}
                className="bg-card group rounded-xl border shadow-sm transition-all hover:shadow-md"
                href={`/${collection}/${post.id}/`}
              >
                <div className="p-2">
                  <img
                    src={post.data.image}
                    alt={post.data.title}
                    className="aspect-video w-full rounded-lg object-cover transition-transform group-hover:scale-[1.01]"
                  />
                </div>
                <div className="px-4 pb-5 pt-2">
                  <h2 className="mb-2 text-xl font-semibold group-hover:underline">
                    {post.data.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {post.data.description}
                  </p>

                  <div className="text-muted-foreground mt-3 flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>
                        {new Date(post.data.pubDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { BlogPosts };
