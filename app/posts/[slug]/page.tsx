import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Comment from "@/components/Comment";
import MDX from "@/components/MDX";
import Link from "next/link";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const doc = allDocs.find(
    (doc) => doc.slug === decodeURIComponent(params.slug)
  );
  return {
    title: `${doc?.title} | 杂谈`,
    description: doc?.description,
    keywords: doc?.labels.join(","),
  };
};

export default function PostLayout({ params }: { params: { slug: string } }) {
  const doc = allDocs.find(
    (doc) => doc.slug === decodeURIComponent(params.slug)
  );
  if (!doc) {
    return notFound();
  }

  return (
    <div className="page">
      <article>
        <div className="text-sm text-blue-600">
          <Link href="/">首页</Link>&nbsp;
          <span className="text-slate-800">»</span>&nbsp;
          <span>{doc.title}</span>
        </div>
        <div className="my-6 text-[1.8em] border-b-[1px] border-dashed border-[#ddd] pb-3 text-center">
          {doc.title}
        </div>
        <MDX code={doc.body.code} />
        <div className="text-right text-sm text-blue-600 mt-4">
          {doc.labels.map((label) => (
            <span key={label} className="ml-3">
              #{label.trim()}
            </span>
          ))}
        </div>
      </article>
      <Comment term={doc.title} />
    </div>
  );
}
