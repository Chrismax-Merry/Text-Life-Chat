"use client";
import links from "@/helper/links";
import Link from "next/link";

interface Props {
  title: string;
  to: string;
}

export default function ViewLinks() {
  return (
    <ul id="article-list">
      {links.map((link: Props, index: number) => {
        return (
          <li key={index}>
            <Link
              href={link.to}
              target="_blank"
              className="text-sm text-blue-600"
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
