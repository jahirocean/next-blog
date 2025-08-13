import React from "react";
import { formatDate, getBlogPosts } from "../../utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { CustomMDX } from "@/components/mdx";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";


export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post)=>({
    slug: post.slug,
  }))
  
}


export default async function page({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const {slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}


