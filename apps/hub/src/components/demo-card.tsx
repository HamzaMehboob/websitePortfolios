import Image from "next/image";
import Link from "next/link";
import { getDemoUrl, type PortfolioDemo } from "@/lib/demos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DemoCard({ demo }: { demo: PortfolioDemo }) {
  const url = getDemoUrl(demo);
  const isLive = demo.status === "live" && url;

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
        <Image src={demo.thumbnail} alt="" fill className="object-cover p-6 opacity-90" />
      </div>
      <CardHeader>
        <CardTitle>{demo.name}</CardTitle>
        <CardDescription>{demo.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {demo.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {isLive ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            View Demo
          </Link>
        ) : (
          <Button disabled className="w-full" aria-disabled="true">
            Coming soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
