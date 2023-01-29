import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import Github from "@/components/icons/Github";
import personalPhoto from "public/photo_1.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
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

export default function Work() {
  return (
    <>
      <Head>
        <title>My Work - Fatima El Hama - Web Developer Portfolio</title>
        <meta
          name="description"
          content="My Work - Fatima El Hama - Web Developer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="my-24 flex flex-col items-center gap-y-14 sm:my-28 sm:gap-y-16 md:my-32 md:gap-y-20 lg:gap-y-24 xl:gap-y-28"
      >
        <motion.p
          variants={item}
          className="font-serif text-4xl uppercase sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          <span className="text-[#ffb617]">m</span>y{" "}
          <span className="text-[#ffb617]">w</span>ork{" "}
        </motion.p>
        <motion.div
          variants={container}
          className="grid gap-14 sm:gap-16 md:gap-20 xl:grid-cols-2 xl:gap-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              initial="hidden"
              whileInView="visible"
              className="w-80 flex flex-col justify-self-center rounded-lg border border-neutral-900 bg-neutral-900 shadow sm:w-96 md:w-[28rem] lg:w-[32rem]"
            >
              <div className="relative h-56 w-full sm:h-64 md:h-72 lg:h-80">
                <Image
                  alt="personal photo"
                  src={project.images[0]}
                  fill
                  sizes="100vw"
                  className="rounded-t-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex flex-col grow justify-between gap-y-3 p-3 sm:gap-y-4 sm:p-5 md:gap-y-6 lg:gap-y-4">
                <Link href="#">
                  <h5 className="font-medium uppercase tracking-wide text-white sm:text-lg md:text-xl lg:text-2xl">
                    {project.name}
                  </h5>
                </Link>
                <p className="text-xs text-gray-300 sm:text-sm lg:text-base">
                  {project.description}
                </p>
                <p className="text-xs uppercase text-gray-300 sm:text-sm lg:text-base">
                  {project.tehnologies}
                </p>
                <div className="flex gap-x-4">
                  <Link
                    href={"work/" + project.id}
                    className="flex w-fit items-center gap-x-2 rounded-lg bg-[#fab216] px-3 py-2 text-xs font-semibold uppercase text-neutral-900 hover:bg-[#fab216]/95 focus:outline-none focus:ring-2 focus:ring-neutral-600 lg:text-sm"
                  >
                    <span className="">show more</span>
                    <ArrowRightIcon className="h-4 w-4 fill-neutral-900 lg:h-5 lg:w-5" />
                  </Link>
                  <a
                    href={project.repo}
                    className="flex w-fit items-center gap-x-2 rounded-lg bg-[#fab216] px-3 py-2 text-xs font-semibold uppercase text-neutral-900 hover:bg-[#fab216]/95 focus:outline-none focus:ring-2 focus:ring-neutral-600 lg:text-sm"
                  >
                    <span className="">Github Repo</span>
                    <Github className="h-4 w-4 fill-neutral-900 lg:h-5 lg:w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
