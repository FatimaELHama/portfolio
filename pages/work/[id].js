import React, { useState } from "react";
import Head from "next/head";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";
import FsLightbox from "fslightbox-react";
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

export async function getStaticPaths() {
  const paths = projects.map((project) => {
    return {
      params: {
        id: project.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const data = projects.filter((project) => project.id.toString() === id);
  return {
    // Passed to the page component as props
    props: { data },
  };
}

export default function Work({ data }) {
  const [toggler, setToggler] = useState(false);

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
        className="flex h-screen flex-col items-center justify-center gap-y-14 px-4 sm:gap-y-16 sm:px-14 md:gap-y-20 md:px-16 lg:gap-y-24 lg:px-40 xl:gap-y-28 xl:px-20"
      >
        <motion.h1
          variants={item}
          className="text-3xl uppercase sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {data[0].name}
        </motion.h1>
        <motion.div
          variants={container}
          className="space-y-6 text-xs sm:space-y-7 sm:text-sm md:space-y-8 md:text-base lg:text-lg xl:space-y-4"
        >
          <motion.div variants={item} className="flex gap-x-4">
            <span className="uppercase text-[#ffb617]">description:</span>
            <p className="uppercase">{data[0].description}</p>
          </motion.div>
          <motion.div variants={item} className="flex gap-x-4">
            <span className="uppercase text-[#ffb617]">technologies:</span>
            <p className="uppercase">{data[0].technologies}</p>
          </motion.div>
          <motion.button
          variants={item}
            onClick={() => {
              setToggler(!toggler);
            }}
            className="flex w-fit items-center gap-x-2 rounded-lg bg-[#fab216] px-3 py-2 text-xs font-semibold uppercase text-neutral-900 hover:bg-[#fab216]/95 focus:outline-none focus:ring-2 focus:ring-neutral-600 lg:text-sm"
          >
            <span className="">project images</span>
            <ArrowRightIcon className="h-4 w-4 fill-neutral-900 lg:h-5 lg:w-5" />
          </motion.button>
        </motion.div>
        <FsLightbox toggler={toggler} sources={data[0].images} />
      </motion.div>
    </>
  );
}
