"use client";

import Link from "next/link";
import type { Docs } from "contentlayer/generated";
import { allDocs } from "contentlayer/generated";
import { compareDesc, format } from "date-fns";

/**
 *
 * 文章
 */
export default function ArticleLinks() {
  const allList: Docs[] = allDocs.sort((a, b) =>
    compareDesc(new Date(a.created_at), new Date(b.created_at))
  );
  return (
    <ul id="article-list">
      {allList?.map((post, index: number) => {
        return (
          <li key={index}>
            <Link href={post.url} className="text-sm">
              <span className="mr-3 text-[#666] inline-block w-[90px]">
                {format(new Date(post.created_at), "yyyy-MM-dd")}
              </span>
              <span className="text-[#333] hover:text-[#0078E7]">
                {post.title}
              </span>
            </Link>
            <p className="text-right text-xs hidden md:block">
              <span className="mx-1 text-[#666]">{post?.labels?.[0]}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
