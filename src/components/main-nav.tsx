"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./Icons";
import { ModeToggle } from "./ui/mode-toggle";

const posts: { title: string; href: string; description: string }[] = [
  {
    title: "React",
    href: "/blog/react",
    description:
      "Learn React.js and Next.js in a simple to understand articles",
  },
  {
    title: "Javascript",
    href: "/blog/javascript",
    description: "Learn what are new in the javascript world",
  },
  {
    title: "CSS",
    href: "/blog/css",
    description: "Everything about CSS and the new features.",
  },
  {
    title: "Performance",
    href: "/blog/performance",
    description: "How to make your next app Blazing fast",
  },
  {
    title: "Animation",
    href: "/blog/animations",
    description:
      "Everything you need to know about animations. We are going to learn about animation library like framer motion, GSAP and many more.",
  },
  {
    title: "Career",
    href: "/blog/career",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MainNav({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-start md:flex-row md:items-center md:justify-between pt-10 z-50",
        className
      )}
    >
      <Link href={"/"}>
        <div className="flex items-center justify-between w-32">
          <Icons.logo className="h-6 w-6" />
          <p>Coding Jitsu</p>
        </div>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {posts.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
          <div className="flex items-center justify-between w-20">
            <ModeToggle />
            <Link href="/rss">
              <Icons.rss className="h-6 w-6" />
            </Link>
          </div>
    </div>
  );
}



  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";