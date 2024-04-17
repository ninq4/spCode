import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ['700', '400'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "cpCode",
  description: "Информационный портал",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}, w-full text-base `}>
        <div className="__next">
          <SideBar />
          <div className="w-full">
            <Header />
            <main className="w-full">
              <div className="w-full">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
