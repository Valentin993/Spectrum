import localFont from "next/font/local";
import "./globals.css";
import next from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

const bebasNeue = localFont({
  src: [
    {
      path: "./fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
});

const dosis = localFont({
  src: [
    {
      path: "./fonts/Dosis-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/Dosis-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

const boldonse = localFont({
  src: [
    {
      path: "./fonts/Boldonse-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
});

export const metadata = {
  title: "SPECTRUM-Cocktail Bar",
  description: "Cocktail Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dosis.variable} ${boldonse.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
