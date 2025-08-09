import { ChevronRight, Timer, Wallet, Terminal, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const features = [
  {
    title: "BFS",
    description: "Thematic roundups based on conferences or techniques.",
    icon: Timer,
    href: "/bfs",
  },
  {
    title: "DFS",
    description: "Each post is typically a closer look at a paper I have enjoyed reading.",
    icon: Wallet,
    href: "/dfs",
  },
  {
    title: "Problems",
    description: "Highlights from problem sets that feature in assessments.",
    icon: Terminal,
    href: "/problems",
  },
  {
    title: "Puzzles",
    description: "Favorite puzzles, typically interactive and playable. Solutions invited.",
    icon: Calendar,
    href: "/puzzles",
  },
  {
    title: "Reviews",
    description: "Reviews of things I use or consume: software, books, hardware, etc.",
    icon: Timer,
    href: "/reviews",
  },
  {
    title: "Reflections",
    description: "Random musings, pseudo-advice, how-tos. Core dumped.",
    icon: Wallet,
    href: "/reflections",
  },
  {
    title: "Vibes",
    description: "Conversations with LLMs with an intent to create something meaningful.",
    icon: Terminal,
    href: "/vibes",
  },
  {
    title: "Workflows",
    description: "Little automations and rituals that I've found useful.",
    icon: Calendar,
    href: "/workflows",
  },
  {
    title: "Magic",
    description: "Self-working card tricks: thoughts from a classroom context.",
    icon: Timer,
    href: "/magic",
  },
  {
    title: "Contests",
    description: "Editorials from contest problems, mostly informatics and math",
    icon: Wallet,
    href: "/contests",
  },
  {
    title: "Art",
    description: "This exists so I can stay accountable to my doodling practice :)",
    icon: Terminal,
    href: "/art",
  },
  {
    title: "Poetry",
    description: "Failed attempts at organizing thoughts in verse.",
    icon: Calendar,
    href: "/poetry",
  },
];

export default function AllBlogs() {
  return (
    <section id="ai-chatbot" className="relative py-16 md:py-28 lg:py-32">
      <div className="container max-w-5xl">
        <div className="text-center">
          <h3 className="mini-title">CURRENTLY ACTIVE BLOGS</h3>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 md:mt-12 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="max-md:p-3">
                {/* <feature.icon className="text-primary size-8" /> */}
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <CardDescription className="text-foreground mt-4 font-medium">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto max-md:p-3">
                <Button
                  variant="outline"
                  asChild
                  className="border-border group w-[min(100%,300px)]"
                >
                  <a href={feature.href}>
                    Read On
                    <span className="sr-only">
                      {" "}
                      about {feature.description.toLowerCase()}
                    </span>
                    <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
