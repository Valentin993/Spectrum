"use client";
import Image from "next/image";
import Link from "next/link";
import cocktail from "../image/cocktail.png";
import cocktailTwo from "../image/cocktail2.png";
import cocktailTree from "../image/cocktail3.png";
import cocktailFour from "../image/cocktail4.png";
import cocktailFive from "../image/cocktail5.png";
import cocktailSix from "../image/cocktail6.png";
import cocktailSeven from "../image/cocktail7.png";
import cocktailEigth from "../image/cocktail8.png";
import { motion } from "framer-motion";

export default function Cocktails() {
  return (
    <section className="bg-[#3a4638]">
      <div className="container mx-auto px-4">
        <motion.h2
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
              transition: { delay: 0.6 },
            },
          }}
          className="text-5xl lg:text-8xl text-center font-[Boldonse] text-[#FFFFFF]/[.40] py-14"
        >
          COCKTAILS
        </motion.h2>

        <motion.div
          initial={{ y: 100, opasity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opasity: 0 }}
          transition={{ duration: 0.75 }}
          className="flex flex-wrap justify-evenly py-11 drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)] relative"
        >
          <Link
            href=""
            className="flex justify-center flex-wrap relative hover:scale-105"
          >
            <span className="absolute text-4xl lg:text-6xl pt-7 ">
              Margarita
            </span>
            <Image src={cocktail} alt="" className="rounded-3xl" />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>50ml Tequila</li>
                <li>25ml Lime juice</li>
                <li>20ml Triple sec</li>
              </ul>
            </div>
          </Link>

          <Link
            href=""
            className="flex flex-col justify-end relative hover:scale-105 pt-9 2xl:pt-0"
          >
            <span className="absolute text-4xl lg:text-6xl pl-3 lg:pl-13 pb-7">
              tequila sunrise
            </span>
            <Image src={cocktailTwo} alt="" className="rounded-3xl" />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>30 ml Grenadine syrup</li>
                <li>50ml Tequila</li>
                <li>100 ml Orange juice</li>
              </ul>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-evenly drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)]"
        >
          <Link href="" className="flex justify-end relative hover:scale-105">
            <span className="absolute text-4xl lg:text-6xl pt-7 pr-5 lg:pr-13 ">
              Negroni
            </span>
            <Image src={cocktailTree} alt="" className="rounded-3xl" />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>30 ml Gin</li>
                <li>30ml Campari</li>
                <li>30 ml Sweet vermouth</li>
              </ul>
            </div>
          </Link>

          <Link
            href=""
            className="flex flex-col relative hover:scale-105 pt-9 2xl:pt-0"
          >
            <span className="absolute text-4xl lg:text-6xl pl-13 pt-37">
              Martini
            </span>
            <Image src={cocktailFour} alt="" className="rounded-3xl" />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>60 ml Gin</li>
                <li>10 ml Dry vermouth</li>
              </ul>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-evenly py-11 drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)]"
        >
          <Link
            href=""
            className="flex justify-center relative hover:scale-105"
          >
            <span className="absolute text-4xl lg:text-6xl pt-3">
              whiskey sour
            </span>
            <Image src={cocktailFive} alt="" className="rounded-3xl " />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>50ml Whiskey</li>
                <li>35ml Lemon juice</li>
                <li>20ml Simple syrup</li>
                <li>Egg white</li>
              </ul>
            </div>
          </Link>

          <Link
            href=""
            className="flex flex-col justify-center items-center relative hover:scale-105 pt-9 2xl:pt-0"
          >
            <span className="absolute text-4xl lg:text-6xl ">
              strawberry caipiroska
            </span>
            <Image src={cocktailSix} alt="" className="rounded-3xl" />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>50ml Vodka</li>
                <li>50g Strawberries</li>
                <li>30g Lime</li>
                <li>20g Brown sugar</li>
              </ul>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-evenly pb-31 drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)]"
        >
          <Link href="" className="flex relative hover:scale-105">
            <span className="absolute text-4xl lg:text-6xl pt-7 pl-13">
              mai tai
            </span>
            <Image src={cocktailSeven} alt="" className="rounded-3xl " />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>25ml White rum</li>
                <li>25ml Dark rum</li>
                <li>25ml Lime juicee</li>
                <li>10ml Simple syrup</li>
                <li>10ml Orgeat syrup</li>
                <li>10ml orange curacao</li>
              </ul>
            </div>
          </Link>

          <Link
            href=""
            className="flex flex-col justify-end relative hover:scale-105 pt-9 2xl:pt-0"
          >
            <span className="absolute text-4xl lg:text-6xl pb-7 pl-13">
              aperol sour
            </span>
            <Image src={cocktailEigth} alt="" className="rounded-3xl" />
            <div className="absolute inset-0 hover:backdrop-blur-md transition-all duration-700 w-full flex flex-col justify-center items-center pt-5 rounded-3xl inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <p className="text-6xl">INGREDIENTS:</p>
              <ul className="text-4xl text-center font-[Dosis] pt-2 ">
                <li>50ml Aperol</li>
                <li>40ml Gin</li>
                <li>30ml Lime juice</li>
                <li>20ml Orange juice</li>
                <li>20ml Simple syrup</li>
              </ul>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
