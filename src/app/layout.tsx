import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigationMenu from "@/components/layout/TopNavigationMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adder's Library",
  description: "List of Adder's book collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " bg-gradient-to-r from-slate-900 to-slate-700 "
        }
      >
        <div className="w-full flex justify-between p-2 px-6 bg-gradient-to-r from-emerald-500 to-emerald-900">
          <TopNavigationMenu />
        </div>
        {children}
      </body>
    </html>
  );
}
