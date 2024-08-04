import Link from "next/link";

/**
 *
 * 联系
 */
export default function ContactLinks() {
  return (
    <ul id="article-list">
      <li className="text-sm">
        <span className="inline-block w-16">Email</span>
        <Link href="mailto:chengyongliu@foxmail.com" className="text-blue-600">
          38D46461FDD62995
        </Link>
      </li>
      <li className="text-sm">
        <span className="inline-block w-16">Github</span>
        <Link
          href="https://github.com/Chrismax-Merry"
          className="text-blue-600"
        >
          3120ABDB795C76FF
        </Link>
      </li>
      <li className="text-sm">
        <span className="inline-block w-16">Twitter</span>
        <Link href="https://x.com/ID_54986830665" className="text-blue-600">
          298D4855ABB14E3C
        </Link>
      </li>
      <li className="text-sm">
        <span className="inline-block w-16">BiliBili</span>
        <Link
          href="https://space.bilibili.com/525626978"
          className="text-blue-600"
        >
          D86A8363D31C4CD1
        </Link>
      </li>
    </ul>
  );
}
