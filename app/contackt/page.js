// pages/contact.js
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Spectrum Bar</title>
        <meta name="description" content="Get in touch with Spectrum Bar" />
      </Head>

      <main className="flex flex-col items-center justify-center py-16 px-6 min-h-screen">
        <div className="text-center text-white mb-12">
          <h1 className="text-3xl lg:text-7xl font-[Boldonse] text-[#FFFFFF]/[.30] leading-tight mb-4">
            Contact Spectrum Bar
          </h1>
          <p className="font-[Dosis] text-xl lg:text-4xl text-[#000000]/[.40]">
            We&apos;re excited to hear from you! Let&apos;s chat, or visit us
            for a drink!
          </p>
        </div>

        <div className="w-full max-w-2xl bg-[#FFFFFF]/[.20] p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block text-black w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-600 focus:outline-none shadow-sm transition duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block text-black w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-600 focus:outline-none shadow-sm transition duration-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="mt-2 block text-black w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-600 focus:outline-none shadow-sm transition duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-700 text-xl lg:text-2xl text-white rounded-xl hover:green-500 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
