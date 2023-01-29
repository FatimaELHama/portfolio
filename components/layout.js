import React from "react";
import Header from "./header";
import { Open_Sans, Cinzel } from "@next/font/google";

const openSans = Open_Sans({ variable: "--font-opensans", subsets: ["latin"] });
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={`${openSans.variable} ${cinzel.variable} font-sans`}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
