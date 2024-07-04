import Link from "next/link";

/**
 *
 * 联系
 */
export default function ContactLinks() {
  return (
    <ul id="article-list">
      <li className="text-sm">
        Email by&nbsp;
        <Link href="mailto:chengyongliu@foxmail.com" className="text-blue-600">
          38D46461FDD62995
        </Link>
      </li>
      <li className="text-sm">
        Github by&nbsp;
        <Link href="https://github.com/LycixRemix" className="text-blue-600">
          6E9B2196ECF630F6
        </Link>
      </li>
      <li className="text-sm">
        Twitter by&nbsp;
        <Link href="https://x.com/ID_54986830665" className="text-blue-600">
          298D4855ABB14E3C
        </Link>
      </li>
      <li className="text-sm">
        BiliBili by&nbsp;
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
