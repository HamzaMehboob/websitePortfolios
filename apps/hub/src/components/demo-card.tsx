import Image from "next/image";
import Link from "next/link";
import { getDemoUrl, type PortfolioDemo } from "@/lib/demos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DemoCard({ demo }: { demo: PortfolioDemo }) {
  const url = getDemoUrl(demo);
  const isLive = demo.status === "live" && url;

  const inner = (
    <>
      <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
        <Image src={demo.thumbnail} alt="" fill className="object-contain p-3 opacity-95" sizes="(max-width: 768px) 100vw, 33vw" />
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
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-0.5 dark:text-blue-400">
            View demo
            <span aria-hidden="true">→</span>
          </span>
        ) : (
          <Button disabled className="w-full" aria-disabled="true">
            Coming soon
          </Button>
        )}
      </CardContent>
    </>
  );

  if (isLive) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label={`Open ${demo.name} demo`}
      >
        <Card className="flex h-full flex-col overflow-hidden transition-shadow group-hover:shadow-md">
          {inner}
        </Card>
      </Link>
    );
  }

  return <Card className="flex h-full flex-col overflow-hidden">{inner}</Card>;
}
