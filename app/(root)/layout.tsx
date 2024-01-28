import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shafi D.",
  description: "Shafi D. Full stack web dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${noto.className} bg-dark-1 h-full w-full`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
