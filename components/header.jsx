import React, { useState } from "react";
import Link from "next/link";
import Logo from "./icons/logo";
import cn from "classnames";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };
  return (
    <>
      <div className="fixed top-0 z-40 w-full bg-[#0c0b0b] px-6 pt-2 text-sm">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Logo className="h-10 w-10 fill-[#c98b05] sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
          </Link>
          {/* tablet and desktop nav */}
          <ul className="hidden items-center justify-center gap-x-6 uppercase md:flex">
            <li className="hover:text-[#ffb617]">
              <Link href="/">home</Link>
            </li>
            <li className="hover:text-[#ffb617]">
              <Link href="/about">about</Link>
            </li>
            <li className="hover:text-[#ffb617]">
              <Link href="/work">work</Link>
            </li>
            <li className="hover:text-[#ffb617]">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
          {/* mobile and sm nav */}
          <button onClick={toggleMenu} className="md:hidden">
            <Bars3Icon className="h-6 w-6 stroke-white" />
          </button>
        </nav>
      </div>
      <div
        className={cn(
          "z-40 h-screen w-screen bg-neutral-900",
          open ? "fixed top-0" : "hidden"
        )}
      >
        <button onClick={toggleMenu}>
          <XMarkIcon className="absolute top-4 right-4 z-40 h-8 w-8 stroke-white" />
        </button>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex h-full w-full flex-col items-center justify-center gap-y-11 text-4xl font-light uppercase sm:text-7xl"
        >
          <motion.li variants={item} onClick={toggleMenu}>
            <Link href="/">home</Link>
          </motion.li>
          <motion.li variants={item} onClick={toggleMenu}>
            <Link href="/about">about</Link>
          </motion.li>
          <motion.li variants={item} onClick={toggleMenu}>
            <Link href="/work">work</Link>
          </motion.li>
          <motion.li variants={item} onClick={toggleMenu}>
            <Link href="/contact">contact</Link>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
}
