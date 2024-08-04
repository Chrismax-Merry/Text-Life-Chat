"use client";
import Link from "next/link";

interface LinksProps {
  title: string;
  to: string;
}

interface Props {
  data: LinksProps[];
}

export default function ViewLinks({ data }: Props) {
  return (
    <ul id="article-list">
      {data.map((link: LinksProps, index: number) => {
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
