import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import personalPhoto from "public/photo_1.png";
import { DocumentIcon } from "@heroicons/react/24/outline";

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

const mobileVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 80,
    },
  },
};

const desktopVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 80,
    },
  },
};

let imageVariants = {};
if (typeof window !== "undefined") {
  const isDesktop = window.innerWidth >= 1280;
  imageVariants = isDesktop ? desktopVariants : mobileVariants;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Fatima El Hama - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Fatima El Hama - Web Developer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col-reverse items-center  gap-y-16 overflow-hidden pt-20 sm:gap-y-24 xl:h-screen xl:flex-row xl:gap-y-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col items-center justify-center gap-y-6 uppercase sm:gap-y-10 xl:items-start"
        >
          <motion.p variants={item} className="text-xl sm:text-2xl xl:ml-28">
            hello
          </motion.p>
          <motion.p
            variants={item}
            className="flex items-center gap-x-3 text-3xl sm:items-start sm:text-4xl xl:ml-28"
          >
            <span className="block  text-sm text-[#ffb617] sm:text-xl xl:-mt-5">
              i'm
            </span>{" "}
            <span className="whitespace-nowrap font-serif  lg:text-5xl xl:text-6xl">
              fatima el hama
            </span>
          </motion.p>
          <motion.p
            variants={item}
            className="flex flex-col items-center gap-y-1 gap-x-4 sm:flex-row xl:ml-40"
          >
            <span className="text-xl sm:text-2xl">web designer</span>
            <span className="text-lg text-[#ffb617] sm:text-xl">&</span>
            <span className="text-xl sm:text-2xl">developer</span>
          </motion.p>
          <motion.a
            variants={item}
            href="/cv.pdf"
            className="group mb-14 flex w-fit items-center gap-x-2 rounded bg-slate-50 px-2 py-1 sm:mb-0 xl:ml-28 xl:hover:scale-105 xl:hover:transition-transform xl:hover:duration-300"
          >
            <DocumentIcon className="h-7 w-7 stroke-black group-hover:stroke-[#eba91a]" />
            <p className="font-medium uppercase text-black">my cv</p>
          </motion.a>
        </motion.div>
        <motion.div className="mt-20 flex flex-1 items-center justify-center xl:mt-0">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative h-80 w-52 shadow-xl shadow-black after:absolute after:-top-2 after:-left-2 after:h-full after:w-full after:border after:border-[#ffb617] after:hover:top-0 after:hover:left-0 after:hover:duration-300 sm:h-96 sm:w-60 md:h-[26rem] md:w-60 lg:h-[30rem] lg:w-72"
          >
            <Image
              alt="personal photo"
              src={personalPhoto}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
