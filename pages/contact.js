import React from "react";
import Head from "next/head";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
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

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Fatima El Hama - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Contact Me - Fatima El Hama - Web Developer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-32 flex flex-col items-center gap-y-14 sm:mt-44 sm:gap-y-16 md:gap-y-20 lg:gap-y-24"
      >
        <motion.p
          variants={item}
          className="font-serif text-4xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-[#ffb617]">g</span>et{" "}
          <span className="text-[#ffb617]">i</span>n{" "}
          <span className="text-[#ffb617]">t</span>ouch {""}
        </motion.p>
        <motion.div
          variants={item}
          className="group flex items-center gap-x-4 text-sm uppercase sm:text-base md:text-lg"
        >
          <EnvelopeIcon className="h-5 w-5 shrink-0 stroke-white  sm:h-6 sm:w-6 md:h-8 md:w-8 xl:group-hover:stroke-[#ffb617]" />
          <a href="mailto:fatima.elhama19@gmail.com">
            fatima.elhama19@gmail.com
          </a>
        </motion.div>
        <motion.div variants={item} className="mb-24">
          <form
            action="https://getform.io/f/0297da96-566c-4232-95b6-ab552d5ddbe0"
            className="flex flex-col items-center space-y-4 sm:items-start"
          >
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="capitalize">
                name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="h-9  w-72 border-2 border-neutral-800 font-medium text-neutral-900 caret-neutral-800 placeholder:text-xs placeholder:font-medium placeholder:uppercase focus:border-2 focus:border-[#eea406] focus:outline-0 focus:ring-0 sm:w-96 md:w-[32rem] lg:w-[35rem]"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="capitalize">
                email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="h-9  w-72 border-2 border-neutral-800 font-medium text-neutral-900 caret-neutral-800 placeholder:text-xs placeholder:font-medium placeholder:uppercase focus:border-2 focus:border-[#eea406] focus:outline-0 focus:ring-0 sm:w-96 md:w-[32rem] lg:w-[35rem]"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="message" className="capitalize">
                message:
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                className="h-52  w-72 resize-none border-2 border-neutral-800 font-medium text-neutral-900 caret-neutral-800 placeholder:text-xs placeholder:font-medium placeholder:uppercase focus:border-2 focus:border-[#eea406] focus:outline-0 focus:ring-0 sm:w-96 md:w-[32rem] lg:w-[35rem]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-72 bg-[#fab216] px-3 py-0.5 text-lg uppercase hover:bg-[#fab216]/95 sm:w-auto"
            >
              send
            </button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}
