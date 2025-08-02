import { POSTS } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post) => (
        <Button
          variant={"secondary"}
          className="hover:scale-105 transition-all"
          key={post.title}
        >
          <Link href={post.href}>{post.title}</Link>
        </Button>
      ))}
    </div>
  );
}
