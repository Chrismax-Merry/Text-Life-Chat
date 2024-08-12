import ArticleLinks from "@/components/ArticleLinks";

export default function Home() {
  return (
    <main>
      <div className="text-center font-bold text-[1.4em] leading-[1.5em] pb-[10px] my-[20px]">
        《杂谈》
      </div>
      <section>
        <h2 className="text-[1.2em] pb-[5px] overflow-hidden border-b-[1px] border-solid border-[#ddd] my-4">
          目录
        </h2>
        <ArticleLinks />
      </section>
    </main>
  );
}
