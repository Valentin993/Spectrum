import Image from "next/image";
import logo from "../image/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#3B4336] to-[#66745F] ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-7 drop-shadow-[0_4px_40px_rgba(0,0,0,0.90)]">
          <Image src={logo} alt="logo pic" width={180} />
        </div>

        <p className="text-xl md:text-2xl lg:text-4xl font-[Dosis] text-[#FFFFFF]/[.50] text-center">
          Whispers in the glass, shadows in the glow
        </p>

        <p className="text-xl md:text-4xl lg:text-6xl text-center text-[#000000]/[.50] py-5">
          SPECTRUM is where the night begins to tell its story
        </p>

        <div className="text-end">
          <p className="text-[#FFFFFF]/[.40] text-md lg:text-lg">
            &copy;{currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
