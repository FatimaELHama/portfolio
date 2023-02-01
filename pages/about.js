import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import personalPhoto from "public/photo_1.png";
import { AcademicCapIcon, DocumentIcon } from "@heroicons/react/24/outline";

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

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Fatima El Hama - Web Developer Portfolio</title>
        <meta
          name="description"
          content="About Me - Fatima El Hama - Web Developer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* photo and name */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative mt-32 flex items-center justify-center sm:mt-36 md:mt-40 lg:mt-44 xl:mt-0 xl:h-screen"
        >
          <motion.div
            variants={item}
            className="relative h-72 w-48 shadow-xl shadow-black sm:h-96 sm:w-60 lg:h-[26rem] lg:w-72"
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
          <motion.p
            variants={item}
            className="absolute mt-48 font-serif text-4xl font-medium uppercase sm:text-6xl sm:font-normal md:text-7xl lg:text-8xl xl:text-9xl"
          >
            <span className="text-[#ffb617]">f</span>atima{" "}
            <span className="text-[#ffb617]">e</span>l{" "}
            <span className="text-[#ffb617]">h</span>ama
          </motion.p>
        </motion.div>
        <div className="my-16 flex flex-col items-center gap-y-14 gap-x-32 px-6 sm:my-28 sm:gap-y-20 sm:px-0 xl:my-20 xl:flex-row xl:gap-y-0">
          {/* about me */}
          <div className="flex  flex-1 flex-col items-center sm:max-w-lg xl:max-w-full">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="space-y-6"
            >
              <motion.h2
                variants={item}
                className="text-lg uppercase text-[#ffb617]"
              >
                about me
              </motion.h2>
              <motion.div
                variants={item}
                className="space-y-4 text-sm xl:max-w-md"
              >
                <motion.p>
                Hello! i'm Fatima, I'm a Full-stack web developer from Morocco with ability to learn and collaborate on rapidly changing environments.
                Eager to tackle web development challenges to achieve lasting impacts on user experience.
                </motion.p>
                <motion.p>
                I am ambitious and driven and I constantly set goals for myself, so I have something to strive towards. and I am highly organised.
                I always take notes, and I use a series of tools to help myself stay on top of deadlines.
                I love meeting new people and learning about their lives and their backgrounds and making them feel comfortable in my presence.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
          {/* education */}
          <div className="flex  flex-1 sm:max-w-lg xl:max-w-full">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="space-y-6"
            >
              <motion.h2
                variants={item}
                className="text-lg uppercase text-[#ffb617]"
              >
                education
              </motion.h2>
              <motion.div
                variants={container}
                className="space-y-4 text-xs sm:text-sm"
              >
                <motion.div
                  variants={item}
                  className="group flex items-center gap-x-6 uppercase sm:gap-x-6"
                >
                  <AcademicCapIcon className="h-8 w-8 shrink-0 stroke-white xl:group-hover:stroke-[#ffb617]" />
                  <div className="space-x-3">
                    <span>2020:</span>
                    <span>BAC SCIENCES PHYSIQUES</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="group flex items-center gap-x-6 uppercase sm:gap-x-6"
                >
                  <AcademicCapIcon className="h-8 w-8 shrink-0 stroke-white xl:group-hover:stroke-[#ffb617]" />
                  <div className="space-x-3">
                    <span>2020 - 2021:</span>
                    <span>BAC+1 EN GÉOLOGIE</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="group flex items-center gap-x-6 uppercase sm:gap-x-6"
                >
                  <AcademicCapIcon className="h-8 w-8 shrink-0 stroke-white xl:group-hover:stroke-[#ffb617]" />
                  <div className="space-x-3">
                    <span>2021 - À CE JOUR:</span>
                    <span>Étudiant Deuxième année Développement Digital</span>
                  </div>
                </motion.div>
                {/* CV & Cirtificates */}
                <motion.div
                  variants={item}
                  className="flex gap-x-4 pt-4 xl:gap-x-6"
                >
                  <a
                    href="/cv.pdf"
                    className="group flex w-fit items-center gap-x-2 rounded bg-slate-50 px-2 py-1 xl:hover:scale-105 xl:hover:transition-transform xl:hover:duration-300"
                  >
                    <DocumentIcon className="h-5 w-5 stroke-black group-hover:stroke-[#eba91a]" />
                    <p className="text-xs font-medium uppercase text-black sm:text-sm">
                      my cv
                    </p>
                  </a>
                  <a
                    href="/Certiword.pdf"
                    className="group flex w-fit items-center gap-x-2 rounded bg-slate-50 px-2 py-1 xl:hover:scale-105 xl:hover:transition-transform xl:hover:duration-300"
                  >
                    <DocumentIcon className="h-5 w-5 stroke-black group-hover:stroke-[#eba91a]" />
                    <p className="text-xs font-medium uppercase text-black sm:text-sm">
                      ms word certificate
                    </p>
                  </a>
                  <a
                    href="/Certiexcel.pdf"
                    className="group flex w-fit items-center gap-x-2 rounded bg-slate-50 px-2 py-1 xl:hover:scale-105 xl:hover:transition-transform xl:hover:duration-300"
                  >
                    <DocumentIcon className="h-5 w-5 stroke-black group-hover:stroke-[#eba91a]" />
                    <p className="text-xs font-medium uppercase text-black sm:text-sm">
                      ms excel certificate
                    </p>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
