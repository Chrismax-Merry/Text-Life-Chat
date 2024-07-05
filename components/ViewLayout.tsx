import BackToTop from "./BackToTop";

interface Props {
  children: React.ReactNode;
}

export default function ViewLayout({ children }: Props) {
  return (
    <div className="bg-white max-w-4xl mx-auto min-h-screen md:border-solid md:border-[#ccc] md:border-[1px] md:shadow-[2px_2px_8px_#aaa] md:mt-[1.5em] md:mb-[.5em] py-[1.5em] px-[2em]">
      <BackToTop />
      {children}
    </div>
  );
}
