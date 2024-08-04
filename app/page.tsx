import ArticleLinks from "@/components/ArticleLinks";
import ContactLinks from "@/components/ContactLinks";
import ViewLinks from "@/components/ViewLinks";
import links from "@/helper/links";
import otherLinks from "@/helper/otherLinks";

export default function Home() {
  return (
    <main>
      <div className="text-center font-bold text-[1.4em] leading-[1.5em] pb-[10px] my-[20px]">
        Merry Chrismax.🍀
      </div>
      <section>
        <h2 className="text-[1.2em] pb-[5px] overflow-hidden border-b-[1px] border-solid border-[#ddd] my-4">
          文章
        </h2>
        <ArticleLinks />
      </section>
      <section>
        <h2 className="text-[1.2em] pb-[5px] overflow-hidden border-b-[1px] border-solid border-[#ddd] my-4">
          链接
        </h2>
        <ViewLinks data={links} />
      </section>
      <section>
        <h2 className="text-[1.2em] pb-[5px] overflow-hidden border-b-[1px] border-solid border-[#ddd] my-4">
          相关
        </h2>
        <ViewLinks data={otherLinks} />
      </section>
      <section>
        <h2 className="text-[1.2em] pb-[5px] overflow-hidden border-b-[1px] border-solid border-[#ddd] my-4">
          联系
        </h2>
        <ContactLinks />
      </section>
    </main>
  );
}
