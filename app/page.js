"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "./image/hero_image.png";
import logo from "./image/logo.png";
import title from "./image/title.png";
import aboutOne from "./image/about1.png";
import aboutTwo from "./image/about2.png";
import bar from "./image/bar.png";
import barTwo from "./image/bar2.png";
import barThree from "./image/bar3.png";
import barFour from "./image/bar4.png";
import barFive from "./image/bar5.png";
import barSix from "./image/bar6.png";
import barSeven from "./image/bar7.png";
import barEight from "./image/bar8.png";
import { motion } from "framer-motion";
import drink from "./image/drink.png";
import drinkTwo from "./image/drink2.png";
import drinkTree from "./image/drink3.png";

export default function Home() {
  return (
    <>
      <main>
        <section className="pt-7 min-h-screen">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.5 },
                },
              }}
              className="flex justify-center items-center "
            >
              <Image
                src={hero}
                alt="heroImage"
                className="hidden md:block h-[780px] rounded-3xl blur-xs drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)]"
              />

              <Image src={logo} alt="logo pic" className="md:hidden pt-13" />

              {/* <Image
                src={title}
                alt="title"
                className="absolute w-7/12 md:w-6/12 pt-17 md:pt-0 drop-shadow-[0_4px_200px_rgba(0,0,0,0.90)]"
              /> */}

              <span className="absolute hidden md:block text-7xl text-[150px] lg:text-[250px] text-[#747e74]/[.80]  mask-r-from-90% mask-b-from-15%">
                SPECTRUM
              </span>

              <span className="absolute  hidden md:block font-[Dosis] text-4xl lg:text-5xl text-[#ffffff]/[.50] pt-80">
                Where Every Sip Tells a Story
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.7 },
                },
              }}
              className="text-center pt-5 md:hidden"
            >
              <span className=" block text-5xl font-[Boldonse] text-[#FFFFFF]/[.30]">
                SPECTRUM
              </span>

              <span className="block text-6xl pt-5 text-[#FFFFFF]/[.60]">
                Cocktail Bar
              </span>

              <span className="block font-[Dosis] text-3xl text-[#000000]/[.40]">
                Where Every Sip Tells a Story
              </span>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#3a4638]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              id="about"
              className="text-5xl text-center lg:text-start lg:text-8xl pt-10 lg:pt-40 text-[#FFFFFF]/[.30] font-[Boldonse]"
            >
              <h2>ABOUT</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="grid gap-1 grid-cols-2 py-23 place-items-center"
            >
              <Image
                src={aboutOne}
                alt="abou pic"
                className="w-10/12 lg:w-8/12 rounded-3xl col-span-1 row-span-2 drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)]"
              />

              <Image
                src={aboutTwo}
                alt="about pic2"
                className="hidden md:block w-9/12 h-9/12 rounded-3xl ml-19 drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)]"
              />

              <p className="font-bold lg:text-2xl xl:text-4xl font-[Dosis] text-[#FFFFFF]/[.50] text-center">
                Welcome to SPECTRUM, a vibrant cocktail bar where creativity
                meets craft. We specialize in handcrafted cocktails made with
                premium spirits, fresh ingredients, and a whole lot of passion.
                Whether you&apos;re in the mood for a timeless classic or an
                adventurous signature mix, our bartenders are here to shake
                things up just the way you like. With a cozy atmosphere, curated
                music, and a welcoming vibe, SPECTRUM is the perfect spot to
                unwind, celebrate, and savor every sip.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-black">
          <div className="flex ">
            <Image src={drink} alt="" className="w-4/12 mask-l-from-50% " />
            <Image src={drinkTwo} alt="" className="w-4/12" />
            <Image src={drinkTree} alt="" className="w-4/12 mask-r-from-30% " />
          </div>
        </section>

        <section className="bg-black">
          <div className="container mx-auto px-4">
            <div className="py-43">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-evenly"
              >
                <Image
                  src={bar}
                  alt=""
                  className="w-9/12 lg:w-auto rounded-3xl"
                />
                <Image
                  src={barTwo}
                  alt=""
                  className="w-9/12 lg:w-auto rounded-3xl my-7 lg:my-0"
                />
                <Image
                  src={barThree}
                  alt=""
                  className="w-9/12 lg:w-auto rounded-3xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-evenly py-13"
              >
                <Image src={barFour} alt="" className="rounded-3xl" />
                <div className="flex justify-center items-center">
                  <Image
                    src={barFive}
                    alt=""
                    className="rounded-3xl w-9/12 lg:w-auto my-7 lg:my-0"
                  />
                  <span className="absolute text-7xl lg:text-9xl  text-[#FFFFFF]/[.80]">
                    Mixology
                  </span>
                </div>
                <Image src={barSix} alt="" className="rounded-3xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="flex flex-col items-center lg:flex-row lg:items-stretch flex-wrap justify-evenly"
              >
                <Image
                  src={barSeven}
                  alt=""
                  className="rounded-3xl w-9/12 md:w-8/12 lg:w-5/12 pb-7 lg:pb-0"
                />
                <Image
                  src={barEight}
                  alt=""
                  className="rounded-3xl w-9/12 md:w-8/12 lg:w-5/12"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
