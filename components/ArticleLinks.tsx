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
            <Link href={post.url} className="text-sm text-blue-600">
              <span className="mr-3">
                {format(new Date(post.created_at), "yyyy-MM-dd")}
              </span>
              {post.title}
            </Link>
            <p className="text-right text-xs">
              {post?.labels?.map((label: string, ind: number) => (
                <span className="mx-1" key={ind}>
                  #{label}
                </span>
              ))}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
