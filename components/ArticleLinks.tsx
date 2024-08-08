"use client";

import Link from "next/link";
import clsx from "clsx";
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
            <Link href={post.url} className="text-sm text-blue-600">
              <span className="mr-3">
                {format(new Date(post.created_at), "yyyy-MM-dd")}
              </span>
              <span
                className={clsx({ "text-[#E74C3C] font-bold": post.is_hots })}
              >
                {post.title}
              </span>
            </Link>
            <p className="text-right text-xs">
              <span className="mx-1 text-[#666]">{post?.labels?.[0]}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
