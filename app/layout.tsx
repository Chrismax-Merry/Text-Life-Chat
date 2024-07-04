import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ViewLayout from "@/components/ViewLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "時々、鹿を見かける | 文字艺术",
  authors: [{ name: "树深时见鹿", url: "https://liucy.cn" }],
  keywords: "Text, Blog, Chat, ACG",
  description: "树深时见鹿，溪午不闻钟。",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ViewLayout>{children}</ViewLayout>
      </body>
    </html>
  );
}