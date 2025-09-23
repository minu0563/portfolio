import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Children } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1c1a1a] flex flex-col min-h-screen text-white font-stretch-75% font-juache">
        <header className="flex justify-between items-center border-b border-gray-700 py-2 px-8">
          <Link href='/'>
            <h1 className=" text-2xl ml-5 sm:ml-21 mg:ml-33 lg:ml-45 font-bold maintext">CoCoNuT</h1>
          </Link>
          <div className="flex mr-2 sm:mr-12 ml:mr-20 lg:mr-30 gap-3 sm:gap-10 ml:gap-15 lg:gap-20 texthovercolor cursor-pointer">
            <Link href='/websitepage'>
              <h4>website</h4>
            </Link>
            <Link href='/extensionpage'>
              <h4>extensions</h4>
            </Link>
            <Link href='/newspage'>
              <h4>news</h4>
            </Link>
            <Link href='/aboutpage'>
              <h4>about</h4>
            </Link>
          </div>
        </header>

        <main className="text-white flex-1">
          {children}
        </main>
        <footer className="text-center py-2 border-t border-gray-700 flex justify-center">
          <p>© 2025 CoCoNuT. All rights reserved.</p>
        </footer>
      </body>
    </html >
  );
}
